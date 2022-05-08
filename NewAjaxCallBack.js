let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins: "+ date.getSeconds() + "Sec:";
}

function makeAJAXCall(methodType, url, callback, async= true, data= null){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        console.log(methodType+" State Changed Called at: "+ showTime()+ " Rs: "+ xhr.readyState+ " Status:"+xhr.status);
        if(xhr.readyState ===4){
            if(xhr.status === 200 || xhr.status === 201){
                callback(xhr.responseText);
            }
            else if(xhr.status >= 400){
                console.log("Handle 400 client Error or 500 server Error at: "+ showTime());
            }
        }
    }
        xhr.open(methodType, url, async);
        if(data){
             console.log(JSON.stringify(data));
            xhr.setRequestHeader("Content-Type","application/json");
            xhr.send(JSON.stringify(data));
        }else xhr.send();
        console.log(methodType+ "request sent in the server at: "+ showTime());
    }
    const getURL = "http://localhost:3000/employees";
function getUserDetails(data){
    console.log("Get User Data at: "+showTime()+" data: " +data)
}

makeAJAXCall("GET", getURL, getUserDetails, true);
console.log("Made GET AJAX Call to Server at "+ showTime());

const deleteURL = "http://localhost:3000/employees/4";
function userDeleted(data){
    console.log("User Deleted at : "+showTime()+" Data "+ data);
}
makeAJAXCall("DELETE", deleteURL, userDeleted, false);
console.log("Made DELETE AJAX Call to Server at "+ showTime());

const postURL = "http://localhost:3000/employees";
const emplData = {"name": "Sumit", "Salary": "232400"};
function userAdded(data){
    console.log("User Added at : "+showTime()+" Data "+ data)
}
makeAJAXCall("POST", postURL,userAdded, true, emplData);
console.log("Made POST AJAX Call to Server at "+ showTime());

// xhr.open(methodType, url, async);
// if(data){
//     xhr.setRequestHeader("Content-Type", + showTime());
//     xhr.send(JSON.stringify(data));
// }
// else xhr.send();
// console.log(methodType+ "request sent to the server at: "+ showTime());