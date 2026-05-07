from interpreter import draw
from chessPictures import *

claro = square
oscuro = square.negative()

fila8 = oscuro.overlay(rock.negative()).join(
        claro.overlay(knight.negative())).join(
        oscuro.overlay(bishop.negative())).join(
        claro.overlay(queen.negative())).join(
        oscuro.overlay(king.negative())).join(
        claro.overlay(bishop.negative())).join(
        oscuro.overlay(knight.negative())).join(
        claro.overlay(rock.negative()))

fila7 = claro.overlay(pawn.negative()).join(
        oscuro.overlay(pawn.negative())).join(
        claro.overlay(pawn.negative())).join(
        oscuro.overlay(pawn.negative())).join(
        claro).join(
        oscuro.overlay(pawn.negative())).join(
        claro.overlay(pawn.negative())).join(
        oscuro.overlay(pawn.negative()))

fila6 = oscuro.join(claro).join(
        oscuro.overlay(knight.negative())).join(
        claro).join(
        oscuro).join(
        claro).join(
        oscuro).join(
        claro)

fila5 = claro.join(oscuro).join(
        claro).join(
        oscuro).join(
        claro.overlay(pawn.negative())).join(
        oscuro).join(
        claro).join(
        oscuro)

fila4 = oscuro.join(claro).join(
        oscuro).join(
        claro.overlay(pawn)).join(
        oscuro.overlay(pawn)).join(
        claro).join(
        oscuro).join(
        claro)

fila3 = claro.join(oscuro).join(
        claro).join(
        oscuro).join(
        claro).join(
        oscuro.overlay(knight)).join(
        claro).join(
        oscuro)

fila2 = oscuro.overlay(pawn).join(
        claro.overlay(pawn)).join(
        oscuro.overlay(pawn)).join(
        claro).join(
        oscuro).join(
        claro.overlay(pawn)).join(
        oscuro.overlay(pawn)).join(
        claro.overlay(pawn))

fila1 = claro.overlay(rock).join(
        oscuro.overlay(knight)).join(
        claro.overlay(bishop)).join(
        oscuro.overlay(queen)).join(
        claro.overlay(king)).join(
        oscuro.overlay(bishop)).join(
        claro).join(
        oscuro.overlay(rock))

tablero = fila8.under(fila7).under(fila6).under(fila5).under(fila4).under(fila3).under(fila2).under(fila1)

draw(tablero)