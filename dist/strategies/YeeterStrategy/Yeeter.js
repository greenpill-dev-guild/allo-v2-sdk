"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YeeterStrategy = void 0;
const viem_1 = require("viem");
const Allo_1 = require("../../Allo/Allo");
const allo_config_1 = require("../../Allo/allo.config");
const Client_1 = require("../../Client/Client");
const chains_config_1 = require("../../chains.config");
const types_1 = require("../../types");
const yeeter_config_1 = require("./yeeter.config");
class YeeterStrategy {
    constructor({ chain, rpc, address, poolId }) {
        const usedChain = (0, viem_1.extractChain)({
            chains: chains_config_1.supportedChains,
            id: chain,
        });
        this.client = (0, Client_1.create)(usedChain, rpc);
        this.allo = new Allo_1.Allo({ chain, rpc });
        this.poolId = poolId || BigInt(-1);
        if (address) {
            this.contract = (0, viem_1.getContract)({
                address: address,
                abi: yeeter_config_1.abi,
                client: {
                    public: this.client,
                }
            });
            this.strategy = address;
        }
    }
    getAllo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.allo;
        });
    }
    setContract(address) {
        this.contract = (0, viem_1.getContract)({
            address: address,
            abi: yeeter_config_1.abi,
            client: {
                public: this.client,
            }
        });
        this.strategy = address;
    }
    checkStrategy() {
        if (!this.strategy)
            throw new Error("YeeterStrategy: No strategy address provided. Please call `setContract` first.");
    }
    /* Read Functions */
    /**
     * Get the native token address
     * @returns Promise<string> The native token address
     */
    getNative() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const native = yield this.contract.read.NATIVE();
            return native;
        });
    }
    /**
     * Get the current pool amount
     * @returns Promise<bigint> The current pool amount
     */
    getPoolAmount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const amount = yield this.contract.read.getPoolAmount();
            return amount;
        });
    }
    /**
     * Get the pool ID
     * @returns Promise<bigint> The pool ID
     */
    getPoolId() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const id = yield this.contract.read.getPoolId();
            return id;
        });
    }
    /**
     * Get the status of a recipient
     * @param recipientId The address of the recipient
     * @returns Promise<Status> The status of the recipient
     */
    getRecipientStatus(recipientId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const status = yield this.contract.read.getRecipientStatus([recipientId]);
            return status;
        });
    }
    /**
     * Get the strategy ID
     * @returns Promise<string> The strategy ID
     */
    getStrategyId() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const id = yield this.contract.read.getStrategyId();
            return id;
        });
    }
    /**
     * Check if the pool is active
     * @returns Promise<boolean> True if the pool is active, false otherwise
     */
    isPoolActive() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const active = yield this.contract.read.isPoolActive();
            return active;
        });
    }
    /**
     * Check if an address is a valid allocator
     * @param allocator The address to check
     * @returns Promise<boolean> True if the address is a valid allocator, false otherwise
     */
    isValidAllocator(allocator) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStrategy();
            const valid = yield this.contract.read.isValidAllocator([allocator]);
            return valid;
        });
    }
    /**
     * Write functions
     */
    /**
     *
     * @returns DeployParams {abi, bytecode}
     */
    getDeployParams() {
        const version = "YeeterStrategy1.0";
        const constructorArgs = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address, string"), [this.allo.address(), version]);
        const constructorArgsNo0x = constructorArgs.slice(2);
        return {
            abi: yeeter_config_1.abi,
            bytecode: (yeeter_config_1.bytecode + constructorArgsNo0x),
        };
    }
    /**
     * Get the encoded initialization data
     * @param data The initialization data
     * @returns Promise<`0x${string}`> The encoded initialization data
     */
    getInitializeData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const encodedData = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("(bytes, uint64)"), [[
                    data.data,
                    this.poolId,
                ]]);
            return encodedData;
        });
    }
    /**
     * Get the encoded allocation data
     * @param data The allocation data (receipientIds[], amounts[], token)
     * @returns `0x${string}` The encoded allocation data
     */
    getEncodedAllocation(data) {
        const encoded = (0, viem_1.encodeAbiParameters)((0, viem_1.parseAbiParameters)("address[], uint256[], address"), [data.recipientIds, data.amounts, data.token]);
        return encoded;
    }
    /**
     * Get the transaction data for allocation
     * @param allocations The allocation data
     * @returns TransactionData The transaction data for allocation
     */
    getAllocateData(allocations) {
        this.checkStrategy();
        let totalNativeAmount = BigInt(0);
        for (const allocation of allocations.amounts) {
            if (allocations.token.toLowerCase() === types_1.NATIVE.toLowerCase())
                totalNativeAmount += allocation;
        }
        const allocationBytes = (0, viem_1.keccak256)((0, viem_1.encodePacked)(['address[]', 'uint256[]', 'address'], [allocations.recipientIds, allocations.amounts, allocations.token]));
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: allo_config_1.abi,
            functionName: "allocate",
            args: [this.poolId, allocationBytes],
        });
        return {
            to: this.strategy,
            data: encodedData,
            value: totalNativeAmount.toString(),
        };
    }
    /**
     * Get the transaction data for registering a recipient
     * @param data The recipient registration data
     * @returns TransactionData The transaction data for registering a recipient
     */
    getRegisterRecipientData(data) {
        this.checkStrategy();
        const encodedData = (0, viem_1.encodeFunctionData)({
            abi: yeeter_config_1.abi,
            functionName: "registerRecipient",
            args: [data.data, data.sender],
        });
        return {
            to: this.strategy,
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
    withdraw(token, recipient, amount) {
        this.checkStrategy();
        const data = (0, viem_1.encodeFunctionData)({
            abi: yeeter_config_1.abi,
            functionName: "withdraw",
            args: [token, recipient, amount],
        });
        return {
            to: this.strategy,
            data,
            value: "0",
        };
    }
}
exports.YeeterStrategy = YeeterStrategy;
