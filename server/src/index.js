import dotenv from "dotenv";
import express from "express";
import { postRouter } from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/posts", postRouter);

const server = app.listen(port, () => {
  console.log(`App is listenning to ${port}`);
});

export { app, server };
