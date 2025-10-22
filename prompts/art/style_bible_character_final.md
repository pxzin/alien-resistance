# Prompt: Style Bible - Final Base Character

**Objective:** To generate the definitive base character sprite, using our chosen Style Bible image as a reference to lock in the art style while correcting for proportions.

**Style Bible URL:** `https://cdn.midjourney.com/cc42cfc6-4597-46bc-b9df-78feedb26d1e/0_2.png`

---

### Main Prompt (v5 - Final):

```
pixel art, a featureless humanoid figure with human-like proportions, well-proportioned body, standing in an A-pose, isometric 3/4 perspective, for a tactical RPG, on a clean white background --sref https://cdn.midjourney.com/cc42cfc6-4597-46bc-b9df-78feedb26d1e/0_2.png --style raw
```

### Negative Prompt (v4):

```
robotic, mechanical parts, large legs, disproportionate, inhuman proportions, text, watermark, sketch, drawing
```

---

### Rationale:

-   **`--sref [URL]`**: This is the key parameter. It forces Midjourney to use the provided image as a Style Reference, ensuring the new generations will have the same colors, lighting, and texture.
-   **`a featureless humanoid figure with human-like proportions, well-proportioned body`**: We are being very explicit about the desired body shape to counteract the robotic look from the previous generation.
-   **`robotic, mechanical parts, large legs, disproportionate`**: Added to the negative prompt to specifically forbid the issues we saw before.
