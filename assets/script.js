// displays the time
var today = dayjs();
$('#1a').text(today.format('hh:mm A dddd MMM D, YYYY'));

// var todayDate = dayjs().format('dddd, MMM Do YYYY');
// $("#1a").html(todayDate);


// wraps the code so that nothing runs before everythign is loaded
$(document).ready(function() {
// this is the click listener for the "save buttons"
  $(".saveBtn").on("click", function () {
// text variable location (which save button)
    var text = $(this).siblings(".description").val();
// time variable for when the button was clicked (when)
    var time = $(this).parent().attr("id");

// this will save the user data to local storage
    localStorage.setItem(text, time);
    console.log(text)
    console.log(time)
  })

// button to clear the fields and the local storage
$("#clearAll").click(function (event) {
  event.preventDefault;
  $("description").val("");
  localStorage.clear();
})

function timeTracker() {
  var timeNow = dayjs().hour();

$(".time-block").each(function () {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);

// adds or removes the class depending on the time
// this is what will determine what color the blocks are
if (blockTime < timeNow) {
  $(this).removeClass('future');
  $(this).removeClass('present');
  $(this).addClass('past');
}
else if (blockTime === timeNow) {
  $(this).removeClass('past');
  $(this).removeClass('future');
  $(this).addClass('present');
}
else {
  $(this).removeClass('present');
  $(this).removeClass('past');
  $(this).addClass('future');
}
})
}
//retrieves items from local storage and sets them in proper places
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-1 .time-block").val(localStorage.getItem("01"));
$("#hour-2 .time-block").val(localStorage.getItem("02"));
$("#hour-3 .time-block").val(localStorage.getItem("03"));
$("#hour-4 .time-block").val(localStorage.getItem("04"));
$("#hour-5 .time-block").val(localStorage.getItem("05"));

timeTracker();
})