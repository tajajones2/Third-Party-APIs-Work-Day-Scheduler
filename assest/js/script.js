// step one: put current date using moment 
// step two: compare the current hour w/ time-blokcs
// step three: translate time-blocks to military time 
// step four: use css classes for present, past and future 

// compare the time blocks with moment()

// if momemt () > time blocks => past
// if moment () == time block => past
// if moment () < time-blocks => future

// step four: grab the txt area value and store it in local storage 


var timeBlocksArr=[9,10,11,12,13,14,15,16,17] // translate this time-blocks to miltary time 
// var textAreaEl = $("textarea")

var currenthour= moment().hour()
var currentDay= $("#currentDay") // kind of like document.quereySelector(#currentDay)
console.log(currenthour)

var systemTime=moment().format("dddd, MMMM Do")
currentDay.text(systemTime) // kind of like currentDay.textContent=systemTime


function displayTimeBlockColors(){
    for (var i = 0; i < timeBlocksArr.length; i++) {
        
        
    }
}

// function displayTimeBlockColors(){
//     for(var i=0; i < textAreaEl.length;i++){
//         //this would be past 
//         var currentTextEl = $("#",textAreaEl[i])

//         if(currenthour>textAreaEl[i]){
          
//            currentTextEl.addClass("past")[i]
//          }
//          else if(currenthour== textAreaEl[i]){
//             currentTextEl.addClass("present")
//          }
//          else if(currenthour < textAreaEl[i]){
//             currentTextEl.addClass("future") 
//          }
//     }
// }

// displayTimeBlockColors()

