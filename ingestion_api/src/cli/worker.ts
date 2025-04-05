import { Job, Worker } from "bullmq";
import { Redis } from "ioredis";
import mongoose from "mongoose";

import { Log } from "@/interfaces/schema";
import { logRepository } from "@/repositories";
import { MONGODB_URI, REDIS } from "@/settings";

export default function workerInit(concurrency: number): void {
  const worker = new Worker<Log>(
    "logQueue",
    async (job: Job) => {
      await mongoose.connect(MONGODB_URI);
      try {
        for (let i = 0; i < job.data.length; i++) {
          await logRepository.createOne(job.data[i]);
        }
        console.log("Log saved:", job.data);
      } catch (error) {
        console.error("Failed to save log:", error);
        throw error;
      }
    },
    { connection: new Redis(REDIS), concurrency }
  );

  worker.on("failed", (job, err) => {
    console.error(`Job ${job?.id || "unknown"} failed:`, err);
  });
}
