import { Queue } from "bullmq";
import Redis from "ioredis";

import { Log } from "@/interfaces/schema";
import { REDIS } from "@/settings";

const redisConnection = new Redis(REDIS);
const logQueue = new Queue("logQueue", { connection: redisConnection });

export default {
  enqueue: async (payload: Log[]): Promise<void> => {
    await logQueue.add("processData", payload);
  },
};
