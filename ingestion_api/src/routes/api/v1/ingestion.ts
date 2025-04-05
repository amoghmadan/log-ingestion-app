import { Router } from "express";
import { ingesitonController } from "@/controllers";

const ingestionRouter = Router();
ingestionRouter.route("/insert").post(ingesitonController.insertLogs);
ingestionRouter.route("/search").get(ingesitonController.searchLogs);

export default ingestionRouter;
