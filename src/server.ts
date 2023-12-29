import { fastify } from "fastify";
import { getAllPromptsRoute } from "./routes/get-all-prompts";
import { uploadVideoRouter } from "./routes/upload-video";
import { createTranscriptionRoute } from "./routes/create-transcription";
import { generateAICompletionRoute } from "./routes/generate-ai-completion";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
    origin: "*",
});

app.register(getAllPromptsRoute);
app.register(uploadVideoRouter);
app.register(createTranscriptionRoute);
app.register(generateAICompletionRoute);

// Erro na tranformação de String para Numero
// app.listen({
//     host: "0.0.0.0",
//     // port: process.env.PORT ? Number(process.env.PORT) : 3333,
//     // port: 3333,
// }).then(() => {
//     console.log(Number(process.env.PORT))
//     console.log(process.env.PORT)
//     console.log("HTTP Server Running in port: " + process.env.PORT);
// });

app.get('/', function (req, res) {
    res.send('Hello World!')
  })

app.listen({
    host: "0.0.0.0",
    port: 3333,
}).then(() => {
    console.log("HTTP Server Running in port: 3333");
});
