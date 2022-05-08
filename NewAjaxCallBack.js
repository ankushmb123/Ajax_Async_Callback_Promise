let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


function makePromiseCall(methodType, url,  async= true, data= null){
   return new Promise(function(resolve, reject)
   {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log("State Changed Called. Ready State: "+ xhr.readyState+ " Status:"+xhr.status);
        if (xhr.status.tostring().match('[2] [0-9] {2}$')) {
            resolve(xhr.responseText);
        }else if (xhr.status.tostring().match('^[4,5] [0-9]{2}$')){
            reject({
                status: xhr.status,
                statusText: xhr.statusText
            });
            console.groupCollapsed("XHR Failed");
        }
        }
   
        xhr.open(methodType, url, async);
        if(data){
             console.log(JSON.stringify(data));
            xhr.setRequestHeader("Content-Type","application/json");
            xhr.send(JSON.stringify(data));
        }else xhr.send();
        console.log(methodType+ "request sent in the server ");
   });
}

    const getURL = "http://localhost:3000/employees/1";
     makePromiseCall("GET", getURL, true)
   .then(responseText => {
       console.log("Get User Data: "+responseText)
   })
    .catch(error => console.log("Get Error Status: "+JSON.stringify(error)));



const deleteURL = "http://localhost:3000/employees/3";
makePromiseCall("DELETE", deleteURL, false)
    .then(responseText => {
        console.log("User Deleted: "+responseText)
    })
    .catch(error => console.log("DELETE error status: "+JSON.stringify(error)));

const postURL = "http://localhost:3000/employees";
const emplData = {"name": "Sumit", "Salary": "232400"};

makePromiseCall("POST", postURL, true, emplData)
    .then(responseText => {
        console.log("User Added: "+responseText)
    })
    .catch(error => console.log("POST error status: "+JSON.stringify(error)));

// xhr.open(methodType, url, async);
// if(data){
//     xhr.setRequestHeader("Content-Type", + showTime());
//     xhr.send(JSON.stringify(data));
// }
// else xhr.send();
// console.log(methodType+ "request sent to the server at: "+ showTime());