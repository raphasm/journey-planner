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
import { getParticipantsRoute } from './routes/get-participants'
import { createInviteRoute } from './routes/create-invite'
import { updateTripRoute } from './routes/update-trip'
import { getTripDetailsRoute } from './routes/get-trip-details'
import { getParticipantRoute } from './routes/get-participant'
import { errorHandler } from './error-handler'
import { env } from './env'

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.setErrorHandler(errorHandler)

app.register(createTripRoute)
app.register(confirmTripRoute)
app.register(confirmParticipantRoute)
app.register(createActivityRoute)
app.register(getActivitiesRoute)
app.register(createLinkRoute)
app.register(getLinksRoute)
app.register(getParticipantsRoute)
app.register(createInviteRoute)
app.register(updateTripRoute)
app.register(getTripDetailsRoute)
app.register(getParticipantRoute)

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server running!')
})
