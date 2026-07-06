import jwt from "jsonwebtoken";

const JWT_SECRET = "simple-jwt-secret";

export type TokenPayload = {
  userId: number;
};

export function signToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch {
    return null;
  }
}
