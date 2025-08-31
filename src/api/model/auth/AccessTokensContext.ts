export interface AccessTokenContext {
  accessToken: string;
  refreshToken: string;
  expiresAt?: number;
}