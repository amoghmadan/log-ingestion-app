export interface Metadata {
  parentResourceId: string;
}

export interface Log {
  _id: string;
  level: string;
  message: string;
  resourceId: string;
  timestamp: number;
  traceId: string;
  spanId: string;
  commit: string;
  metadata: Metadata;
}
