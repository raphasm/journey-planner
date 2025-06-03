import fastify from 'fastify'
import { createTripRoute } from './routes/create-trip'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { confirmTripRoute } from './routes/confirm-trip'
import cors from '@fastify/cors'
import { confirmParticipantRoute } from './routes/confirm-participant'
import { createActivityRoute } from './routes/create-activity'
import { getActivitiesRoute } from './routes/get-activities'
import { createLinkRoute } from './routes/create-link'
import { getLinksRoute } from './routes/get-link'

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createTripRoute)
app.register(confirmTripRoute)
app.register(confirmParticipantRoute)
app.register(createActivityRoute)
app.register(getActivitiesRoute)
app.register(createLinkRoute)
app.register(getLinksRoute)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
