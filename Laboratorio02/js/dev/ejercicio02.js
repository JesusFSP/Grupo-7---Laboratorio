
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    const style = document.createElement('style');
    style.textContent = `
        body { font-family: 'Arial', sans-serif; background-color: #2c3e50; display: flex; flex-direction: column; align-items: center; padding: 20px; color: white; }
        .calc-container { background: #34495e; padding: 20px; border-radius: 10px; box-shadow: 0 10px 20px rgba(0,0,0,0.3); width: 300px; }
        #display { width: 100%; height: 50px; background: #ecf0f1; color: #2c3e50; text-align: right; font-size: 1.5rem; border: none; margin-bottom: 15px; padding: 10px; box-sizing: border-box; border-radius: 5px; }
        .buttons { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        button { padding: 15px; font-size: 1.2rem; border: none; border-radius: 5px; cursor: pointer; transition: 0.2s; }
        button:hover { opacity: 0.8; }
        .op { background: #e67e22; color: white; }
        .num { background: #95a5a6; color: white; }
        .equal { background: #27ae60; color: white; grid-column: span 2; }
        .clear { background: #c0392b; color: white; grid-column: span 2; }
        #history-container { margin-top: 30px; width: 300px; background: #fff; color: #333; padding: 15px; border-radius: 8px; }
        .stack-item { border-bottom: 1px solid #ddd; padding: 5px 0; font-family: monospace; }
        h2 { font-size: 1.2rem; border-bottom: 2px solid #27ae60; padding-bottom: 5px; }
    `;
    document.head.appendChild(style);

    //Estructura de la Calculadora
    const calcDiv = document.createElement('div');
    calcDiv.className = 'calc-container';

    const display = document.createElement('input');
    display.id = 'display';
    display.type = 'text';
    display.readOnly = true;
    calcDiv.appendChild(display);

    const btnGrid = document.createElement('div');
    btnGrid.className = 'buttons';

    // Definición de botones
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '+', '=', 'C'
        
    ];

    let operacionActual = "";
    const pilaHistorial = []; // Estructura de Pila

    // Contenedor de Historial (Pila)
    const historyContainer = document.createElement('div');
    historyContainer.id = 'history-container';
    const historyTitle = document.createElement('h2');
    historyTitle.textContent = 'Historial (Pila)';
    const historyList = document.createElement('div');
    historyContainer.appendChild(historyTitle);
    historyContainer.appendChild(historyList);

    // 3. Lógica y Creación de Botones
    buttons.forEach(text => {
        const btn = document.createElement('button');
        btn.textContent = text;
        
        if (text === '=') {
            btn.className = 'equal';
            btn.onclick = () => {
                try {
                    const resultado = eval(operacionActual);
                    const registro = `${operacionActual} = ${resultado}`;
                    
                    pilaHistorial.push(registro);
                    actualizarPilaVisual();
                    
                    operacionActual = resultado.toString();
                    display.value = operacionActual;
                } catch (e) {
                    display.value = "Error";
                    operacionActual = "";
                }
            };
        } else if (text === 'C') {
            btn.className = 'clear';
            btn.onclick = () => {
                operacionActual = "";
                display.value = "";
            };
        } else {
            btn.className = isNaN(text) && text !== '.' ? 'op' : 'num';
            btn.onclick = () => {
                operacionActual += text;
                display.value = operacionActual;
            };
        }
        btnGrid.appendChild(btn);
    });

    // Función para mostrar la pila
    const actualizarPilaVisual = () => {
        historyList.innerHTML = "";
        for (let i = pilaHistorial.length - 1; i >= 0; i--) {
            const item = document.createElement('div');
            item.className = 'stack-item';
            item.textContent = `[${i}] ${pilaHistorial[i]}`;
            historyList.appendChild(item);
        }
    };

    calcDiv.appendChild(btnGrid);
    body.appendChild(calcDiv);
    body.appendChild(historyContainer);
});