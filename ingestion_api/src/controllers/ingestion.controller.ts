import { Request, Response } from "express";
import { ValidationError } from "joi";
import { ingestionValidator } from "@/validators";
import { ingestionService } from "@/services";
import { SearchParams } from "@/interfaces/domain";
import { Log } from "@/interfaces/schema";

export default {
  insertLogs: async (
    request: Request<Log[], {}, {}, {}>,
    response: Response
  ): Promise<void> => {
    try {
      const validatedData = await ingestionValidator.createLog.validateAsync(
        request.body
      );
      await ingestionService.ingestLog(validatedData);
      response.status(201).json({ detail: "Success" });
    } catch (e: unknown) {
      if (e instanceof ValidationError) response.status(400).json(e.details);
      else response.status(500).json({ detail: "Internal Server Error" });
    }
  },

  searchLogs: async (
    request: Request<{}, {}, {}, SearchParams>,
    response: Response
  ): Promise<void> => {
    try {
      const validatedQuery = await ingestionValidator.searchLogs.validateAsync(
        request.query,
        { convert: true }
      );
      const data = await ingestionService.searchLog(validatedQuery);

      response.status(200).json(data);
    } catch (e: unknown) {
      if (e instanceof ValidationError) {
        response.status(400).json(e.details);
      } else {
        response.status(500).json({ detail: "Internal Server Error" });
      }
    }
  },
};
