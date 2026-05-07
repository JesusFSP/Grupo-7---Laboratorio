from interpreter import draw
from chessPictures import *

fila1 = square.join(square.negative()).horizontalRepeat(4)
fila2 = square.negative().join(square).horizontalRepeat(4)

dos_filas = fila2.up(fila1)
tablero = dos_filas.verticalRepeat(4)

draw(tablero)