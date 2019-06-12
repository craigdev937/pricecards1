import express from "express";
const router = express.Router();
import { home } from "../controllers/pcontroller";

router.get("/", home);

export default router;

