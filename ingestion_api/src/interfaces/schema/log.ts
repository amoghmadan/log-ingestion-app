import { Document } from "mongoose";

export interface Metadata {
  parentResourceId: string;
}

export interface Log extends Document {
  level: string;
  message: string;
  resourceId: string;
  timestamp: number;
  traceId: string;
  spanId: string;
  commit: string;
  metadata: Metadata;
}
