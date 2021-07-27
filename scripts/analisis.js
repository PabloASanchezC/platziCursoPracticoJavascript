// Helpers
function pair(number) {
    return (number % 2 === 0);
}

function calcularPromedio(lista) {
    const sumalista = lista.reduce((a = 0, b) => a + b);
        const promedioLista = sumalista / lista.length;
        return promedioLista;
}
    
// Calculadora de mediana 
function medianaSalarios(list) {
    const half = parseInt(list.length / 2);
    if (pair(list.length)) {
        const personhalf1 = list[half - 1];
        const personhalf2= list[half];
        const mediana = calcularPromedio([personhalf1, personhalf2]);
        return mediana;
    } else {
            const personhalf = list[half];
            return personhalf;
        }
}

// Mediana General
const salariosMex = Mexico.map(
function (persona) {
    return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort((a, b) => a - b)

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

// Mediana Top 10%
// const spliceStart = (salariosMexSorted.length *90) / 100;
// const spliceCount = salariosMexSorted.length - spliceStart;

// const salariosMexTop10 = salariosMexSorted.splice(spliceStart, spliceCount);
const sliceStart = (salariosMexSorted.length *90) / 100;
const sliceCount = salariosMexSorted.length;

const salariosMexTop10 = salariosMexSorted.slice(sliceStart, sliceCount);
const medianaTop10Mex = medianaSalarios(salariosMexTop10);

