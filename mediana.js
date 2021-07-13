function calcularPromedio(lista) {
    const sumalista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento; 
        }
        );
        const promedioLista = sumalista / lista.length;
        
        return promedioLista;
}


// const lista1 = [
//     400000000, 
//     500,
//     200,
//     100,
// ];
function calcularmediana(lista1) {
    
    
    const lista1ordenada = lista1.sort((a, b) => a - b);
    
    const mitadLista1 = parseInt(lista1ordenada.length / 2);
    
    function esPar(numero) {
        if (numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    let mediana;
    
    if (esPar(lista1ordenada.length)) {
        const elemento1 = lista1ordenada[mitadLista1 - 1];
        const elemento2 = lista1ordenada[mitadLista1];
        const promedioElemento1y2 = calcularPromedio([
            elemento1,
            elemento2
        ]);
        
        mediana = promedioElemento1y2;
        
    } else {
        mediana = lista1ordenada[mitadLista1];
    }

    return mediana;
}