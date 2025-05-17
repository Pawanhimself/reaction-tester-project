var startTime = new Date().getTime();

// when user click on this div then this event is called and 
// run the script inside this evenet
document.getElementById('shape').onclick = function(){

    divPosition();
    let endTime = new Date();
    let timeTaken = endTime - startTime;
    let formatedTime = formatTime(timeTaken);

    alert(formatedTime);
    location.reload();
}

//calling div position so when the page is loaded for the first time it style the div
divPosition();

//divPosition function is used to place div to random position after the use click on it
function divPosition(){
   
    let left = (Math.random() * 30);
    let top = (Math.random() * 30);
    let wh = (Math.random() * 10) + 20;

    let divElem = document.getElementById('shape');
    divElem.style.left = `${left}rem`;
    divElem.style.top = `${top}rem`;
    divElem.style.width = `${wh}rem`;
    divElem.style.height = `${wh}rem`;
    divElem.style.backgroundColor = getRandomColorHex();
}

//this function return the random hex color code to change the div color every time when the user click on it
function getRandomColorHex() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}
  
function formatTime(milliseconds) {
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
  
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
  
    return minutes + " minute " + seconds + " seconds";
  }  
