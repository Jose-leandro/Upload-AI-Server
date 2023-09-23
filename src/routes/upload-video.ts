import { FastifyInstance } from "fastify";
import fastifyMultipart from "@fastify/multipart";
import { prisma } from "../lib/prisma";
import path from "node:path";
import { randomUUID } from "node:crypto";
import fs from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const pump = promisify(pipeline)

export async function uploadVideoRouter(app: FastifyInstance) {
    app.register(fastifyMultipart, {
        limits: {
            fileSize: 1_048_576 * 25, // 25mb
        }
    })

    app.post("/videos", async (request, reply) => {

        const testes = await prisma.video.create({
            data: {
                id: "7bab36b5-7c71-4a92-9956-27ecdf974fd2",
                name: "teste.mp3",
                path: "/opt/render/project/src/tmp/teste-7bab36b5-7c71-4a92-9956-27ecdf974fd2.mp3",
            }
        })

        console.log(testes)

        const data = await request.file()

        if (!data) {
            return reply.status(400).send({ error: "Missing file input." })
        }

        const extension = path.extname(data.filename)

        if (extension !== ".mp3") {
            return reply.status(400).send({ error: "Invalid input type, please upload a MP3." })
        }

        const fileBaseName = path.basename(data.filename, extension)
        console.log(fileBaseName)

        const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`

        // Execução de requisições de forma local em sua maquina
        const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadName)

        console.log(uploadDestination)

        try {
            await pump(data.file, fs.createWriteStream(uploadDestination))
            console.log("Arquivo foi copiado com sucesso");
        } catch (erro) {
            console.log("Erro ao copiar o arquivo: " + erro);
        }

        const video = await prisma.video.create({
            data: {
                name: data.filename,
                path: uploadDestination,
            }
        })

        console.log(video)
        return {
            video
        }
    })
}