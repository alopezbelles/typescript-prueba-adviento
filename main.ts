
//En el Polo Norte todavía usan fotocopiadoras de papel Los elfos las usan para copiar las cartas que los niños evían a Santa y así poder enviarlas a todos los departamentos de regalos.
//Sin embargo ya son muy viejas y no funcionan bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional. 
//Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo. 
//Esiste una gran probabilidad de que un caracter se degrade en cada copia (aunque no pasa siempre). Y al ocurrir, la regla que sigue es: 
// - Los caracteres de la A a la Z se degradan de mayuscula a minuscula (A-Z => a-z).
// - Las letras se degradan en una serie de caracteres en este orden: a-z => # => + => : => . =>  . 
// - Ten en cuenta que el último es un espacio en blanco, y no un caracter vacío. 
// - Los caracteres que no son letras, como los números, no se degradan. 
//Sabiendo esto y recibiendo la carta original y la copia, debes determinar si la copia es una copia de la original. 

checkIsValidCopy('Santa Calus is coming', 'sa#ta cl#s is comin#') //true
checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#') //false (por la p inicial)

//Para entender como funcionarian las fotocopiadoras y su degradacion: 

//original: 'Santa Claus'
//1ª copia: 'santa cla#s'
//2ª copia: 'sa#t# cl#+s'
//3ª copia: 'sa+## c#+:s'
//4ª copia: 's#++. c+:.s'
//5ª copia: 's#+:. c:. s'

//Por tanto, s#+:. c:. s es una copia válida de Santa Claus. Y como ves, la degradación de las letras no se produce en ningun orden específico; es aleatorio. 

let age:number = 35;
let city:string = 'Castellon';



function checkIsValidCopy(original: string, copy: string){
    if(original.length !== copy.length){
        return false;
    }

    for(let i = 0; i<original.length; i++){
        
    }

}