import { fastify } from "fastify"
import { prisma } from "./lib/prisma"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploadVideoRouter } from "./routes/upload-video"
import { createTranscriptionRoute } from "./routes/create-transcription"
import { generateAICompletionRoute } from "./routes/generate-ai-completion"
import fastifyCors from "@fastify/cors"

const app = fastify()

app.register(fastifyCors, {
    origin: "*",
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRouter)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running in port: http://localhost:3333/");
})