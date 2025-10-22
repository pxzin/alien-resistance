# Prompt: Player - Common Person (Clothes Layer)

**Objective:** To generate the clothing layer for our base character, using the Style Bible image to ensure perfect style consistency.

**Style Bible URL:** `https://cdn.midjourney.com/e4d75735-2176-4d94-8863-1377ac776c49/0_0.png`

---

### Main Prompt (for Midjourney):

```
pixel art, a set of worn-out jeans and a jacket, for an isometric game character, designed to be layered on a character manikin, no body visible, isometric 3/4 perspective, style of Final Fantasy Tactics, on a clean white background --sref https://cdn.midjourney.com/e4d75735-2176-4d94-8863-1377ac776c49/0_0.png --style raw
```

### Negative Prompt:

```
body, manikin, character, human, skin, head, arms, legs, 3d, photo, text, watermark
```

---

### Rationale:

-   **`--sref [URL]`**: O passo mais importante. Força o Midjourney a usar o estilo da nossa Imagem-Bíblia.
-   **`a set of worn-out jeans and a jacket`**: Descreve apenas o que queremos, as roupas.
-   **`designed to be layered on a character manikin, no body visible`**: Instruções explícitas para a IA não desenhar o corpo, apenas as roupas como um item separado.
-   **`body, manikin, character, human`**: Adicionado ao prompt negativo para reforçar que não queremos ver o corpo, apenas as roupas.
