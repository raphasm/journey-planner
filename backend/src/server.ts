import fastify from 'fastify'
import { createTripRoute } from './routes/create-trip'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { confirmTripRoute } from './routes/confirm-trip'
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTripRoute)
app.register(confirmTripRoute)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
