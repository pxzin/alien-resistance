# Tarefa 002: Configurar UnoCSS e criar componente de botão

**Objetivo:** Integrar o UnoCSS ao projeto Vite/Svelte para estilização de componentes de UI e criar um botão genérico para validar a instalação.

## Requisitos

### 1. Instalação e Configuração do UnoCSS
- Adicione as dependências de desenvolvimento do UnoCSS usando pnpm:
  ```bash
  pnpm add -D unocss @unocss/preset-uno
  ```
- Atualize o arquivo `vite.config.ts` para incluir o plugin do UnoCSS.
  ```typescript
  // vite.config.ts
  import { defineConfig } from 'vite';
  import svelte from '@sveltejs/vite-plugin-svelte';
  import UnoCSS from 'unocss/vite';

  export default defineConfig({
    plugins: [
      UnoCSS(), // Adicione o plugin aqui
      svelte(),
    ],
  });
  ```
- Importe os estilos do UnoCSS no ponto de entrada da aplicação. Adicione as seguintes linhas no topo do arquivo `src/main.ts`:
  ```typescript
  import '@unocss/reset/tailwind.css';
  import 'uno.css';
  ```

### 2. Criação do Componente de Botão
- Crie um novo componente Svelte em `src/ui/Button.svelte`.
- O botão deve aceitar uma propriedade `label`.
- Use as classes de utilitário do UnoCSS para estilizar o botão. Exemplo:
  ```html
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {label}
  </button>
  ```
  
### 3. Validação
- Importe e utilize o `Button.svelte` no `src/App.svelte`.
- Coloque o botão na tela com um texto de exemplo para confirmar que a integração do UnoCSS e o componente estão funcionando.
  ```html
  <script>
    import Button from './ui/Button.svelte';
  </script>

  <Button label="Click Me" />
  ```
