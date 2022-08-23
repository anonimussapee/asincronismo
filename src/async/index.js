import fetch from 'node-fetch';
const API='https://api.escuelajs.co/api/v1';
async function pedir(urlapi){
    const response=await fetch(urlapi);
    const dato=await response.json();
    return dato;
}
const mostrar=async ()=>{
    try{
const datos= await pedir(`${API}/products`);
console.log(datos);}catch (err){console.log(err);}};
mostrar()
const promesa=()=>{
    return new Promise((y,n)=>{
        (true)? setTimeout(()=>y('promise async'),2000):n(new Error('UPS! hay un error'));
    });
};
const asinc=async()=>{
const promis=await promesa();
console.log(promis);
console.log("promesa terminada");
};

console.log("antes de llamar a promesa");
asinc();
console.log("despues de llamar a promesa");