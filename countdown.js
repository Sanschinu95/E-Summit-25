// programming for count-down timer

const   MainCountdownBox = document.getElementById("countdown")
        DaysBox = document.getElementById("count-days"),
        HoursBox = document.getElementById("count-hours"),
        MinutesBox = document.getElementById("count-mins"),
        SecsBox = document.getElementById("count-secs");

const EventDate = new Date("2025-02-14T00:00:00")

let currentDate = Date.now()

let daysLeft, hoursLeft, secondsLeft; //countdown variables

let difference_sec =    Math.floor((EventDate.getTime() - Date.now())/ 1000 );


const setValuesOfCountDownVariebles = () => {
    difference_sec =  Math.floor((EventDate.getTime() - Date.now())/ 1000 ) // update every time function calls
    let secondsLeft = difference_sec % 60,
        minutesLeft = Math.floor( (difference_sec / 60) % 60 ),
        hoursLeft = Math.floor( (difference_sec / (60*60) ) % 24) ,
        daysLeft = Math.floor(difference_sec / (60*60*24) );

    
    //indicators
    let secondIndicators = {
        one:document.getElementById("secs-ind-1"),
        two:document.getElementById("secs-ind-2"),
        three:document.getElementById("secs-ind-3"),
        four:document.getElementById("secs-ind-4")
    }
    let minIndicators = {
        one:document.getElementById("mins-ind-1"),
        two:document.getElementById("mins-ind-2"),
        three:document.getElementById("mins-ind-3"),
        four:document.getElementById("mins-ind-4")
    }
    let hourIndicators = {
        one:document.getElementById("hours-ind-1"),
        two:document.getElementById("hours-ind-2"),
        three:document.getElementById("hours-ind-3"),
        four:document.getElementById("hours-ind-4")
    }
    let daysIndicators = {
        one:document.getElementById("days-ind-1"),
        two:document.getElementById("days-ind-2"),
        three:document.getElementById("days-ind-3"),
        four:document.getElementById("days-ind-4")
    }

    // Pushing to DOM:
    
    if (difference_sec >0){
        DaysBox.innerText = daysLeft >= 10 ? daysLeft : '0'+ daysLeft;
        HoursBox.innerText = hoursLeft >= 10 ? hoursLeft : '0'+ hoursLeft;
        MinutesBox.innerText = minutesLeft >= 10 ? minutesLeft : '0' + minutesLeft;
        SecsBox.innerText = secondsLeft >= 10 ? secondsLeft : '0' + secondsLeft;
        
        // Logic for Indicator (RING)
        
        //secs

        p_seconds = (secondsLeft+1)/60

        if(0<=p_seconds && p_seconds<0.30){
            secondIndicators.one.style.height = ((p_seconds*100/0.29)-10)+"%"
            secondIndicators.two.style.width = "0"
            secondIndicators.three.style.height = "0"
            secondIndicators.four.style.width = "0"
        }
        else if(0.30<=p_seconds && p_seconds<0.55){
            secondIndicators.one.style.height = "100%"
            secondIndicators.two.style.width = (( (p_seconds-0.25)*100/0.29)-10)+"%"
            secondIndicators.three.style.height = "0"
            secondIndicators.four.style.width = "0"
        }
        else if(0.55<=p_seconds && p_seconds<0.80){
            secondIndicators.one.style.height = "100%"
            secondIndicators.two.style.width = "100%"
            secondIndicators.three.style.height = (( (p_seconds-0.5)*100/0.29)-10)+"%"
            secondIndicators.four.style.width = "0"
        }
        else if(0.80<=p_seconds && p_seconds<1){
            secondIndicators.one.style.height = "100%"
            secondIndicators.two.style.width = "100%"
            secondIndicators.three.style.height = "100%"
            secondIndicators.four.style.width = (( (p_seconds-0.75)*100/0.29)-10)+"%"
        }
        
        
        if (p_seconds==1){
                secondIndicators.two.style.width = "100%"
                secondIndicators.four.style.width = "100%"
                secondIndicators.one.style.height = "100%"
                secondIndicators.three.style.height = "100%"
            
        }

        //mins

        p_minutes = (minutesLeft+1)/60
        
        if(0<=p_minutes && p_minutes<0.30){
            minIndicators.one.style.height = ((p_minutes*100/0.29)-10)+"%"
            minIndicators.two.style.width = "0"
            minIndicators.three.style.height = "0"
            minIndicators.four.style.width = "0"
        }
        else if(0.30<=p_minutes && p_minutes<0.55){
            minIndicators.one.style.height = "100%"
            minIndicators.two.style.width = (( (p_minutes-0.25)*100/0.29)-10)+"%"
            minIndicators.three.style.height = "0"
            minIndicators.four.style.width = "0"
        }
        else if(0.55<=p_minutes && p_minutes<0.80){
            minIndicators.one.style.height = "100%"
            minIndicators.two.style.width = "100%"
            minIndicators.three.style.height = (( (p_minutes-0.50)*100/0.29)-10)+"%"
            minIndicators.four.style.width = "0"
        }
        else if(0.80<=p_minutes && p_minutes<1){
            minIndicators.one.style.height = "100%"
            minIndicators.two.style.width = "100%"
            minIndicators.three.style.height = "100%"
            minIndicators.four.style.width = (( (p_minutes-0.75)*100/0.29)-10)+"%"
        }
        
        
        if (p_minutes==1){
                minIndicators.two.style.width = "100%"
                minIndicators.four.style.width = "100%"
                minIndicators.one.style.height = "100%"
                minIndicators.three.style.height = "100%"
            
        }

        //hours
        p_hours = (hoursLeft+1)/24
        
        if(0<=p_hours && p_hours<0.30){
            hourIndicators.one.style.height = ((p_hours*100/0.29)-10)+"%"
            hourIndicators.two.style.width = "0"
            hourIndicators.three.style.height = "0"
            hourIndicators.four.style.width = "0"
        }
        else if(0.30<=p_hours && p_hours<0.55){
            hourIndicators.one.style.height = "100%"
            hourIndicators.two.style.width = (( (p_hours-0.25)*100/0.29)-10)+"%"
            hourIndicators.three.style.height = "0"
            hourIndicators.four.style.width = "0"
        }
        else if(0.55<=p_hours && p_hours<0.80){
            hourIndicators.one.style.height = "100%"
            hourIndicators.two.style.width = "100%"
            hourIndicators.three.style.height = (( (p_hours-0.50)*100/0.29)-10)+"%"
            hourIndicators.four.style.width = "0"
        }
        else if(0.80<=p_hours && p_hours<1){
            hourIndicators.one.style.height = "100%"
            hourIndicators.two.style.width = "100%"
            hourIndicators.three.style.height = "100%"
            hourIndicators.four.style.width = (( (p_hours-0.75)*100/0.29)-10)+"%"
        }
        
        
        if (p_hours==1){
                hourIndicators.two.style.width = "100%"
                hourIndicators.four.style.width = "100%"
                hourIndicators.one.style.height = "100%"
                hourIndicators.three.style.height = "100%"
        }

        //days
        p_days = (daysLeft+1)/80
        
        if(0<=p_days && p_days<0.30){
            daysIndicators.one.style.height = ((p_days*100/0.29)-10)+"%"
            daysIndicators.two.style.width = "0"
            daysIndicators.three.style.height = "0"
            daysIndicators.four.style.width = "0"
        }
        else if(0.30<=p_days && p_days<0.55){
            daysIndicators.one.style.height = "100%"
            daysIndicators.two.style.width = (( (p_days-0.25)*100/0.29)-10)+"%"
            daysIndicators.three.style.height = "0"
            daysIndicators.four.style.width = "0"
        }
        else if(0.55<=p_days && p_days<0.80){
            daysIndicators.one.style.height = "100%"
            daysIndicators.two.style.width = "100%"
            daysIndicators.three.style.height = (( (p_days-0.50)*100/0.29)-10)+"%"
            daysIndicators.four.style.width = "0"
        }
        else if(0.80<=p_days && p_days<1){
            daysIndicators.one.style.height = "100%"
            daysIndicators.two.style.width = "100%"
            daysIndicators.three.style.height = "100%"
            daysIndicators.four.style.width = (( (p_days-0.75)*100/0.29)-10)+"%"
        }
        
        
        if (p_days==1){
                daysIndicators.two.style.width = "100%"
                daysIndicators.four.style.width = "100%"
                daysIndicators.one.style.height = "100%"
                daysIndicators.three.style.height = "100%"
        }

    }
    else{
        MainCountdownBox.innerHTML = `<p class="text-center font-bold">Startup Expo 2025 is Over!<p>`
    }



}

setValuesOfCountDownVariebles() // initially run the function once.

if  (difference_sec > 0 ) setInterval(setValuesOfCountDownVariebles, 1000);
