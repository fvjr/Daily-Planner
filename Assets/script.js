//access jumbotron to show current day, date, and time
var currentDay = moment();
console.log(currentDay);
$("#currentDay").text(currentDay.format('dddd, MMMM Do h:mm:ss a'));

//access container to put timeblock rows
var containerEl = $('.container');
var divRow = $('<div>');
divRow.addClass('row');
containerEl.append(divRow);
//add hourblocks
var hourBlock = $('<div>');
hourBlock.addClass('col hour');
hourBlock.text('9 AM');
hourBlock.css('border', 'black solid 5px');
divRow.append(hourBlock);
//add text inputs
var textInputDiv = $('<div>');
textInputDiv.addClass('input-group input-group-lg col-6');
divRow.append(textInputDiv)
var textInput = $('<input type="text" placeholder="Enter Planned Activity">');
textInput.addClass('form-control col input-group-text');
textInputDiv.append(textInput);
// add save buttons
var saveBtn = $('<button>');
saveBtn.addClass('col saveBtn');
saveBtn.text('SAVE BUTTON PLACEHOLDER!');
divRow.append(saveBtn);

//show current date and time in jumbotron
function currentDateandTime() 
{
  document.getElementById('currentDay').innerHTML =  
  moment().format('dddd, MMMM Do h:mm:ss a');
  setTimeout(function () { currentDateandTime(); }, 1000);
}
currentDateandTime();


//for loop to generate the rest of the timeblocks
for (i = 1; i < 9; i++) {
divRow = $('<div>');
divRow.addClass('row');
containerEl.append(divRow);
//add hourblocks
hourBlock = $('<div>');
hourBlock.addClass('col hour');
hourBlock.text('9 AM');
hourBlock.css('border', 'black solid 5px');
divRow.append(hourBlock);
//add text inputs
textInputDiv = $('<div>');
textInputDiv.addClass('input-group input-group-lg col-6');
divRow.append(textInputDiv)
textInput = $('<input type="text" placeholder="Enter Planned Activity">');
textInput.addClass('form-control col input-group-text');
textInputDiv.append(textInput);
// add save buttons
saveBtn = $('<button>');
saveBtn.addClass('col saveBtn');
saveBtn.text('SAVE BUTTON PLACEHOLDER!');
divRow.append(saveBtn);
}