function oba(){
    window.alert("Oobaa");
}

function run(){
    var noButton = document.getElementById("no");
    
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    var maxX = windowWidth - noButton.offsetWidth;
    var maxY = windowHeight - noButton.offsetHeight;

    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}