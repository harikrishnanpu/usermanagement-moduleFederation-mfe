import cors from "cors";
import express from "express";
import routes from "./routes.js";

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
  }),
);

app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
