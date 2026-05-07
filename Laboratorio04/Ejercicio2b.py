from interpreter import draw
from chessPictures import *

from interpreter import draw
from chessPictures import *

# une caballo blanco con caballo negro
fila1 = knight.join(knight.negative())

# invierte el caballo negro
caballoNegro = knight.negative().verticalMirror()

# invierte el caballo blanco
caballoBlanco = knight.verticalMirror()

# une los dos caballos de la segunda fila
fila2 = caballoNegro.join(caballoBlanco)

# coloca la segunda fila debajo de la primera
figura = fila2.up(fila1)

# dibuja la figura final
draw(figura)