from interpreter import draw
from chessPictures import *

# 1. Fondos base del tablero
fila_blanca = square.join(square.negative()).horizontalRepeat(4)
fila_negra = square.negative().join(square).horizontalRepeat(4)

# 2. Referencias para las piezas Negras (aplicando negative para invertir el color)
rock_n = rock.negative()
knight_n = knight.negative()
bishop_n = bishop.negative()
queen_n = queen.negative()
king_n = king.negative()
pawn_n = pawn.negative()

# 3. Construimos un bloque "transparente" dinámico
# Esto nos servirá para rellenar los espacios donde no hay piezas al usar join()
lista_vacia = [" " * len(pawn.img[0]) for _ in range(len(pawn.img))]
espacio = Picture(lista_vacia)

# 4. Construimos el estado de las filas (De la 8 hasta la 1)
# -----------------------------------------------------------

# Fila 8: El caballo negro de la reina (b8) se movió a c6
piezas_f8 = rock_n.join(espacio).join(bishop_n).join(queen_n).join(king_n).join(bishop_n).join(knight_n).join(rock_n)

# Fila 7: Peones negros, el peón de rey (e7) se movió a e5
piezas_f7 = pawn_n.horizontalRepeat(4).join(espacio).join(pawn_n.horizontalRepeat(3))

# Fila 6: El caballo negro llegó a la casilla c6
piezas_f6 = espacio.horizontalRepeat(2).join(knight_n).join(espacio.horizontalRepeat(5))

# Fila 5: El peón negro de rey llegó a la casilla e5
piezas_f5 = espacio.horizontalRepeat(4).join(pawn_n).join(espacio.horizontalRepeat(3))

# Fila 4: El alfil blanco llegó a c4 y el peón blanco a e4
piezas_f4 = espacio.horizontalRepeat(2).join(bishop).join(espacio).join(pawn).join(espacio.horizontalRepeat(3))

# Fila 3: El caballo blanco llegó a la casilla f3
piezas_f3 = espacio.horizontalRepeat(5).join(knight).join(espacio.horizontalRepeat(2))

# Fila 2: Peones blancos, el peón de rey (e2) se movió a e4
piezas_f2 = pawn.horizontalRepeat(4).join(espacio).join(pawn.horizontalRepeat(3))

# Fila 1: El alfil (f1) y el caballo (g1) del flanco de rey ya no están en su lugar
piezas_f1 = rock.join(knight).join(bishop).join(queen).join(king).join(espacio.horizontalRepeat(2)).join(rock)

# 5. Sobreponemos las piezas en el tablero cuadriculado usando under()
# Recordando que la casilla a8 es blanca, por lo que la fila 8 usa fila_blanca de fondo
tablero_f8 = fila_blanca.under(piezas_f8)
tablero_f7 = fila_negra.under(piezas_f7)
tablero_f6 = fila_blanca.under(piezas_f6)
tablero_f5 = fila_negra.under(piezas_f5)
tablero_f4 = fila_blanca.under(piezas_f4)
tablero_f3 = fila_negra.under(piezas_f3)
tablero_f2 = fila_blanca.under(piezas_f2)
tablero_f1 = fila_negra.under(piezas_f1)

# 6. Ensamblamos todas las filas verticalmente usando up()
tablero_completo = tablero_f1.up(tablero_f2).up(tablero_f3).up(tablero_f4).up(tablero_f5).up(tablero_f6).up(tablero_f7).up(tablero_f8)

# 7. Dibujamos la Apertura
draw(tablero_completo)