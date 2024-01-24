<<<<<<< HEAD
var kiwi = document.getElementById("kiwi");
var counter = 0;
var direction = 1;  // 1 para moverse hacia la derecha, -1 para moverse hacia la izquierda
var stopper = 0;

var rotate = true;
function movement() {

    if (direction ==1){
        kiwi.style.transform =   "scaleX(1)";
    if (kiwi.src.endsWith("kiwi.svg")) {
        kiwi.src = "./src/assets/img/crow-solid.png";

    } else {
        kiwi.src = "./src/assets/img/kiwi.svg";


    }
}else{
 
        kiwi.style.transform =   "scaleX(-1)";
        if (kiwi.src.endsWith("kiwi.svg")) {
            kiwi.src = "./src/assets/img/crow-solid.png";
        
        } else {
            kiwi.src = "./src/assets/img/kiwi.svg";
      
    
        }


    }

    counter += 2 * direction;  

    var marginLeft = counter;

    kiwi.style.marginLeft = marginLeft + "px";
    if (marginLeft >= 250 || marginLeft <= 0) {

        direction *= -1;
        stopper = 1;

    }
    if (stopper >=1){
        kiwi.src = "./src/assets/img/kiwi-sit.svg";
        setTimeout(function() {
           
            requestAnimationFrame(movement);
        }, 5000);
        stopper =0;
    }else{
        setTimeout(function() {
            requestAnimationFrame(movement);
        }, 45);
    }
}


requestAnimationFrame(movement);
=======
var kiwi = document.getElementById("kiwi");
var counter = 0;
var direction = 1;  // 1 para moverse hacia la derecha, -1 para moverse hacia la izquierda
var stopper = 0;

var rotate = true;
function movement() {

    if (direction ==1){
        kiwi.style.transform =   "scaleX(1)";
    if (kiwi.src.endsWith("kiwi.svg")) {
        kiwi.src = "./src/assets/img/crow-solid.png";

    } else {
        kiwi.src = "./src/assets/img/kiwi.svg";


    }
}else{
 
        kiwi.style.transform =   "scaleX(-1)";
        if (kiwi.src.endsWith("kiwi.svg")) {
            kiwi.src = "./src/assets/img/crow-solid.png";
        
        } else {
            kiwi.src = "./src/assets/img/kiwi.svg";
      
    
        }


    }

    counter += 2 * direction;  

    var marginLeft = counter;

    kiwi.style.marginLeft = marginLeft + "px";
    if (marginLeft >= 250 || marginLeft <= 0) {

        direction *= -1;
        stopper = 1;

    }
    if (stopper >=1){
        kiwi.src = "./src/assets/img/kiwi-sit.svg";
        setTimeout(function() {
           
            requestAnimationFrame(movement);
        }, 5000);
        stopper =0;
    }else{
        setTimeout(function() {
            requestAnimationFrame(movement);
        }, 45);
    }
}


requestAnimationFrame(movement);
>>>>>>> db15eed5ff67ef0afd2911ddca7a9d0c89c0666c
