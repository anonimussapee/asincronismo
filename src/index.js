function suma(n1,n2){
    return n1+n2;
}
function calc(n1,n2,callback){
    return callback(n1,n2);
}
//console.log(calc(12,34,suma));

setTimeout(function(){
    console.log(`hola wey estudio asincronismo y la suma de 10 + 30 =`, calc(10,30,suma));
},2000);
function obtener(nombre){
    console.log(`hola wey ${nombre}`);
}
setTimeout(obtener,2000,"john");