var currentDay = moment();
console.log(currentDay);
$("#currentDay").text(currentDay.format('dddd, MMMM Do h:mm:ss a'));
// $("#currentDay").text(currentDay.format('Today is dddd, MMMM Do. It is currently h:mm a.'));
function currentDateandTime() 
{
  document.getElementById('currentDay').innerHTML =  
  moment().format('dddd, MMMM Do h:mm:ss a');
  setTimeout(function () { currentDateandTime(); }, 1000);
}

currentDateandTime();


//write a function that makes time block change color depending on if time of block is past, present, or future
// set variables for each hour block to be synced up with a moment element matching time
//make function check each variable for the hour, if hour is past/current/future, make the color of the timeblock match
var colorBlock = function(time) {




}