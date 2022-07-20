import { Router } from "express";
import { trycatch } from "../middlewares/trycatch";

const router = Router();

router.post("/signup", trycatch())

