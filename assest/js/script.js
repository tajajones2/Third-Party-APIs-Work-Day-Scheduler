// step one: put current date using moment 
// step two: compare the current hour w/ time-blokcs
// step three: translate time-blocks to military time 
// step four: use css classes for present, past and future
// compare the time blocks with moment()

// if momemt () > time blocks => past
// if moment () == time block => past
// if moment () < time-blocks => future

// step four: grabthe txt area value and store it in local storage 


var timeBlocksArr=[9,10,11,12,13,14,15,16,17,] // translate this time-blocks to miltary time 

var currenthour= moment().hour()

var currentDay= $("#currentDay") // kind of like document.quereySelector(#currentDay)


var systemTime=moment().format("dddd, MMM Do")
currentDay.text(systemTime) // kind of like currentDay.textContent=systemTime
console.log(currentDay)

function displayTimeBlockColors(){
    for(var i=0; i < timeBlocksArr.length;i++){
        //this would be past 
        var currentTextEl = $("#" +timeBlocksArr[i])

        if(currenthour>timeBlocksArr[i]){
          
           currentTextEl.addClass("past")
         }
         else if(currenthour=== timeBlocksArr[i]){
            currentTextEl.addClass("present")
         }
         else if(currenthour < timeBlocksArr[i]){
            currentTextEl.addClass("future") 
         }
    }
}

displayTimeBlockColors()

