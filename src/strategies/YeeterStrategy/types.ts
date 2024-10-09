import type { Metadata } from "../../Common/types";

// Update Recipient type
export type Recipient = {
  recipientAddress: `0x${string}`;
  metadata: Metadata;
};

// Update RegisterData type
export type RegisterData = {
  sender: `0x${string}`;
  data: `0x${string}`; // Encoded data
};

// Update InitializeData type
export type InitializeData = {
  poolId: bigint;
  data: `0x${string}`; // Encoded data
};

// Update Allocation type
export type Allocation = {
  recipientId: `0x${string}`;
  amount: bigint;
  token: `0x${string}`;
  // data: `0x${string}`;
  // sender: `0x${string}`;
};

// Add new types based on the ABI

export type PayoutSummary = {
  recipientAddress: `0x${string}`;
  amount: bigint;
};

export type Status = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// Add any other types that might be needed based on the ABI
