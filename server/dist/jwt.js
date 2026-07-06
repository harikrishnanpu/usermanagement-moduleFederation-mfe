import jwt from "jsonwebtoken";
const JWT_SECRET = "simple-jwt-secret";
export function signToken(userId) {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "7d" });
}
export function verifyToken(token) {
    try {
        return jwt.verify(token, JWT_SECRET);
    }
    catch {
        return null;
    }
}
