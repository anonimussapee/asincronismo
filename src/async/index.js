import fetch from "node-fetch";
const API='https://api.escuelajs.co/api/v1';
async function pedir(urlapi){
    const response=await fetch(urlapi);
    const dato=await response.json();
    return dato;
}
const fnasync=async(urlapi)=>{
try{
const products=await pedir(`${urlapi}/products`);
const product=await pedir(`${urlapi}/products/${products[203].id}`);
const category=await pedir(`${urlapi}/categories/${product.category.id}`);
console.log(product);
//console.log(products.indexOf(product));
console.log(product.title);
console.log(category.name);
}catch{
const err=new Error('UPS! tienes un error en '+urlapi);
console.error(err);
}
};
fnasync(API);

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