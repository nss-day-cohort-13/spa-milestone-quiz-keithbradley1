var carRequest = new XMLHttpRequest() ;

function carLists() {
  var carData = JSON.parse(this.responseText).cars ;
  for (var i = 0; i < carData.length; i++) {
    // console.log( carData[i] ) ;
    var callData = "<h2>" + "<p>" + "Cars" + "</p>" + carData[i].name + "</h2>";

    var carType = carData[i].types ;
    console.log(carData[i].types );

carRequest.addEventListener("load", carLists);
carRequest.open("GET", "inventory.json");
carRequest.send();