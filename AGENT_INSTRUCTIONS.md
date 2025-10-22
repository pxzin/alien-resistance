# Instruções para Agentes de IA

Este documento contém informações e diretrizes compartilhadas para todos os agentes de IA (Gemini, Claude, etc.) que trabalham neste projeto.

## 1. Stack de Tecnologia

- **Linguagem:** TypeScript
- **Engine de Jogo:** Phaser
- **Framework de UI:** Svelte 5
- **Estilo CSS:** UnoCSS
- **Gerenciador de Pacotes:** pnpm
- **Perspectiva de Câmera:** Isométrica (para combate tático)

## 2. Estrutura do Projeto

- `src/`
    - `ui/`: Componentes Svelte (UI).
    - `game/`: Lógica do jogo (Phaser).
        - `scenes/`: Cenas do Phaser.
        - `objects/`: Classes de objetos do jogo.
        - `managers/`: Gerenciadores globais.
    - `types/`: Definições de tipo TypeScript.

## 3. Estilo de Código e Convenções

### 3.1. Idioma do Projeto

- **O idioma oficial para todo o conteúdo do projeto é o Inglês.**
- Isso inclui: código, comentários, nomes de variáveis, nomes de arquivos, documentação (como o GDD) e mensagens de commit.
- Nossas conversas podem continuar em português, mas os artefatos do projeto devem ser em inglês.

_(A ser definido)_

## 4. Instruções Específicas por Agente

- **Gemini:** Consulte `GEMINI.md`
- **Claude:** Consulte `CLAUDE.md`
