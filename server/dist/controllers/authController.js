import { signToken } from "../jwt.js";
export class AuthController {
    userManager;
    constructor(userManager) {
        this.userManager = userManager;
    }
    signup = (req, res) => {
        const { name, email, password } = req.body;
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
    login = (req, res) => {
        const { email, password } = req.body;
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
    profile = (req, res) => {
        const user = this.userManager.findById(req.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json({ user: this.userManager.toPublic(user) });
    };
}
