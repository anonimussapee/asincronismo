const XHR_2=require('xmlhttprequest').XMLHttpRequest;
const API='https://api.escuelajs.co/api/v1';
function fetchDATA(urlAPI,callback){
    var xhr=new XHR_2();
    xhr.open('GET',urlAPI,true);
    xhr.onreadystatechange=function(evento){
        if(xhr.readyState===4){
            if(xhr.status===200){
                callback(null,JSON.parse(xhr.responseText));
            }else{
                const error= new Error('error en la petición de '+urlAPI);
                return callback(null, error);
            }
        }
    }
    xhr.send();
}
fetchDATA(`${API}/products`,function(error1,dato1){
    if(error1)return console.error(error1);
    fetchDATA(`${API}/products/${dato1[0].id}`,function(error2,dato2){
        if(error2)return console.error(error2);
       fetchDATA(`${API}/categories/${dato2?.category?.id}`,function(error3,dato3){
        if(error3)return console.error(error3);
        //console.log(dato1);
        //console.log(dato2);
        //console.log(dato3);
        fetchDATA(`${API}/users`,function(error4,dato4){
            if(error4)return console.error(error4);
            console.log(dato4);
        });
       });
    }); 
    
});