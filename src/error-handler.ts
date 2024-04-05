import { FastifyInstance } from 'fastify/types/instance'
import { ZodError } from 'zod'

type FastifyErrorHandle = FastifyInstance['errorHandler']

export const errorHandle: FastifyErrorHandle = (error, request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Erro during validation',
      errors: error.flatten().fieldErrors,
    })
  }

  return reply.status(500).send({ message: 'Internal server error!' })
}
