let get=document.getElementById('get')
let post=document.getElementById('post')

let sendHttpRequest=(method,url,data)=>{

    let promise =new Promise((resolve,reject)=>{
    let xml=new XMLHttpRequest();
    xml.open(method,url); 

    xml.responseType='json';

    if(data){
    xml.setRequestHeader('Content-Type','application/json')
    }

    xml.onload=()=>{
        if(xml.status>=400){
            reject(xml.response)
        }else{
        let data=xml.response; 
        resolve(data)
        }
    }

    xml.onerror=()=>{
        reject('Error Occurs....!')
    }

    xml.send(JSON.stringify(data));
    });
    return promise;
    
}

let getData=()=>{
    sendHttpRequest("GET",'https://reqres.in/api/register').then(responseData=>{
        console.log(responseData)
    })
}

let postData= () => {
    sendHttpRequest('POST','https://reqres.in/api/register',{
    email: "eve.holt@reqres.in",
   // password: "pistol"
    }).then(responseData=>{
        console.log(responseData);
    }).catch(err=>{
        console.log(err)
    })
}


// let getData = () => {
//     let xml=new XMLHttpRequest();
//     xml.open('GET','https://reqres.in/api/users'); // Open Source API

//     xml.responseType='json';

//     xml.onload=()=>{
//         let data=xml.response;  // data=JSON.parse(xml.response)
//         console.log(data)
//     }

//     // xml.onload=function(response){
//     //     console.log(response)
//     // }

//     xml.send();
// }


get.addEventListener('click',getData)
post.addEventListener('click',postData)