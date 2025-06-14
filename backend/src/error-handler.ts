import { FastifyInstance } from 'fastify'
import { ClientError } from './errors/client-error'
import { ZodError } from 'zod'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {
  const { validation, validationContext } = error

  if (validation !== undefined) {
    return reply.status(400).send({
      message: `Error validating request ${validationContext}`,
      errors: validation,
    })
  }

  if (error instanceof ClientError) {
    return reply.status(400).send({ message: error.message })
  }

  return reply.status(500).send({ message: 'Internal server error' })
}
