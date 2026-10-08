export interface NetworkStatus {
  network: "testnet";
  passphrase: string;
  protocol_version: number;
  ledger_sequence: number;
  ledger_closed_at_unix: string;
  ledger_hash: string;
  source: "stellar-rpc";
}
export interface Capabilities {
  payments_enabled: boolean;
  confidential_token_verified: boolean;
  private_payments_verified: boolean;
  fiat_payouts_enabled: boolean;
}
export type PrivacyRail = "confidential-token" | "private-payments";
export interface Corridor {
  id: string;
  origin_country: string;
  destination_country: string;
  asset_code: string;
  asset_issuer: string | null;
  privacy_rail: PrivacyRail;
}
export class ApiUnavailable extends Error {
  constructor(public readonly status: number, public readonly endpoint: string) {
    super(status === 503
      ? "The data service is not configured or available."
      : `The data service returned HTTP ${status}.`);
    this.name = "ApiUnavailable";
  }
}
export async function readBridge<T>(endpoint: "network" | "corridors" | "capabilities", signal?: AbortSignal): Promise<T> {
  const res = await fetch(`/api/bridge/v1/${endpoint}`, {cache:"no-store",signal});
  if (!res.ok) throw new ApiUnavailable(res.status, endpoint);
  return res.json() as Promise<T>;
}
