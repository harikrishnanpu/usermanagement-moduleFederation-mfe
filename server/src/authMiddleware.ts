import type { NextFunction, Request, Response } from "express";
import { verifyToken } from "./jwt.js";

declare global {
  namespace Express {
    interface Request {
      userId?: number;
    }
  }
}

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
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
