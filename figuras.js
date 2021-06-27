// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado mide " + areaCuadrado + "cm²");
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6; 
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
const ladosTriangulo = [4, 6, 6];
const alturaTriangulo = 5.5;
console.log(
    "los lados del triángulo miden "
    + ladosTriangulo[0] 
    + "cm, " 
    + ladosTriangulo[1] 
    + "cm y " 
    + ladosTriangulo[2] 
    + "cm"
    );

const perimetroTriangulo = ladosTriangulo[0] + ladosTriangulo[1] + ladosTriangulo[2];
console.log("El perímetro del triángulo mide " + perimetroTriangulo + "cm");

const areaTriangulo = (ladosTriangulo[0] * alturaTriangulo) / 2;
console.log("el area del triángulo mide: " + areaTriangulo + "cm²")
console.groupEnd();

// Código del círculo
console.group("Círculo");
const r = 4;
const dam = r * 2;
const PI = Math.PI;

const circunferencia = dam * PI;
console.log("la circunferencia del círculo mide " + circunferencia + "cm");

const areaCirculo = (r * r) * PI;
console.log("el area del círculo mide " + areaCirculo + "cm²")

console.groupEnd();

