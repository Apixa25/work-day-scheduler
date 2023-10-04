var saveButton = document.getElementById("btn");




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


var today = dayjs();

$('#1a').text(today.format('h:mm A dddd MMM D, YYYY'));

$('btn')


saveButton.addEventListener("click", function(event) {
	event.preventDefault();

  var description = {
    dayPlan: description.value,
    comment: comment.value.trim()
  };

  localStorage.setItem("descriptionStringify", JSON.stringify(description));
  	localStorage.setItem("description", description);

  localStorage.setItem("ArrayStringify", JSON.stringify(["description", 1,2 ]));
	localStorage.setItem("Array", ["description", 1,2 ]);

	renderMessage();

});

function renderMessage() {
 
	//Object Getting
  var lastGrade = JSON.parse(localStorage.getItem("descriptionStringify"));
  // var lastGrade = localStorage.getItem("description");
  
  //Array Getting
  var arr = JSON.parse(localStorage.getItem("ArrayStringify"));
  console.log(arr[0])//"description" Beacause ["description", 1,2 ]

  var arrStr = localStorage.getItem("Array");
  // arrStr = "description,1,2"
  
  console.log(arrStr[0])//s Beacuse "description,1,2"
  if (lastGrade !== null) {
    document.querySelector(".message").textContent = lastGrade.student + 
    " received a/an " + lastGrade.grade
  }
}

