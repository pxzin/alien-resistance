// Script simples para gerar um tileset placeholder
// Cria um PNG com 3 tiles de 32x32: verde (grama), cinza (concreto), marrom (terra)

import fs from 'fs';
import { createCanvas } from 'canvas';

const tileSize = 32;
const numTiles = 3;
const canvas = createCanvas(tileSize * numTiles, tileSize);
const ctx = canvas.getContext('2d');

// Tile 0: Verde (grama)
ctx.fillStyle = '#4CAF50';
ctx.fillRect(0, 0, tileSize, tileSize);

// Tile 1: Cinza (concreto)
ctx.fillStyle = '#757575';
ctx.fillRect(tileSize, 0, tileSize, tileSize);

// Tile 2: Marrom (terra)
ctx.fillStyle = '#8D6E63';
ctx.fillRect(tileSize * 2, 0, tileSize, tileSize);

// Salva o arquivo
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/assets/tileset.png', buffer);
console.log('Tileset criado em public/assets/tileset.png');
