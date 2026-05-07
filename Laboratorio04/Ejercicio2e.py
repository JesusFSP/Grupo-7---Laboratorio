from interpreter import draw
from chessPictures import *

# crea una fila iniciando con cuadro negro
fila_negra = square.negative().join(square).horizontalRepeat(4)

# dibuja la fila
draw(fila_negra)