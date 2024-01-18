import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { postRouter } from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());

app.use("/posts", postRouter);

const server = app.listen(port, () => {
  console.log(`App is listenning to ${port}`);
});

export { app, server };
