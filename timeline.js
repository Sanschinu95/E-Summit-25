const janButton = document.getElementById("jan-btn")
const febButton = document.getElementById("feb-btn")
const modeIndicator = document.getElementById("mode-indicator")

const janEventsBox = document.getElementById("jan-events")
const febEventsBox = document.getElementById("feb-events")


let timelineMode = 0 // 0 for jan 1 for feb

janButton.onclick = evt => {
    timelineMode = 0;
    modeIndicator.classList.remove("left-1/2")
    modeIndicator.classList.add("left-0")
    
    janEventsBox.classList.add("flex")
    janEventsBox.classList.remove("hidden")
    febEventsBox.classList.add("hidden")
    febEventsBox.classList.remove("flex")
}

febButton.onclick = evt => {
    timelineMode = 1;
    modeIndicator.classList.remove("left-0")
    modeIndicator.classList.add("left-1/2")

    febEventsBox.classList.add("flex")
    febEventsBox.classList.remove("hidden")
    janEventsBox.classList.add("hidden")
    janEventsBox.classList.remove("flex")
}

const janDaysButtons = [
    document.getElementById("jan-d1-btn"),
    document.getElementById("jan-d2-btn"),
    document.getElementById("jan-d3-btn")
]

const janDateBoxes = [
    document.getElementById("jan-date1"),
    document.getElementById("jan-date2"),
    document.getElementById("jan-date3")
]

let activeJanDay = 0;

janDaysButtons.forEach( (day,idx) => {
    day.addEventListener("click", evt=> {
        janDaysButtons[activeJanDay].classList.remove("bg-primary","border-primary")
        janDaysButtons[activeJanDay].classList.add("bg-black","border-white")
        janDaysButtons[activeJanDay].classList.remove("scale-100","opacity-100")
        janDaysButtons[activeJanDay].classList.add("scale-50","opacity-80")
        
        janDateBoxes[activeJanDay].classList.remove("flex")
        janDateBoxes[activeJanDay].classList.add("hidden")
        
        activeJanDay = idx;
        
        janDaysButtons[activeJanDay].classList.add("bg-primary","border-primary")
        janDaysButtons[activeJanDay].classList.remove("bg-black","border-white")
        janDateBoxes[activeJanDay].classList.add("flex")
        janDateBoxes[activeJanDay].classList.remove("hidden")
        janDaysButtons[activeJanDay].classList.add("scale-100","opacity-100")
        janDaysButtons[activeJanDay].classList.remove("scale-50","opacity-80")
    })
})


// --- 

const febDaysButtons = [
    document.getElementById("feb-d1-btn"),
    document.getElementById("feb-d2-btn"),
    document.getElementById("feb-d3-btn")
]

const febDateBoxes = [
    document.getElementById("feb-date1"),
    document.getElementById("feb-date2"),
    document.getElementById("feb-date3")
]

let activeFebDay = 0;

febDaysButtons.forEach( (day,idx) => {
    day.addEventListener("click", evt=> {
        febDaysButtons[activeFebDay].classList.remove("bg-primary","border-primary")
        febDaysButtons[activeFebDay].classList.add("bg-black","border-white")
        
        febDaysButtons[activeFebDay].classList.remove("scale-100","opacity-100")
        febDaysButtons[activeFebDay].classList.add("scale-50","opacity-80")
        
        
        febDateBoxes[activeFebDay].classList.remove("flex")
        febDateBoxes[activeFebDay].classList.add("hidden")
        
        
        
        activeFebDay = idx;
        
        febDaysButtons[activeFebDay].classList.add("bg-primary","border-primary")
        febDaysButtons[activeFebDay].classList.remove("bg-black","border-white")
        febDateBoxes[activeFebDay].classList.add("flex")
        febDateBoxes[activeFebDay].classList.remove("hidden")
   
        febDaysButtons[activeFebDay].classList.add("scale-100","opacity-100")
        febDaysButtons[activeFebDay].classList.remove("scale-50","opacity-80")
   
    })
})
