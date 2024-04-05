// src/error-handler.ts
import { ZodError } from "zod";
var errorHandle = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: "Erro during validation",
      errors: error.flatten().fieldErrors
    });
  }
  return reply.status(500).send({ message: "Internal server error!" });
};

export {
  errorHandle
};
