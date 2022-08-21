import fetch  from "node-fetch";
 const API="https://api.escuelajs.co/api/v1";
function fetch_d(url){
    return fetch(url);
}
fetch_d(`${API}/products`).then(response=>response.json()).then(products=>{return fetch_d(`${API}/products/${products[201].id}`)}).then(response=>response.json()).then(product=>console.log(product)).catch(err=>console.log(err)).finally(()=>console.log("fetch terminado"));