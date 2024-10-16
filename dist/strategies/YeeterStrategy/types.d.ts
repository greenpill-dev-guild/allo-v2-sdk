import type { Metadata } from "../../Common/types";
export type Recipient = {
    recipientAddress: `0x${string}`;
    metadata: Metadata;
};
export type RegisterData = {
    sender: `0x${string}`;
    data: `0x${string}`;
};
export type InitializeData = {
    data: `0x${string}`;
};
export type Allocation = {
    recipientIds: `0x${string}`[];
    amounts: bigint[];
    token: `0x${string}`;
};
export type PayoutSummary = {
    recipientAddress: `0x${string}`;
    amount: bigint;
};
export type Status = 0 | 1 | 2 | 3 | 4 | 5 | 6;
