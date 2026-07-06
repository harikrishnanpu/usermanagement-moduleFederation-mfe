import { verifyToken } from "./jwt.js";
export function authMiddleware(req, res, next) {
    const header = req.headers.authorization;
    const token = header?.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) {
        return res.status(401).json({ message: "Not logged in" });
    }
    const payload = verifyToken(token);
    if (!payload) {
        return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = payload.userId;
    next();
}
