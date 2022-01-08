//access container for timeblock rows
var containerEl = $('.container');
var divRow = $('<div>');
//hourblocks access
var hourBlock = $('<div>');
//text inputs access
var textInputDiv = $('<div>');
var textInput = $('<input type="text" placeholder="Enter Planned Activity">');
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

//logic to make timeblock rows 
hours.forEach(function(hour){
  var momentHour = moment().hours()
  //set a variable equal to the current time to be used as a parameter for determining color of timeblock 
  //for testing purposes, change value of var MomentHour to a number between 9 and 17 (9am - 5 pm)
  var momentHour = 9
  //create text inputs
  var textInputDiv = $('<textarea>'); 
  //color code rows depending on if hour block matches current hour, is in the past, or is in the future
  if (momentHour > hour.timeValue) {
    //assign classes depending on if hour in hour block of each timeblock is in the past, present, or future
    textInputDiv.addClass('col-8 description past')
  } else if (momentHour === hour.timeValue) {
    textInputDiv.addClass('col-8 description present')
  } else {
    textInputDiv.addClass('col-8 description future')
  }

//create rows
  divRow = $('<div>');
  divRow.addClass('row');
  //assign each row an ID associated to the time value (9 am, 10 am, 11 am, etc) of each associated hourblock
  divRow.attr('id', hour.timeValue);
  containerEl.append(divRow);
  hourBlock = $('<div>');
  hourBlock.addClass('col-1 hour');
  //make each hour block show the correct time value
  hourBlock.text(hour.displayHour);

 //retrieve entered activity from local storage
  textInputDiv.val(localStorage.getItem(hour.timeValue))
  textInputDiv.addClass('col-8 description');
  //generate save buttons
  var saveBtn = $('<button>');
  saveBtn.text('Save');
  saveBtn.text('Click here to save');
  //place all created elements into a row, rows are then placed into the container element
  containerEl.append(divRow.append(hourBlock, textInputDiv, saveBtn));
  saveBtn.addClass('save');
  saveBtn.addClass('saveBtn');
})

//save activity to local storage
$('.save').on('click', function () {
  var activity = $(this).siblings('.description').val()
  var hourKey = $(this).parent().attr('id');
  localStorage.setItem(hourKey, activity);
  //this = save button
})


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


function currentDateandTime() {
  var currentDay = moment().format('dddd, MMMM Do')
  $("#currentDay").text(currentDay);
}

//calls date/time function
currentDateandTime(); 
