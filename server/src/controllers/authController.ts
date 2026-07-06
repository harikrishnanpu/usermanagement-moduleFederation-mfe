import type { Request, Response } from "express";
import { signToken } from "../jwt.js";
import type { UserManager } from "../UserManager.js";

export class AuthController {
  
  constructor(private readonly userManager: UserManager) {}

  signup = (req: Request, res: Response) => {
    const { name, email, password } = req.body as {
      name?: string;
      email?: string;
      password?: string;
    };

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    if (this.userManager.findByEmail(email)) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = this.userManager.create({ name, email, password });
    const token = signToken(user.id);

    return res.status(201).json({
      token,
      user: this.userManager.toPublic(user),
    });
  };

  login = (req: Request, res: Response) => {
    const { email, password } = req.body as {
      email?: string;
      password?: string;
    };

    const user = email ? this.userManager.findByEmail(email) : undefined;

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = signToken(user.id);

    return res.json({
      token,
      user: this.userManager.toPublic(user),
    });
  };

  profile = (req: Request, res: Response) => {
    const user = this.userManager.findById(req.userId!);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ user: this.userManager.toPublic(user) });
  };
}
