document.getElementById("pageRows").style.visibility = "hidden";
window.onscroll = function() {myFunction()};

let leftCol = document.getElementsByClassName("row-img-left");
let rightCol = document.getElementsByClassName("row-img-right");

var trigger = document.getElementById("intro").offsetTop;


function myFunction() {
    if (window.pageYOffset >= trigger) {
        document.getElementById("pageRows").style.visibility = "visible";
        
        for (let i = 0; i < leftCol.length; i++) {     
    leftCol[i].classList.add("fade-in-left");
        }
        for (let i = 0; i < rightCol.length; i++) {     
            rightCol[i].classList.add("fade-in-right");
        }  
}  
}

//Images larger on click
//img = document.getElementsByClassName("thumbnail");
// Function to set image dimensions
//function growImg() {
    //for (let i = 0; i < img.length; i++) {     
        $( ".thumbnail" ).click(function(){
    img.style.width = "60%";
    img.style.height = "auto";
    img.style.transition = "width 0.5s ease";}
);
//}
//}

