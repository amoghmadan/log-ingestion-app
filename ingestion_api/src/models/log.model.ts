import { Model, Schema, model } from "mongoose";
import { Log } from "@/interfaces/schema";

const LogSchema: Schema<Log> = new Schema({
  level: { type: String },
  message: { type: String },
  resourceId: { type: String },
  timestamp: { type: Number },
  traceId: { type: String },
  spanId: { type: String },
  commit: { type: String },
  metadata: {
    type: {
      parentResourceId: {
        type: String,
      },
    },
  },
});

LogSchema.index({
  level: "text",
  traceId: "text",
  spanId: "text",
  commit: "text",
  message: "text",
  resourceId: "text",
  "metadata.parentResourceId": "text",
  timestamp: 1,
});

const LogModel: Model<Log> = model("Log", LogSchema);

export default LogModel;
