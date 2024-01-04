


let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");



setInterval(()=>{
    
let CurrentTime = new Date();
hours.innerHTML = (CurrentTime.getHours()<10?"0":"") + CurrentTime.getHours();
minutes.innerHTML = (CurrentTime.getMinutes()<10?"0":"") + CurrentTime.getMinutes();
seconds.innerHTML = (CurrentTime.getSeconds()<10?"0":"" ) + CurrentTime.getSeconds();


},1000);




