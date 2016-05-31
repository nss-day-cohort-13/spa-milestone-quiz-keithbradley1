/*
setup
1) a standard navbar will have an input field and a button
2) the card info will be placed in a container on three cards
   separated into columns
*/

//navbar interactivity:

//1)when the input field is changed we want to add a description
  // this should happen simultaneously in navbar and the card selected

//select the card to edit

var selectCard = function() {
//makes it accesible to edit
  console.log("select card...");
}

var editDescription = function() {
  //change the description when the field is clicked
  console.log("edit description...");
}

//2)when the button is pressed availability is changed
var changeAvailability = function() {
  //when clicked the selected card is displaying unavailable
  console.log("change availability...");
}


//2) Also, clear the value of the text input in the navbar,
//and put the cursor in the text
var clearNavbar = function() {
  //clear the navbar
  console.log("clear navbar...");
}
// and place the cursor
var placeCursor = function() {
  //place the cursor in the input field
  console.log("place crusor in field..");
}









/*
IIFE-1:
1)load json data to cards
2)expose a public getter to read
the array of cars (e.g. getInventory)
getter function:

var log = ['test'];
var obj = {
  get latest () {
    if (log.length == 0) return undefined;
    return log[log.length - 1]
  }
}
console.log (obj.latest); // Will return "test".
or,

return {
    get: function() {
      return ***;
    }


IIFE-2: "activateEvents" contains the event handlers

var theCardCol = document.querySelector(".cardCol");
theCardCol.addEventListener("click");

function changeAttribute(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        alert("Hello " + clickedItem);
    }
    e.stopPropagation();
}

getElementById navbar field

onclick toggle the card background color
  and change the border width

IIFE-3: two functions:
    1)reset attributes with a)DOM element that was clicked on,
                            b) and a color name
    2)change attributes     a)DOM element that was clicked on,
                            b) and a color name

var toggleColor = function(event){
  card-div-1.classList.toggle("color-background");
  card-div-2.classList.toggle("color-background");
  card-div-3.classList.toggle("color-background");
}


// Card creation
    // add cards to JS variable
        // var cards = document.getElementsByClassName("card");
                [card, card, card]
    // add event listener

// Event listener
    // click on card
    // fn():

    // card[i].addEventListener("click", fn());

    // Callback function

    // fn():
        // change css
            // create classes that override .card (class) defaults
            // toggle overriding classes on clicked card
        // focus on text input
            // add attribute to give text input focus

*/















