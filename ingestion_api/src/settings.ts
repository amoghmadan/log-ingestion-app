import path from "path";

import "dotenv/config";

export const BASE_DIR: string = path.dirname(__dirname);

export const MONGODB_URI: string = String(process.env.MONGODB_URI);

export const REDIS: Record<string, string | number | null> = {
  host: String(process.env.REDIS_HOST),
  port: Number(process.env.REDIS_PORT),
  db: Number(process.env.REDIS_DB),
  maxRetriesPerRequest: null,
};
