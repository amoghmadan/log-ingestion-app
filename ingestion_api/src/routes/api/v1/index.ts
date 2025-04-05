import { Router } from "express";
import ingestionRouter from "@/routes/api/v1/ingestion";

const v1Router: Router = Router();
const routes: Map<string, Router> = new Map<string, Router>([
  ["/ingestion", ingestionRouter],
]);

routes.forEach((router: Router, path: string): void => {
  v1Router.use(path, router);
});

export default v1Router;
