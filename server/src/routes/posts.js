import express from "express";
import { create, findAll, findByPk } from "../controllers/posts";

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.get("/:id", findByPk);

export default router;
