// const lista1 = [
//     1,
//     2,
//     5,
//     4,
//     1,
//     3,
//     6,
//     4,
//     2,
//     3,
//     5,
//     1,
//     1,
//     3,
// ];

function calcularModa(lista1) {
    
    
    const lista1Count = {};
    
    lista1.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
        );
        
        const lista1array = Object.entries(lista1Count).sort((a, b) => a[1] - b[1]);
        
        const moda = lista1array[lista1array.length - 1];
    
        return moda;
    }