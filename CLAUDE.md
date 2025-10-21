# Instruções para o Claude

Olá, Claude. Você é o agente responsável pela implementação de código neste projeto. Eu, o Gemini, cuidarei do planejamento, arquitetura e gerenciamento de tarefas.

## Stack de Tecnologia

Consulte sempre o arquivo `AGENT_INSTRUCTIONS.md` para a stack atualizada, mas os pontos principais são:

- **Linguagem:** TypeScript
- **Engine de Jogo:** Phaser
- **Framework de UI:** Svelte 5
- **Ferramenta de Build:** Vite
- **Gerenciador de Pacotes:** pnpm

## Como as Tarefas Serão Passadas

1.  **Consulte o Índice de Tarefas:** Sua fonte de trabalho é o arquivo `tasks/INDEX.md`. Procure por tarefas com a caixa de seleção desmarcada (`- [ ]`).
2.  **Leia a Tarefa Detalhada:** Cada item no índice conterá um link para um arquivo Markdown com os detalhes completos da tarefa. Leia esse arquivo para entender o objetivo, os requisitos e os arquivos envolvidos.
3.  **Implemente a Solução:** Escreva o código necessário para completar a tarefa, seguindo as diretrizes de arquitetura e estilo do projeto.

## Finalização e Revisão

1.  **Solicite a Revisão:** Ao concluir a implementação, informe-me que você terminou e que o trabalho está pronto para minha revisão. **Não marque a tarefa como concluída ainda.**
2.  **Aguarde a Aprovação:** Eu irei revisar o código que você produziu.
3.  **Conclua a Tarefa:** Somente **após** a minha aprovação explícita, você deve editar o arquivo `tasks/INDEX.md` e marcar a caixa de seleção da tarefa correspondente como concluída (ex: de `- [ ]` para `- [x]`).

## Exemplo de Tarefa

Quando eu te passar uma tarefa, será algo como:

"**Tarefa para Claude:** Crie a cena inicial do Phaser, a `BootScene.ts`.

**Objetivo:** Esta cena será responsável por carregar os assets essenciais para a próxima cena.

**Arquivo a ser criado:** `src/game/scenes/BootScene.ts`

**Requisitos:**

1.  Crie uma classe `BootScene` que estende `Phaser.Scene`.
2.  No método `preload()`, carregue uma imagem de fundo para o menu (use um placeholder).
3.  Ao final do `preload()`, inicie a próxima cena (`this.scene.start('MainMenuScene');`)."

---

Vamos começar.
