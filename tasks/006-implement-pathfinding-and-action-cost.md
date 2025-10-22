# Tarefa 006: Implementar Pathfinding e Custo de Ação para Movimento

**Objetivo:** Transformar o movimento de "teleporte" da Tarefa 005 em um movimento tático real, com cálculo de caminho e custo de Pontos de Ação (AP), conforme definido no GDD.

**Pré-requisito:** A Tarefa 005 deve estar concluída.

## Requisitos

### 1. Configuração do Pathfinding
- Pesquise e integre uma biblioteca de pathfinding leve e compatível com o Phaser para grades isométricas. A `easystar.js` é uma boa candidata.
- Configure a biblioteca para usar o layout do nosso tilemap, marcando quais tiles são passáveis e quais não são (paredes, etc.).

### 2. Visualização de Caminho e Alcance
- Ao selecionar uma unidade, o jogo deve destacar a área de movimento possível com base nos APs restantes da unidade (ex: 5 tiles de alcance para 1 AP).
- Ao passar o mouse sobre um tile alcançável, o jogo deve desenhar uma linha ou destacar os tiles do caminho que será percorrido.

### 3. Movimento Suave (Tweening)
- Quando o jogador clica em um tile para se mover, o sprite do personagem deve percorrer o caminho calculado de forma suave.
- Utilize a funcionalidade de "tween" do Phaser para animar a posição do sprite de um tile para o outro ao longo do caminho.

### 4. Custo de Ação (AP)
- Implemente uma lógica básica de AP para o personagem do jogador (pode ser um simples número em uma variável por enquanto).
- Subtraia 1 AP quando um movimento for concluído.
- O jogador não deve conseguir iniciar um movimento se não tiver AP suficiente.

## Resultado Esperado

O jogador poderá selecionar seu personagem, ver uma área de movimento destacada, e ao clicar em um tile dentro dessa área, ver o personagem se mover suavemente até o destino. O movimento deve consumir um Ponto de Ação.
