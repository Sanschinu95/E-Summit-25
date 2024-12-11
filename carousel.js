const carouselLeft = document.getElementById("carousel-left")
const carouselRight = document.getElementById("carousel-right")
const carouselReel = document.getElementById("carousel-reel")

const dots = document.getElementById("carousel-dots").children

let activeIndex = 0;

carouselRight.onclick = (evt) => {
    dots[activeIndex].classList.remove("bg-primary")
    dots[activeIndex].classList.add("bg-white")
    
    if(activeIndex<3){
        activeIndex++
        // carouselReel.style.transition = ""
    }
    else{
        activeIndex = 0;
        // carouselReel.style.transition = "none"
    }
    
    dots[activeIndex].classList.remove("bg-white")
    dots[activeIndex].classList.add("bg-primary")
    carouselReel.style.transform = `translateX(-${100*activeIndex}%)`
}

carouselLeft.onclick = (evt) => {
    dots[activeIndex].classList.remove("bg-primary")
    dots[activeIndex].classList.add("bg-white")
    
    if(activeIndex>0){
        // carouselReel.style.transition = ""
        activeIndex--
    }
    else{
        activeIndex = 3;
        // carouselReel.style.transition = "none"
    }
    
    dots[activeIndex].classList.remove("bg-white")
    dots[activeIndex].classList.add("bg-primary")

    carouselReel.style.transform = `translateX(-${100*activeIndex}%)`
}


for (let dot of dots){
    dot.onclick = evt => {
        dots[activeIndex].classList.remove("bg-primary")
        dots[activeIndex].classList.add("bg-white")

        activeIndex = dot.dataset.index;
        
        dots[activeIndex].classList.remove("bg-white")
        dots[activeIndex].classList.add("bg-primary")
        
        carouselReel.style.transform = `translateX(-${100*activeIndex}%)`

    }
}

let autoCarousel;

autoCarousel = setInterval((event)=>{
    dots[activeIndex].classList.remove("bg-primary")
    dots[activeIndex].classList.add("bg-white")
    
    if(activeIndex<3){
        activeIndex++
        // carouselReel.style.transition = ""
    }
    else{
        activeIndex = 0;
        // carouselReel.style.transition = "none"
    }
    
    dots[activeIndex].classList.remove("bg-white")
    dots[activeIndex].classList.add("bg-primary")
    carouselReel.style.transform = `translateX(-${100*activeIndex}%)`
},3000)

const controllers = [carouselLeft, carouselRight, ...dots]

controllers.forEach(element => {
    element.addEventListener("click", evt => {
        clearInterval(autoCarousel)

        setTimeout(autoCarousel = setInterval((event)=>{
            dots[activeIndex].classList.remove("bg-primary")
            dots[activeIndex].classList.add("bg-white")
            
            if(activeIndex<3){
                activeIndex++
                // carouselReel.style.transition = ""
            }
            else{
                activeIndex = 0;
                // carouselReel.style.transition = "none"
            }
            
            dots[activeIndex].classList.remove("bg-white")
            dots[activeIndex].classList.add("bg-primary")
            carouselReel.style.transform = `translateX(-${100*activeIndex}%)`
        },3000),3000)

    })
})
