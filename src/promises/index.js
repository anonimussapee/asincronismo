const XHR=require('xmlhttprequest').XMLHttpRequest;
const FAKEAPI='https://api.escuelajs.co/api/v1';
function FetchData(urlApi,callback){
    let xhr=new XHR();
    xhr.open('GET',urlApi,true);
    xhr.onreadystatechange=function(evento){
        if(xhr.readyState===4){
            if(xhr.status===200){
                callback(null,JSON.parse(xhr.responseText));
            }else{
                const error=new Error("error en esta url "+urlApi);
                return callback(null, error);
            }
        }
    }
    xhr.send();
}

const HAYDATOS=()=>{
    return new Promise((y, n) => {
        FetchData(`${FAKEAPI}/users`,function(error1,dato1){
            if(error1)return n(console.error(error1));
            y(console.log(dato1));
        })
    });
}

HAYDATOS().then(response=>console.log(response)).catch(error=>console.log(error)).finally(()=>console.log("promesa terminada"));