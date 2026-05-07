from interpreter import draw
from chessPictures import *

fila1 = knight.join(knight.negative())
fila2 = knight.negative().join(knight)

figura = fila1.under(fila2)

draw(figura)