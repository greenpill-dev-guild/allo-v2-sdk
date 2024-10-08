import {
  Chain,
  PublicClient,
  Transport,
  encodeAbiParameters,
  encodeFunctionData,
  extractChain,
  getContract,
  parseAbiParameters,
} from "viem";
import { Allo } from "../../Allo/Allo";
import { abi as alloAbi } from "../../Allo/allo.config";
import { create } from "../../Client/Client";
import {
  ConstructorArgs,
  DeployParams,
  TransactionData,
  ZERO_ADDRESS,
} from "../../Common/types";
import { supportedChains } from "../../chains.config";
import { NATIVE } from "../../types";
import { Status } from "../types";
import { abi, bytecode } from "./yeeter.config";
import { Allocation, InitializeData, RegisterData } from "./types";

export class YeeterStrategy {
  private client: PublicClient<Transport, Chain>;
  private contract: any;
  private strategy: `0x${string}` | undefined;
  private allo: Allo;

  constructor({ chain, rpc, address }: ConstructorArgs) {
    const usedChain = extractChain({
      chains: supportedChains,
      id: chain as any,
    });

    this.client = create(usedChain, rpc);
    this.allo = new Allo({ chain, rpc });

    if (address) {
      this.contract = getContract({
        address: address,
        abi,
        client: {
          public: this.client,
        }
      });
      this.strategy = address;
    }
  }

  public async getAllo(): Promise<Allo> {
    return this.allo;
  }

  public setContract(address: `0x${string}`): void {
    this.contract = getContract({
      address: address,
      abi,
      client: {
        public: this.client,
      }
    });

    this.strategy = address;
  }

  private checkStrategy(): void {
    if (!this.strategy)
      throw new Error(
        "YeeterStrategy: No strategy address provided. Please call `setContract` first.",
      );
  }

  /* Read Functions */

  /**
   * Get the native token address
   * @returns Promise<string> The native token address
   */
  public async getNative(): Promise<string> {
    this.checkStrategy();
    const native = await this.contract.read.NATIVE();
    return native;
  }

  /**
   * Get the current pool amount
   * @returns Promise<bigint> The current pool amount
   */
  public async getPoolAmount(): Promise<bigint> {
    this.checkStrategy();
    const amount = await this.contract.read.getPoolAmount();
    return amount;
  }

  /**
   * Get the pool ID
   * @returns Promise<bigint> The pool ID
   */
  public async getPoolId(): Promise<bigint> {
    this.checkStrategy();
    const id = await this.contract.read.getPoolId();
    return id;
  }

  /**
   * Get the status of a recipient
   * @param recipientId The address of the recipient
   * @returns Promise<Status> The status of the recipient
   */
  public async getRecipientStatus(recipientId: string): Promise<Status> {
    this.checkStrategy();
    const status = await this.contract.read.getRecipientStatus([recipientId]);
    return status;
  }

  /**
   * Get the strategy ID
   * @returns Promise<string> The strategy ID
   */
  public async getStrategyId(): Promise<string> {
    this.checkStrategy();
    const id = await this.contract.read.getStrategyId();
    return id;
  }

  /**
   * Check if the pool is active
   * @returns Promise<boolean> True if the pool is active, false otherwise
   */
  public async isPoolActive(): Promise<boolean> {
    this.checkStrategy();
    const active = await this.contract.read.isPoolActive();
    return active;
  }

  /**
   * Check if an address is a valid allocator
   * @param allocator The address to check
   * @returns Promise<boolean> True if the address is a valid allocator, false otherwise
   */
  public async isValidAllocator(allocator: `0x${string}`): Promise<boolean> {
    this.checkStrategy();
    const valid = await this.contract.read.isValidAllocator([allocator]);
    return valid;
  }

  /**
   * Write functions
   */

  /**
   *
   * @returns DeployParams {abi, bytecode}
   */
  public getDeployParams(): DeployParams {
    const version = "YeeterStrategy1.0";

    const constructorArgs: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address, string"),
      [this.allo.address(), version],
    );
    const constructorArgsNo0x = constructorArgs.slice(2);

    return {
      abi,
      bytecode: (bytecode + constructorArgsNo0x) as unknown as `0x${string}`,
    };
  }

  /**
   * Get the encoded initialization data
   * @param data The initialization data
   * @returns Promise<`0x${string}`> The encoded initialization data
   */
  public async getInitializeData(data: InitializeData): Promise<`0x${string}`> {
    const encodedData: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("(bytes, uint64)"),
      [[
        data.data,
        data.poolId,
      ]]
    );

    return encodedData;
  }

  /**
   * Get the encoded allocation data
   * @param data The allocation data (receipientIds[], amounts[], token)
   * @returns `0x${string}` The encoded allocation data
   */
  public getEncodedAllocation(data: Allocation): `0x${string}` {
    const encoded: `0x${string}` = encodeAbiParameters(
      parseAbiParameters("address[], uint256[], address"),
      [data.recipientIds, data.amounts, data.token]
    );

    return encoded;
  }

  /**
   * Get the transaction data for allocation
   * @param allocations The allocation data
   * @returns TransactionData The transaction data for allocation
   */
  public getAllocateData(allocations: Allocation): TransactionData {
    this.checkStrategy();

    let totalNativeAmount = BigInt(0);

    if (allocations.token.toLowerCase() === NATIVE.toLowerCase()) {
      totalNativeAmount = allocations.amounts.reduce((a, b) => a + BigInt(b), BigInt(0));
    }

    const encoded = this.getEncodedAllocation(allocations);

    const encodedData = encodeFunctionData({
      abi,
      functionName: "allocate",
      args: [allocations.recipientIds, allocations.amounts, allocations.token],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: totalNativeAmount.toString(),
    };
  }

  /**
   * Get the transaction data for registering a recipient
   * @param data The recipient registration data
   * @returns TransactionData The transaction data for registering a recipient
   */
  public getRegisterRecipientData(data: RegisterData): TransactionData {
    this.checkStrategy();

    const encodedData = encodeFunctionData({
      abi,
      functionName: "registerRecipient",
      args: [data.data, data.sender],
    });

    return {
      to: this.strategy!,
      data: encodedData,
      value: "0",
    };
  }

  /**
   * Get the transaction data for withdrawing tokens
   * @param token The address of the token to withdraw
   * @param recipient The address of the recipient
   * @param amount The amount to withdraw
   * @returns TransactionData The transaction data for the withdrawal
   */
  public withdraw(token: `0x${string}`, recipient: `0x${string}`, amount: bigint): TransactionData {
    this.checkStrategy();
    const data = encodeFunctionData({
      abi,
      functionName: "withdraw",
      args: [token, recipient, amount],
    });

    return {
      to: this.strategy!,
      data,
      value: "0",
    };
  }
}