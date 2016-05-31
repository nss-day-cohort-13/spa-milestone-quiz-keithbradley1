var carLot = (function(aug) {

  var inventory = [];

  aug.loadInventory = function(carLists) {
    // console.log(carLists );
    var carRequest = new XMLHttpRequest() ;
    // console.log("inventory function" );
    carRequest.addEventListener("load", function(){
    inventory = JSON.parse(this.responseText).cars ;
    // for (var i = 0; i < carData.length; i++) {
    //   newCar = new CarObject(carData[i]);
    //   inventory.push(newCar);
    //   console.log(newCar );
    // }
    // console.log(carData);
    carLists(inventory);
    });
    carRequest.open("GET", "inventory.json");
    carRequest.send();
  };


  function CarObject(item, id) {
    this.car = item;
    this.id = id;
  }

  aug.getInventory = function() {
  return inventory;
  };

  aug.editAvailable = function(editCar) {
    editCar.car.description = textInput.value;
    editCar.car.available = checkAvailable.checked.toString();
    carLists(inventory);
  }

  return aug;

})(carLot || {});









