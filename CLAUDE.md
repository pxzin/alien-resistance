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

1.  **Contexto:** Eu fornecerei o objetivo da tarefa e os arquivos relevantes que você precisará modificar ou criar.
2.  **Estrutura de Código:** Siga a arquitetura de pastas definida. A lógica de jogo (Phaser) fica em `src/game`, e a UI (Svelte) fica em `src/ui`.
3.  **Implementação:** Sua tarefa será escrever o código TypeScript/Svelte para cumprir o objetivo. Certifique-se de que o código seja limpo e siga as convenções do projeto.
4.  **Finalização:** Ao concluir, apenas me informe que a tarefa foi completada. Eu serei responsável por testar e commitar seu trabalho.

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
