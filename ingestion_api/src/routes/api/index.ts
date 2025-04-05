import { Router } from "express";
import v1Router from "@/routes/api/v1";

const apiRouter: Router = Router();
const routes: Map<string, Router> = new Map<string, Router>([
  ["/v1", v1Router],
]);

routes.forEach((router: Router, path: string): void => {
  apiRouter.use(path, router);
});

export default apiRouter;
