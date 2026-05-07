from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = []
    for value in self.img:
      vertical.append(value[::-1])
    return vertical

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    return Picture(self.img[::-1])

  def negative(self):
    """ Devuelve un negativo de la imagen """
    negative_img = []
    
    for value in self.img:
        fila=""
        for color in value:
            fila+=self._invColor(color)
        negative_img.append(fila)
    return Picture(negative_img)

  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    nueva_img = []
        
    for i in range(len(self.img)):
            nueva_img.append(self.img[i]+p.img[i])
    return Picture(nueva_img)

  def up(self, p):
    return Picture(p.img + self.img)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    nueva_img = []
    # Recorremos cada fila de la imagen
    for i in range(len(self.img)):
        fila = ""
        # Recorremos cada caracter (pixel) de la fila
        for j in range(len(self.img[i])):
            # Si el pixel de la figura superior 'p' es un espacio transparente, mostramos el fondo 'self'
            if p.img[i][j] == ' ':
                fila += self.img[i][j]
            else:
                # Si no es un espacio, mostramos el pixel de la pieza
                fila += p.img[i][j]
        nueva_img.append(fila)
    return Picture(nueva_img)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    nueva_img = []
    for fila in self.img:
        nueva_img.append(fila * n)
    return Picture(nueva_img)

  def verticalRepeat(self, n):
    return Picture(self.img * n)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)

