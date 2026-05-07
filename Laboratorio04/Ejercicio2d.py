from interpreter import draw
from chessPictures import *

# 1. Filas de tablero base
fila_blanca = square.join(square.negative()).horizontalRepeat(4)

draw(fila_blanca)