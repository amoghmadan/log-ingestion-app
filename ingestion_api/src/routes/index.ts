import { Router } from "express";
import apiRouter from "@/routes/api";

const routes: Map<string, Router> = new Map<string, Router>([
  ["/api", apiRouter],
]);

export default routes;
