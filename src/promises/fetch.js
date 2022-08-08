import fetch from 'node-fetch';
const FAKEAPI='https://api.escuelajs.co/api/v1';
function FetchData(urlapi){
    return fetch(urlapi);
}
//FetchData(`${FAKEAPI}/products/1`).then(response=>response.json()).then(productos=>console.log(productos?.category?.id)).catch(error=>console.log(error)).finally(()=>console.log("fetch ya terminado"));
FetchData(`${FAKEAPI}/products`).then(response=>response.json()).then(products=>{return FetchData(`${FAKEAPI}/products/${products[1].id}`)}).then(response=>response.json()).then(product=>{console.log(product); return FetchData(`${FAKEAPI}/categories/${product?.category?.id}`) }).then(response=>response.json()).then(categoria=>{console.log(categoria); return FetchData(`${FAKEAPI}/categories/${categoria?.id}`)}).then(response=>response.json()).then(id=>console.log(id.id)).catch(error=>console.log(error)).finally(()=>console.log("ya terminamos con el fetch"));