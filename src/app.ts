import express, { Application,  Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./app/routers";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: " Server is running on port",
  });
});

export default app;
