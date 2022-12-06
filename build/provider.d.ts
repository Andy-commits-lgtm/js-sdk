import { NetworkId } from "@near-wallet-selector/core";
import { Strategy } from "./strategy";
export interface HereProviderOptions extends Strategy {
    id?: string;
    network: NetworkId;
    signal?: AbortSignal;
    args: Record<string, string>;
    strategy?: Strategy;
}
export declare enum HereProviderStatus {
    APPROVING = 1,
    FAILED = 2,
    SUCCESS = 3
}
export interface HereProviderResult {
    account_id?: string;
    payload?: string;
    status: HereProviderStatus;
}
export declare class HereProviderError extends Error {
    readonly payload?: string | undefined;
    readonly parentError?: Error | undefined;
    constructor(payload?: string | undefined, parentError?: Error | undefined);
}
export declare type HereProvider = (options: HereProviderOptions) => Promise<HereProviderResult>;
