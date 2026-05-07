from interpreter import draw
from chessPictures import *

# crea una fila iniciando con cuadro blanco
fila_blanca = square.join(square.negative()).horizontalRepeat(4)

# crea una fila iniciando con cuadro negro
fila_negra = square.negative().join(square).horizontalRepeat(4)

# piezas negras
rock_n = rock.negative()
knight_n = knight.negative()
bishop_n = bishop.negative()
queen_n = queen.negative()
king_n = king.negative()
pawn_n = pawn.negative()

# crea espacios vacios para completar filas
lista_vacia = [" " * len(pawn.img[0]) for _ in range(len(pawn.img))]
espacio = Picture(lista_vacia)

# fila 8 con piezas negras
piezas_f8 = rock_n.join(knight_n).join(bishop_n).join(queen_n).join(king_n).join(bishop_n).join(knight_n).join(rock_n)

# fila 7 con peones negros
piezas_f7 = pawn_n.horizontalRepeat(8)

# fila 6 vacia
piezas_f6 = espacio.horizontalRepeat(8)

# fila 5 vacia
piezas_f5 = espacio.horizontalRepeat(8)

# fila 4 vacia
piezas_f4 = espacio.horizontalRepeat(8)

# fila 3 vacia
piezas_f3 = espacio.horizontalRepeat(8)

# fila 2 con peones blancos
piezas_f2 = pawn.horizontalRepeat(8)

# fila 1 con piezas blancas
piezas_f1 = rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock)

# coloca piezas sobre el tablero
tablero_f8 = fila_blanca.under(piezas_f8)
tablero_f7 = fila_negra.under(piezas_f7)
tablero_f6 = fila_blanca.under(piezas_f6)
tablero_f5 = fila_negra.under(piezas_f5)
tablero_f4 = fila_blanca.under(piezas_f4)
tablero_f3 = fila_negra.under(piezas_f3)
tablero_f2 = fila_blanca.under(piezas_f2)
tablero_f1 = fila_negra.under(piezas_f1)

# une todas las filas del tablero
tablero = tablero_f1.up(tablero_f2).up(tablero_f3).up(tablero_f4).up(tablero_f5).up(tablero_f6).up(tablero_f7).up(tablero_f8)

# dibuja el tablero final
draw(tablero)