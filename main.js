let images = Array.from(document.querySelectorAll(".slider-container img"));
let numberSlide = images.length;
let currSlide = 1;
let actorsNames =["Al Pacino","Ben Stiller","Patrick Stewart","Christoph Waltz","Robert De Niro"];
let slideName = document.querySelector(".slide-number");
let nextbtn = document.querySelector(".next");
let prevbtn = document.querySelector(".prev");
let span = document.querySelector(".indicators");

//create ul and daynmic 5 li using js(for-loop)

let ulSpan = document.createElement("ul");
ulSpan.setAttribute("id","cuntr");
span.appendChild(ulSpan);
for(let i =1;i<=numberSlide;i++){
    let liUlSpan = document.createElement("li");
    liUlSpan.setAttribute("data-index",i)
    let textLiUlSpan = document.createTextNode(i)
    liUlSpan.appendChild(textLiUlSpan)
    ulSpan.appendChild(liUlSpan);
};

// ul active bullets

let ul = Array.from(document.querySelectorAll(".indicators ul li"));

for(let i =0;i<ul.length;i++){
    ul[i].onclick=function(){
        currSlide = parseInt(this.getAttribute("data-index"));
        checker();
    }
}

// checker function

checker();
function checker(){
    removeActive();
    images[currSlide-1].classList.add("active");
    ul[currSlide-1].classList.add("active");
    slideName.textContent = actorsNames[currSlide - 1];
    // if conditions
    if(currSlide === 1){
        prevbtn.classList.add("disabled")
    }else if(currSlide === numberSlide){
        nextbtn.classList.add("disabled")
    }else{
        prevbtn.classList.remove("disabled")
        nextbtn.classList.remove("disabled")
    }
}
function removeActive(){
    images.forEach((e)=>{
        e.classList.remove("active")
    })
    ul.forEach((e)=>{
        e.classList.remove("active")
    })
}

// next and prev

nextbtn.addEventListener ("click",nextSlide)
prevbtn.addEventListener ("click",prevSlide)
function nextSlide(){
    if(currSlide === numberSlide){
        return false
    }else{
        currSlide ++;
        checker();
    }
}
function prevSlide(){
    if(currSlide === 1){
        return false
    }else{
        currSlide --;
        checker();
    }
}
