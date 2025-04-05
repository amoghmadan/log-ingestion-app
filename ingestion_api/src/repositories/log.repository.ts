import { Log } from "@/interfaces/schema";
import { LogModel } from "@/models";

export default {
  findAll: async (filters: Record<string, any>): Promise<Log[]> => {
    const data = await LogModel.find({ ...filters });
    return data;
  },
  createOne: async (payload: Log): Promise<Log> => {
    console.log(payload);
    const log: Log = await LogModel.create(payload);
    return log;
  },
};
