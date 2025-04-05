import { Log } from "@/interfaces/schema";
import { SearchParams } from "@/interfaces/domain";
import { logRepository, queueRepository } from "@/repositories";

async function ingestLog(payload: Log[]): Promise<void> {
  await queueRepository.enqueue(payload);
}

async function searchLog(queryParams: SearchParams): Promise<Log[]> {
  const filterConditions: Record<string, any>[] = [];
  const { search, dates, filters } = queryParams;

  if (search) {
    filterConditions.push({
      $or: [
        { level: { $regex: search, $options: "i" } },
        { message: { $regex: search, $options: "i" } },
        { commit: { $regex: search, $options: "i" } },
        { resourceId: { $regex: search, $options: "i" } },
      ],
    });
  }

  if (dates && dates.length === 2) {
    const startDate = new Date(dates[0]);
    const endDate = new Date(dates[1]);
    filterConditions.push({ timestamp: { $gte: startDate, $lte: endDate } });
  }

  if (filters) {
    if (typeof filters === "string") {
      filterConditions.push({ [filters]: search });
    } else if (Array.isArray(filters)) {
      filters.forEach((filter: string | string[]) => {
        if (Array.isArray(filter) && filter.length === 2) {
          filterConditions.push({ [filter[0]]: filter[1] });
        }
      });
    }
  }

  const query = filterConditions.length > 0 ? { $and: filterConditions } : {};

  try {
    return await logRepository.findAll(query);
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Internal Server Error");
  }
}

export default { ingestLog, searchLog };
