// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perímetro del cuadrado mide " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
    return  lado * lado;
} 
// console.log("el área del cuadrado mide " + areaCuadrado + "cm²");
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6; 
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const ladosTriangulo = [4, 6, 6];
// const alturaTriangulo = 5.5;
// console.log(
//     "los lados del triángulo miden "
//     + ladosTriangulo[0] 
//     + "cm, " 
//     + ladosTriangulo[1] 
//     + "cm y " 
//     + ladosTriangulo[2] 
//     + "cm"
//     );

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// console.log("El perímetro del triángulo mide " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("el area del triángulo mide: " + areaTriangulo + "cm²")
console.groupEnd();

// Código del círculo
console.group("Círculo");
// const r = 4;
// const dam = r * 2;
const PI = Math.PI;

function diametrocirculo(radio) {
    return radio * 2;
}

function circunferencia(radio) {
    const diametro = diametrocirculo(radio)
    return diametro * PI;
}
// console.log("la circunferencia del círculo mide " + circunferencia + "cm");

function areaCirculo(r) {
    return (r * r) * PI;
}  
// console.log("el area del círculo mide " + areaCirculo + "cm²")

console.groupEnd();

// cuadrado
function calcpericuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcareacuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// triangulo 

function calcperitriangulo() {
    const input1 = document.getElementById("inputlado1");
    const value1 = Number(input1.value);
    const input2 = document.getElementById("inputlado2");
    const value2 = Number(input2.value);
    const input3 = document.getElementById("inputbase");
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcareatriangulo() {
    const input1 = document.getElementById("inputbase");
    const value1 = input1.value;
    const input2 = document.getElementById("inputha");
    const value2 = input2.value;
    const area = areaTriangulo(value1, value2);
    alert(area);
}

// circulo
function calcdamcirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const dam = diametrocirculo(value);
    alert(dam);
}
function calccirccirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const circ = circunferencia(value);
    alert(circ);
}
function calcareacirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area =  areaCirculo(value);
    alert(area);
}
