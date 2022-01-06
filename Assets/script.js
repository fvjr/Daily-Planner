//access container for timeblock rows
var containerEl = $('.container');
var divRow = $('<div>');
//hourblocks access
var hourBlock = $('<div>');
//text inputs access
var textInputDiv = $('<div>');
var textInput = $('<input type="text" placeholder="Enter Planned Activity">');
//save buttons access
// var saveBtn = $('<button>');

//hour objects array
var hours = [

  {
    displayHour: 9,
    meridiem: 'am',
    minutes: ':00',
    timeValue: 9,
  },
  {
    displayHour: 10,
    meridiem: 'am',
    minutes: ':00',
    timeValue: 10,
  },
  {
    displayHour: 11,
    meridiem: 'am',
    minutes: ':00',
    timeValue: 11,
  },
  {
    displayHour: 12,
    meridiem: 'pm',
    minutes: ':00',
    timeValue: 12,
  },
  {
    displayHour: 1,
    meridiem: 'pm',
    minutes: ':00',
    timeValue: 13,
  },
  {
    displayHour: 2,
    meridiem: 'pm',
    minutes: ':00',
    timeValue: 14,
  },
  {
    displayHour: 3,
    meridiem: 'p,',
    minutes: ':00',
    timeValue: 15,
  },
  {
    displayHour: 4,
    meridiem: 'pm',
    minutes: ':00',
    timeValue: 16,
  },
  {
    displayHour: 5,
    meridiem: 'pm',
    minutes: ':00',
    timeValue: 17,
  }
]

hours.forEach(function(hour){
  var momentHour = moment().hours()
  var textInputDiv = $('<textarea>'); 
  if (momentHour > hour.timeValue) {
    textInputDiv.addClass('col-8 description past')
  } else if (momentHour === hour.timeValue) {
    textInputDiv.addClass('col-8 description present')
  } else {
    textInputDiv.addClass('col-8 description future')
  }

  divRow = $('<div>');
  divRow.addClass('row');
  divRow.attr('id', hour.timeValue);
  containerEl.append(divRow);
  hourBlock = $('<div>');
  hourBlock.addClass('col-1 hour');
  hourBlock.text(hour.displayHour);
 
  textInputDiv.val(localStorage.getItem(hour.timeValue))
  textInputDiv.addClass('col-8 description');
  var saveBtn = $('<button>');
  saveBtn.text('Save');
  containerEl.append(divRow.append(hourBlock, textInputDiv, saveBtn));
  saveBtn.addClass('save');
})

$('.save').on('click', function(){
  var activity = $(this).siblings('.description').val()
var hourKey = $(this).parent().attr('id');
localStorage.setItem(hourKey, activity);

//this = save button
})




//want dive to have three children
//time, input, save button





// var targetColor;
// console.log(changeColors());
//for loop to make rows dynamically
// for (var i = 0; i < hours.length; i++) {
//   divRow = $('<div>');
//   divRow.addClass('row');
//   divRow.attr('value', hours[i].timeValue);
//   containerEl.append(divRow);
//   //add hourblocks
//   hourBlock = $('<div>');
//   hourBlock.addClass('col hour');
//   //assign text to hour blocks and determine if am or pm
//   hourBlock.text(hours.displayHour);
//   // if (hours[i].displayHour[i] === 9 || hours[i].displayHour[i] === 10 || hours[i].displayHour[i] === 11) {
//   //   hourBlock = hourBlock.text(hours.displayHour[i] + minutes + ' ' + hours.meridiem[0])
//   //   console.log(hourBlock)
//   // } else if (hours[i].displayHour[i] === 12 || hours[i].displayHour[i] === 1 || hours[i].displayHour[i] === 2 || hours[i].displayHour[i] === 3 || hours[i].displayHour[i] === 4 || hours[i].displayHour[i] === 5) {
//   //   hourBlock = hourBlock.text(hours.hour[i] + minutes + ' ' + hours.meridiem[1])
//   //   console.log(hourBlock)
//   // };
//   //hourblock styles
//   hourBlock.css('border', 'black solid 5px');
//   hourBlock.css('font-size', '40px');
//   hourBlock.css('text-align', 'right');
//   hourBlock.css('height', '60px');
//   divRow.append(hourBlock);

//   //add text inputs
//   textInputDiv = $('<div>');
//   textInputDiv.addClass(`input-group input-group-lg col-6`);
//   textInputDiv.attr('style', `background-color: ${targetColor}`)
//   divRow.append(textInputDiv)
//   textInput = $('<input type="text" placeholder="Enter Planned Activity">');
//   textInput.addClass(`form-control col input-group-text`);
//   textInput.css('height', '60px');
//   textInputDiv.append(textInput);

//   // add save buttons
//   saveBtn = $('<button>');
//   saveBtn.addClass('col saveBtn');
//   saveBtn.text('SAVE BUTTON PLACEHOLDER!');
//   saveBtn.css('font-size', '25px');
//   saveBtn.css('text-align', 'right');
//   saveBtn.css('height', '60px');
//   saveBtn.css('text-align', 'center');
//   divRow.append(saveBtn);

// }
//END OF FUNCTION







function changeColors() {

  var momentHour = moment().hours()
  console.log(momentHour)
  $('.row').each(function () {
    var ourHour = parseInt($(this).attr('value'));
    if (ourHour < momentHour) {
       targetColor = '#d3d3d3';
       return targetColor
    } else if (ourHour === momentHour) {
       targetColor = '#ff6961'
       return targetColor
    } else {
       targetColor = '#77dd77'
       return targetColor
    }
  }
  )
}















//make function to generate rows
var makeTimeBlocks = function () {

}



//for each function on hours array


//include function to change class depending on past/current/future

//make function to color code objects

//function to load local storage

//function to save to local storage

//function to show current date and time in jumbotron via moment()
function currentDateandTime() {
  var currentDay = moment().format('dddd, MMMM Do')
  $("#currentDay").text(currentDay);
}
//calls date/time function
currentDateandTime();