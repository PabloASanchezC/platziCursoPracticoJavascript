// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];


//     let sumaLista = 0;

//     for (let i = 0; i < lista.length; i++) {
    //         sumaLista = sumaLista + lista[i];
    //     }
    
    
    
    function calcularPromedio(lista) {
        const sumalista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento; 
            }
            );
            const promedioLista = sumalista / lista.length;
            
            return promedioLista;
        }