import { Allo } from "../../Allo/Allo";
import { ConstructorArgs, DeployParams, TransactionData } from "../../Common/types";
import { Status } from "../types";
import { Allocation, InitializeData, RegisterData } from "./types";
export declare class YeeterStrategy {
    private client;
    private contract;
    private strategy;
    private allo;
    constructor({ chain, rpc, address }: ConstructorArgs);
    getAllo(): Promise<Allo>;
    setContract(address: `0x${string}`): void;
    private checkStrategy;
    /**
     * Get the native token address
     * @returns Promise<string> The native token address
     */
    getNative(): Promise<string>;
    /**
     * Get the current pool amount
     * @returns Promise<bigint> The current pool amount
     */
    getPoolAmount(): Promise<bigint>;
    /**
     * Get the pool ID
     * @returns Promise<bigint> The pool ID
     */
    getPoolId(): Promise<bigint>;
    /**
     * Get the status of a recipient
     * @param recipientId The address of the recipient
     * @returns Promise<Status> The status of the recipient
     */
    getRecipientStatus(recipientId: string): Promise<Status>;
    /**
     * Get the strategy ID
     * @returns Promise<string> The strategy ID
     */
    getStrategyId(): Promise<string>;
    /**
     * Check if the pool is active
     * @returns Promise<boolean> True if the pool is active, false otherwise
     */
    isPoolActive(): Promise<boolean>;
    /**
     * Check if an address is a valid allocator
     * @param allocator The address to check
     * @returns Promise<boolean> True if the address is a valid allocator, false otherwise
     */
    isValidAllocator(allocator: `0x${string}`): Promise<boolean>;
    /**
     * Write functions
     */
    /**
     *
     * @returns DeployParams {abi, bytecode}
     */
    getDeployParams(): DeployParams;
    /**
     * Get the encoded initialization data
     * @param data The initialization data
     * @returns Promise<`0x${string}`> The encoded initialization data
     */
    getInitializeData(data: InitializeData): Promise<`0x${string}`>;
    /**
     * Get the encoded allocation data
     * @param data The allocation data (receipientIds[], amounts[], token)
     * @returns `0x${string}` The encoded allocation data
     */
    getEncodedAllocation(data: Allocation): `0x${string}`;
    /**
     * Get the transaction data for allocation
     * @param allocations The allocation data
     * @returns TransactionData The transaction data for allocation
     */
    getAllocateData(allocations: Allocation): TransactionData;
    /**
     * Get the transaction data for registering a recipient
     * @param data The recipient registration data
     * @returns TransactionData The transaction data for registering a recipient
     */
    getRegisterRecipientData(data: RegisterData): TransactionData;
    /**
     * Get the transaction data for withdrawing tokens
     * @param token The address of the token to withdraw
     * @param recipient The address of the recipient
     * @param amount The amount to withdraw
     * @returns TransactionData The transaction data for the withdrawal
     */
    withdraw(token: `0x${string}`, recipient: `0x${string}`, amount: bigint): TransactionData;
}
