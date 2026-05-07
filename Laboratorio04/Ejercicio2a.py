from interpreter import draw
from chessPictures import *

fila1 = knight.join(knight.negative())
fila2 = knight.negative().join(knight)

figura = fila2.up(fila1)

draw(figura)