//const XMLHttpRequest=require('xmlhttprequest');
//const API='https://api.escuelajs.co/api/v1';
//function fetchdata(urlApi,callback){
//    let xhttp= new XMLHttpRequest();
//    xhttp.open('GET',urlApi,true);
//    xhttp.onreadystatechange=function (event){
   //     if(xhttp.readyState ===4){
 //           if(xhttp.status===200){
   //             callback(null, JSON.parse(xhttp.respomseText));
 //           }
      //  }else{
        //    const error=new Error('Error'+urlApi);
      //      return callback(error,null);
    //    }
   // }
  //  xhttp.send();
//}

const XMLHTTPREQUEST=require('xmlhttprequest').XMLHttpRequest;
const API='https://api.escuelajs.co/api/v1';
function fetchData(urlApi,callback){
    var xhr=new XMLHTTPREQUEST();
    xhr.open('GET',urlApi,true);
    xhr.onreadystatechange=function(evento){
        if(xhr.readyState===4){
            if(xhr.status===200){
                callback(null,JSON.parse(xhr.responseText));
            }else{
            const error=new Error('Error'+urlApi);
            return callback(error,null);
        }
        }
    }
    xhr.send();
}
fetchData(`${API}/products`,function(error1,dato1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${dato1[0].id}`,function(error2,dato2){
    if(error2) return console.error(error2);
    fetchData(`${API}/categories/${dato2?.category?.id}`,function(error3,dato3){
    if(error3)return console.error(error3);
        console.log("primer console ",dato1[0]);
        console.log("segundo console ",dato2.title);
        console.log("tercer console ",dato3.name);
    });    
    });
});