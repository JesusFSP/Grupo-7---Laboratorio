from chessPictures import *
from interpreter import draw
from chessPictures import *

claro = square
oscuro = square.negative()

fila8 = oscuro.under(rock.negative()).join(
        claro).join(
        oscuro.under(bishop.negative())).join(
        claro.under(queen.negative())).join(
        oscuro.under(king.negative())).join(
        claro.under(bishop.negative())).join(
        oscuro.under(knight.negative())).join(
        claro.under(rock.negative()))

fila7 = claro.under(pawn.negative()).join(
        oscuro.under(pawn.negative())).join(
        claro.under(pawn.negative())).join(
        oscuro.under(pawn.negative())).join(
        claro).join(
        oscuro.under(pawn.negative())).join(
        claro.under(pawn.negative())).join(
        oscuro.under(pawn.negative()))

fila6 = oscuro.join(
        claro).join(
        oscuro.under(knight.negative())).join(
        claro).join(
        oscuro).join(
        claro).join(
        oscuro).join(
        claro)

fila5 = claro.join(
        oscuro).join(
        claro).join(
        oscuro).join(
        claro.under(pawn.negative())).join(
        oscuro).join(
        claro).join(
        oscuro)

fila4 = oscuro.join(
        claro).join(
        oscuro).join(
        claro.under(pawn)).join(
        oscuro.under(pawn)).join(
        claro).join(
        oscuro).join(
        claro)

fila3 = claro.join(
        oscuro).join(
        claro).join(
        oscuro).join(
        claro).join(
        oscuro.under(knight)).join(
        claro).join(
        oscuro)

fila2 = oscuro.under(pawn).join(
        claro.under(pawn)).join(
        oscuro.under(pawn)).join(
        claro).join(
        oscuro).join(
        claro.under(pawn)).join(
        oscuro.under(pawn)).join(
        claro.under(pawn))

fila1 = claro.under(rock).join(
        oscuro.under(knight)).join(
        claro.under(bishop)).join(
        oscuro.under(queen)).join(
        claro.under(king)).join(
        oscuro.under(bishop)).join(
        claro).join(
        oscuro.under(rock))

tablero = fila1.up(fila2).up(fila3).up(fila4).up(fila5).up(fila6).up(fila7).up(fila8)

draw(tablero)