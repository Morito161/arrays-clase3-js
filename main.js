const frutas = ['manzana', 'platano', 'naranja', 'espinaca', 'calabaza', 'chayote', 'calabaza'] 

console.log(frutas)

frutas.push("sandia") //.push agrega finish
console.log(frutas)

frutas.push("mango")
console.log(frutas)

frutas[2] = "pepino"
console.log(frutas)

frutas.unshift("cereza")
console.log(frutas)

frutas.pop()
console.log(frutas)

const ultimoElemento = frutas.pop()
console.log(frutas)

// tambien el metodo pop nos puede ayudar a asignar ese

console.log(ultimoElemento)

// METODO: SHIFT (elimina el primer elemento)

frutas.shift() // elimina el primer elemento (0)
console.log(frutas)

frutas.push("melon")
console.log(frutas)

frutas.unshift("verdolaga")
console.log(frutas)

frutas.unshift("uva")
console.log(frutas)

frutas.push("cereza")
console.log(frutas)

frutas.unshift("cereza")
console.log(frutas)

frutas.unshift("granada")
console.log(frutas)


for(let i = 0; i <frutas.length; i++){
    frutas.sort()
    const fruta = frutas[i]
    console.log(fruta, '->', i)
    console.log("Total de frutas:", frutas.length);
}

let conteo = {};

for (let fruta of frutas) {
    conteo[fruta] = (conteo[fruta] || 0) + 1;
    console.log(fruta)
}

for (let fruta in conteo) {
    if (conteo[fruta] > 1) {
        console.log(`${fruta} se repite ${conteo[fruta]} veces`)
        

    }
}

const paises = [
"México","Estados Unidos","Canadá","Brasil","Argentina","Chile","Colombia","Perú","Venezuela","Ecuador",
"Bolivia","Paraguay","Uruguay","Guatemala","Honduras","El Salvador","Nicaragua","Costa Rica","Panamá","Cuba",
"República Dominicana","Haití","España","Francia","Alemania","Italia","Portugal","Reino Unido","Irlanda","Países Bajos",
"Bélgica","Suiza","Austria","Suecia","Noruega","Dinamarca","Finlandia","Polonia","República Checa","Hungría",
"Rumania","Bulgaria","Grecia","Turquía","Rusia","Ucrania","China","Japón","Corea del Sur","India",
"Pakistán","Bangladesh","Indonesia","Filipinas","Vietnam","Tailandia","Malasia","Singapur","Australia","Nueva Zelanda",
"Sudáfrica","Egipto","Nigeria","Kenia","Marruecos","Argelia","Túnez","Etiopía","Ghana","Angola",

// repetidos
"México","Estados Unidos","Brasil","Argentina","España","Francia","Alemania","Italia","China","Japón",
"India","Australia","Canadá","Chile","Colombia","Perú","Venezuela","Ecuador","Bolivia","Paraguay",
"Uruguay","Guatemala","Honduras","El Salvador","Nicaragua","Costa Rica","Panamá","Cuba","Haití","Portugal",

// más países
"Irak","Irán","Arabia Saudita","Emiratos Árabes Unidos","Qatar","Israel","Jordania","Líbano","Siria","Afganistán",
"Kazajistán","Uzbekistán","Turkmenistán","Nepal","Sri Lanka","Myanmar","Camboya","Laos","Mongolia","Corea del Norte",
"Islandia","Luxemburgo","Malta","Chipre","Estonia","Letonia","Lituania","Eslovaquia","Eslovenia","Croacia",
"Bosnia y Herzegovina","Serbia","Montenegro","Albania","Macedonia del Norte","Kosovo","Zambia","Zimbabue","Botsuana","Namibia",

// repetidos otra vez
"México","Estados Unidos","Canadá","Brasil","Argentina","Chile","Colombia","Perú","España","Francia",
"Alemania","Italia","Portugal","Reino Unido","China","Japón","India","Australia","Sudáfrica","Egipto",

// completar hasta 200
"Nigeria","Kenia","Marruecos","Argelia","Túnez","Etiopía","Ghana","Angola","Perú","Chile",
"Colombia","México","España","Francia","Alemania","Italia","China","Japón","India","Brasil"
];

for(let i = 0; i <paises.length; i++){
    paises.sort()
    const pais = paises[i]
    console.log(pais, '->', i)
    document.write(pais, '->', i + "<br>")
    //console.log("Total de paises:", paises.length);
}

let conteos = {};

for (let pais of paises) {
    conteos[pais] = (conteos[pais] || 0) + 1;
    console.log(pais)
}

for (let pais in conteos) {
    if (conteos[pais] > 1) {
        console.log(`${pais} se repite ${conteos[pais]} veces`)
        
        document.write(`${pais} se repite ${conteos[pais]} veces<br>`)
    }
}

console.log("Total de paises:", paises.length);
document.write("Total de paises:", paises.length);