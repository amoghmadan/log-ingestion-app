import Joi from "joi";

const dateSchema = Joi.date()
  .iso()
  .custom((value) => new Date(value).getTime());

export default {
  createLog: Joi.array()
    .items(
      Joi.object({
        level: Joi.string().required(),
        message: Joi.string().required(),
        resourceId: Joi.string().required(),
        timestamp: Joi.number().required(),
        traceId: Joi.string().required(),
        spanId: Joi.string().required(),
        commit: Joi.string().required(),
        metadata: Joi.object({
          parentResourceId: Joi.string().required(),
        }).required(),
      })
    )
    .min(1)
    .required(),

  searchLogs: Joi.object({
    search: Joi.string().allow("").optional(),
    dates: Joi.array().items(dateSchema).length(2).optional(),
    filters: Joi.alternatives()
      .try(Joi.string(), Joi.array().items(Joi.string()))
      .optional(),
  }),
};
