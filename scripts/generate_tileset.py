#!/usr/bin/env python3
"""
Script para gerar um tileset placeholder simples
Cria 3 tiles de 32x32: verde (grama), cinza (concreto), marrom (terra)
"""

from PIL import Image

# Configurações
tile_size = 32
num_tiles = 3

# Cores dos tiles
colors = [
    (76, 175, 80),    # Verde (grama)
    (117, 117, 117),  # Cinza (concreto)
    (141, 110, 99),   # Marrom (terra)
]

# Criar imagem
img = Image.new('RGB', (tile_size * num_tiles, tile_size))

# Desenhar cada tile
for i, color in enumerate(colors):
    for x in range(tile_size):
        for y in range(tile_size):
            img.putpixel((i * tile_size + x, y), color)

# Salvar
img.save('public/assets/tileset.png')
print('Tileset criado em public/assets/tileset.png')
