import { Server, ServerOptions } from "http";
import express, { Application, Router } from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";

import routes from "@/routes";
import { MONGODB_URI } from "@/settings";

export function getRequestListener(): Application {
  const application: Application = express();
  application.use(helmet());
  application.use(express.urlencoded({ extended: true }));
  application.use(express.json());
  application.use(morgan("combined"));

  routes.forEach((router: Router, path: string): void => {
    application.use(path, router);
  });

  return application;
}

export default async function bootstrap(
  port: number,
  host: string
): Promise<void> {
  const requestListener: Application = getRequestListener();
  const serverOptions: ServerOptions = {};
  const server: Server = new Server(serverOptions, requestListener);
  await mongoose.connect(MONGODB_URI);
  server.listen(port, host, (): void => {
    console.info(server.address());
  });
}
