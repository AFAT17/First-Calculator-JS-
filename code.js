
const sumar = (num1,num2)=>{
    return parseInt(num1)+parseInt(num2);
}
const restar = (num1,num2)=>{
    return parseInt(num1)-parseInt(num2);
}
const dividir = (num1,num2)=>{
    return parseInt(num1)/parseInt(num2);
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1)*parseInt(num2);
}

alert("Welcome To The The Calculator Of The NASA")
let nombre = prompt("¿Cual es tu nombre?")
alert(`¿dime ${nombre} que operacion deseas realizar?`);
let operacion = prompt("1: suma, 2: resta, 3: dividir, 4: multiplicar");

if (operacion == 1){
    let numero1 = prompt(`${nombre} dime el primer numero para sumar`);
    let numero2 = prompt(`${nombre} dime el segundo numero para sumar`);
    resultado = sumar(numero1,numero2);
    alert(`${nombre} segun The The Calculator Of The NASA tu resultado es`);
    document.write(`<h1><b>${resultado}</b></h1>`);
}

else if (operacion == 2){
    let numero1 = prompt(`${nombre} dime el primer numero para restar`);
    let numero2 = prompt(`${nombre} dime el segundo numero para restar`);
    resultado = restar(numero1,numero2);
    alert(`${nombre} segun The The Calculator Of The NASA tu resultado es`);
    document.write(`<h1><b>${resultado}</b></h1>`);
}

else if (operacion == 3){
    let numero1 = prompt(`${nombre} dime el primer numero para dividir`);
    let numero2 = prompt(`${nombre} dime el segundo numero para dividir`);
    resultado = dividir(numero1,numero2);
    alert(`${nombre} segun The The Calculator Of The NASA tu resultado es`);
    document.write(`<h1><b>${resultado}</b></h1>`);
}

else if (operacion == 4){
    let numero1 = prompt(`${nombre} dime el primer numero para multiplicar`);
    let numero2 = prompt(`${nombre} dime el segundo numero para multiplicar`);
    resultado = multiplicar(numero1,numero2);
    alert(`${nombre} segun The The Calculator Of The NASA tu resultado es`);
    document.write(`<h1><b>${resultado}</b></h1>`);
}

else {
    alert(`${nombre} No se pudo realizar la operacion`)
}
