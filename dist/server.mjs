import {
  registerForEvent
} from "./chunk-RFJRBUUR.mjs";
import {
  errorHandle
} from "./chunk-X65F6S7U.mjs";
import {
  checkIn
} from "./chunk-6VR2N4MM.mjs";
import {
  createEvent
} from "./chunk-N4MVSU5B.mjs";
import "./chunk-MA76EX6X.mjs";
import {
  getAttendeeBadge
} from "./chunk-JCRTHNSZ.mjs";
import {
  getEventAttendees
} from "./chunk-YBI67LUU.mjs";
import {
  getEvent
} from "./chunk-RN3O5XYX.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-L6PNYYYK.mjs";

// src/server.ts
import fastify from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import cors from "@fastify/cors";
var app = fastify();
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xE3o  da API para o back-end da aplica\xE7\xE3o pass.in",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  prefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(cors, {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"]
});
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandle);
app.listen({
  port: 3333,
  host: "0.0.0.0"
}).then(() => {
  console.log("running http://localhost:3333");
});
