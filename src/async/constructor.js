import fetch from 'node-fetch';
const API='https://api.escuelajs.co/api/v1';
async function get_data(urlapi){
const response=await fetch(urlapi);
const data=await response.json();
return data;
}
async function* constructora(){
    try {
        var primer=await get_data(`${API}/products/204`);
        var segundo=await get_data(`${API}/products/${primer.title}`);
        var tercer=await get_data(`${API}/products/${primer?.description}`)
        yield(primer);
        yield(segundo);
        yield(tercer);
    } catch (err) {
        console.log(err);
    }
}
const constructor=constructora();
console.log(constructor.next());
console.log(constructor.next());
console.log(constructor.next());
