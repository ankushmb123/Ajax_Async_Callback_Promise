function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins: "+ date.getSeconds() + "Sec:";
}

function showSessionExpire(){
    console.log("Activity: B: Your session expired at "+ showTime());
}

console.log("Activity- A: Triggering Activity B at"+ showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A : Triggerred-B at "+ showTime()+ "will excute after 5 second");