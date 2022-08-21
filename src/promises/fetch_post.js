import fetch from 'node-fetch';
const API="https://api.escuelajs.co/api/v1";
function post_data(urlapi,data){
    const response=fetch(urlapi,{
        method:'POST',
        mode:'cors',
        credentials:'same-origin',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    });
    return response;
}
post_data(`${API}/products`,{
    "title": "pancho el gato loco y emperador",
    "price": 10000000,
    "description": "pancho es un gato tigre y tigranosaurio originario de Ecuador, come cabezas de pollo fritas y al vapor ademas le gusta comer gacelas y en una que otra ocasion conejos, es muy peludo y tiene super fuerza",
    "categoryId": 5,
    "images": ["https://t2.ea.ltmcdn.com/es/posts/9/1/3/4_mau_egipcio_24319_3_600.jpg"]
  }).then(response=>response.json()).then(product=>console.log(product)).catch(err=>console.log(err));






















function fetch_post(url,data){
const respuesta=fetch(url,{
    method:'POST',
    mode: 'cors',
    credentials:'same-origin',
    headers:{'Content-type':'application/json'},
    body:JSON.stringify(data)
});
return respuesta;
}
fetch_post(`${API}/categories`,
    {"id":7,"name":"gatos","image":"https://t2.ea.ltmcdn.com/es/posts/9/1/3/4_mau_egipcio_24319_3_600.jpg"}
  ).then(response=>response.json()).then(sms=>console.log(sms)).catch(err=>console.log(err));









