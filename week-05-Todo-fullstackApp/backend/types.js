const zod = require("zod");

/**
  {
    title: string,
    descriptiopn: string
  }
 */

const createTodoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

/**
    {
        id: string
    }
 */

const updateTodoSchema = zod.object({
  id: zod.string(),
});

module.exports = {
  createTodoSchema: createTodoSchema,
  updateTodoSchema: updateTodoSchema,
};
