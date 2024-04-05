import fastify from 'fastify'
import { createEvent } from './routes/create-event'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { registerForEvent } from './routes/register-for-event'
import { getEvent } from './routes/get-event'
import { getAttendeeBadge } from './routes/get-attendee-badge'
import { checkIn } from './routes/check-in'
import { getEventAttendees } from './routes/get-event-attendees'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { errorHandle } from './error-handler'
import cors from '@fastify/cors'

const app = fastify()

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'pass.in',
      description: 'Especificação  da API para o back-end da aplicação pass.in',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  prefix: '/docs',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(cors, {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
})

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventAttendees)

app.setErrorHandler(errorHandle)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('running http://localhost:3333')
  })
