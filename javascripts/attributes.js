var carLot = (function(aug) {

//when card appearance is clicked card background color and border width change
  var carAvailable;
  var carList;
  var carInventory;

  aug.changeAttributes = function() {
    textInput.removeAttribute("disabled", "true");
    textInput.focus("true");
    checkPurchased.removeAttribute("disabled", "true");
    editElem.classList.add("card-focus");
    var descList = editElem.querySelector("dl");
    descList.removeAttribute("style");
    descList.classList.add("card-focus-border");
    labelPurchased.classList.remove("disabled");
    currentEdit = editElem;
    currentList = descList;
    carlot.cardEdit();
  }

  aug.cardFocus = function (editElem) {
    textInput.removeAttribute("disabled", "true");
    textInput.focus("true");
    checkPurchased.removeAttribute("disabled", "true");
    editElem.classList.add("card-focus");
    var descList = editElem.querySelector("dl");
    descList.removeAttribute("style");
    descList.classList.add("card-focus-border");
    labelPurchased.classList.remove("disabled");
    currentEdit = editElem;
    currentList = descList;
    carlot.cardEdit();
  };

  aug.cardFocusOff = function (event) {
    event.preventDefault();
    Carlot.editInventory(currentInventory);
    currentEdit.classList.remove("card-focus");
    currentList.classList.remove("card-focus-border");
    textInput.removeAttribute("disabled", "false");
    textInput.setAttribute("disabled", "true");
    textInput.value = "";
    checkPurchased.setAttribute("disabled", "true")
    checkPurchased.checked = false;
    labelPurchased.classList.add("disabled");
    editMode = false;
  };

  return aug;

}(carLot || {}));