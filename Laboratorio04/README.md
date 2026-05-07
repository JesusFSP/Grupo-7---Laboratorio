# Desarrollo de Aplicaciones Web - Grupo 7

Repositorio dedicado a los laboratorios del curso de Desarrollo de Aplicaciones Web (DAW) de la Escuela Profesional de Ingeniería de Sistemas - UNSA.

## Integrantes
* **Gustavo Linares Aquino**
  [glinares@unsa.edu.pe](mailto:glinares@unsa.edu.pe)

* **Geisel Reymar Pacheco Medina**
  [gpachecome@unsa.edu.pe](mailto:gpachecome@unsa.edu.pe)

* **Jesus Francisco Silva Pino**
  [jsilva@unsa.edu.pe](mailto:jsilva@unsa.edu.pe)

## Docente
* Msc. Julio Augusto Vera Sancho

## Estructura del Repositorio
* `Laboratorio_04/`: Programación en Python y manipulación de figuras con POO.
    * `picture.py`: Clase principal para la manipulación de arreglos de strings.
    * `chessPictures.py` / `pieces.py`: Definición de las piezas de ajedrez.
    * `interpreter.py`: Motor gráfico basado en Pygame para renderizar las figuras.
    * `Ejercicio2[a-i].py`: Scripts con la resolución de los ejercicios propuestos.

---

## Laboratorio 04: Python y POO

Este laboratorio se enfoca en la implementación de una clase `Picture` que permite realizar operaciones de álgebra de figuras (uniones, espejos, repeticiones y sobreposiciones) utilizando arreglos de strings.

### Requisitos Técnicos

* **Lenguaje:** Python 3.11+.
* **Librerías:** [Pygame](https://www.pygame.org/news) (utilizada para el renderizado visual).

### Configuración del Entorno
Se recomienda el uso de entornos virtuales para mantener las dependencias aisladas:

1. **Crear el entorno virtual:**
   ```bash
   python3 -m venv venv
2. **Activar el entorno:**
   ```bash
   source venv/bin/activate
3. **Instalar dependencias:**
   ```bash
   pip install pygame

### Ejecución de Ejercicios

Para visualizar cualquier ejercicio (por ejemplo, el tablero con la Apertura Escocesa), ejecuta:

  ```bash
  python3 Ejercicio2i.py
  ```

## Explicación de la Implementación

En este laboratorio se ha desarrollado una solución basada en **Programación Orientada a Objetos (POO)** para la manipulación y renderizado de gráficos representados mediante estructuras de datos de texto.

### 1. La Clase `Picture`
Es el núcleo del proyecto. Esta clase encapsula un atributo `img` (una lista de cadenas) y proporciona una interfaz para transformar dichas imágenes sin modificar los datos originales (inmutabilidad funcional).

### 2. Métodos de Transformación y Álgebra de Figuras
Se implementaron los siguientes métodos clave:

* **Espejos (`verticalMirror` y `horizontalMirror`)**: Utilizan técnicas de *slicing* de Python para invertir las columnas o el orden de las filas.
* **Negativo (`negative`)**: Realiza un mapeo de caracteres utilizando un diccionario de inversión para intercambiar colores manteniendo la estructura.
* **Composición (`join`, `up`, `under`)**: 
    * `join` y `up` permiten la concatenación horizontal y vertical de las listas de strings.
    * `under` es el método más complejo, ya que implementa una lógica de **transparencia**. Permite sobreponer una pieza sobre un cuadro del tablero validando los caracteres vacíos (`' '`) para no ocultar el fondo.
* **Repetición (`horizontalRepeat` y `verticalRepeat`)**: Optimizan la creación de patrones repetitivos como las filas de peones o los cuadros del tablero.

### 3. Lógica del Tablero y Aperturas
Para la resolución de los ejercicios complejos (Tablero inicial y aperturas), se siguió un algoritmo de **ensamblaje por capas**:
1.  Se generan las filas de cuadros base (patrones blanco/negro).
2.  Se crean las filas de piezas utilizando bloques transparentes para las casillas vacías.
3.  Se utiliza el método `under` para "estampar" las piezas sobre los cuadros.
4.  Finalmente, se utiliza el método `up` para apilar las 8 filas resultantes en el orden correcto (de la 1 a la 8).

---

---
### Demostración
Puedes ver una explicación detallada de la ejecución del proyecto en el siguiente video:

**Enlace al video:** [https://youtu.be/h5KAia7nySc](https://youtu.be/h5KAia7nySc)

---

## Referencias
* [Python Documentation - Data Structures](https://docs.python.org/3/tutorial/datastructures.html)
* [Pygame Front Page](https://www.pygame.org/news)
* [GitHub Gitignore Templates (Python)](https://github.com/github/gitignore/blob/main/Python.gitignore)