import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.prompt.deleteMany()

  await prisma.prompt.create({
    data: {
      title: 'Título YouTube',
      template: `Seu papel é gerar três títulos para um vídeo do YouTube.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar os títulos.
Abaixo você também receberá uma lista de títulos, use essa lista como referência para os títulos a serem gerados.

Os títulos devem ter no máximo 60 caracteres.
Os títulos devem ser chamativos e atrativos para maximizar os cliques.

Retorne APENAS os três títulos em formato de lista como no exemplo abaixo:
'''
- Título 1
- Título 2
- Título 3
'''

Transcrição:
'''
{transcription}
'''

Por favor, note que este conteúdo foi gerado por Inteligência Artificial. Recomendamos que você verifique cuidadosamente a precisão das informações e corrija possíveis erros antes de publicar.
Além disso, é essencial que você leia e compreenda os termos de uso da plataforma onde pretende publicar, neste caso, o YouTube. 
Isso é importante porque o conteúdo pode violar diretrizes, regras ou termos da plataforma. Agradeco a sua compreensão.
`.trim()
    }
  })

  await prisma.prompt.create({
    data: {
      title: 'Descrição YouTube',
      template: `Seu papel é gerar uma descrição sucinta para um vídeo do YouTube.
  
Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar a descrição.

A descrição deve possuir no máximo 80 palavras em primeira pessoa contendo os pontos principais do vídeo.

Use palavras chamativas e que cativam a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

O retorno deve seguir o seguinte formato:
'''
Descrição.

#hashtag1 #hashtag2 #hashtag3 ...
'''

Transcrição:
'''
{transcription}
'''

Por favor, note que este conteúdo foi gerado por Inteligência Artificial. Recomendamos que você verifique cuidadosamente a precisão das informações e corrija possíveis erros antes de publicar.
Além disso, é essencial que você leia e compreenda os termos de uso da plataforma onde pretende publicar, neste caso, o YouTube. 
Isso é importante porque o conteúdo pode violar diretrizes, regras ou termos da plataforma. Agradeco a sua compreensão.

`.trim()
    }
  })
}

await prisma.prompt.create({
  data: {
    title: 'Publicação para o LinkedIn',
    template: `Seu objetivo é gerar um conteúdo que posso ser publicado no LinkedIn.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar este conteúdo.
Abaixo você também receberá o conteúdo gerado, use como referência para criar o conteúdo a serem gerados.

O conteúdo deve possuir no máximo 100 palavras em primeira pessoa contendo os pontos principais do vídeo.
Use palavras chamativas e que cativam a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

Retorne o conteúdo gerado em um formato como no exemplo abaixo:
'''
- Conteúdo
'''

Transcrição:
'''
{transcription}
'''

Por favor, note que este conteúdo foi gerado por Inteligência Artificial. Recomendamos que você verifique cuidadosamente a precisão das informações e corrija possíveis erros antes de publicar.
Além disso, é essencial que você leia e compreenda os termos de uso da plataforma onde pretende publicar, neste caso, o LinkedIn. 
Isso é importante porque o conteúdo pode violar diretrizes, regras ou termos da plataforma. Agradeco a sua compreensão.
`.trim()
  }
})


await prisma.prompt.create({
  data: {
    title: 'Publicação para o TikTok',
    template: `Seu objetivo é gerar um conteúdo ou seja um texto em que posso ser publicado no TikTok.

Abaixo você receberá uma transcrição desse vídeo, use essa transcrição para gerar este conteúdo.
Abaixo você também receberá o conteúdo gerado, use como referência para criar o conteúdo a serem gerados.

O conteúdo deve possuir no máximo 60 palavras em primeira pessoa contendo os pontos principais do vídeo.
Use palavras chamativas e que cativam a atenção de quem está lendo.

Além disso, no final da descrição inclua uma lista de 3 até 10 hashtags em letra minúscula contendo palavras-chave do vídeo.

Retorne o conteúdo gerado em um formato como no exemplo abaixo:
'''
- Conteúdo
'''

Transcrição:
'''
{transcription}
'''

Por favor, note que este conteúdo foi gerado por Inteligência Artificial. Recomendamos que você verifique cuidadosamente a precisão das informações e corrija possíveis erros antes de publicar.
Além disso, é essencial que você leia e compreenda os termos de uso da plataforma onde pretende publicar, neste caso, o TikTok. 
Isso é importante porque o conteúdo pode violar diretrizes, regras ou termos da plataforma. Agradeco a sua compreensão.
`.trim()
  }
})

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

 console.log("Script executado com sucesso!");
