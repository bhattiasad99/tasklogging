import { Router } from "express";
const router = Router();
import { getLogs } from "../../controllers/logs/index.js";

/* GET logs listing. */
router.get("/", getLogs);

export default router;
