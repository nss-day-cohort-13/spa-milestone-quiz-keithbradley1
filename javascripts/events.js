var carLot = (function(aug) {
  var makeAvailable;
  var domInsertion = document.getElementById('car');
  var carLists;
  aug.carLists = function(carData) {
    // var carData = carLot.getInventory();
    console.log(carData );
    var domData = "";
    for (var i = 0; i < carData.length; i++) {
      domData += `<div id="${car.id}" class='col-sm-4'> <dl class='card' style='border-color: ${carData[i].color}'>` +
      "<h4>" + carData[i].make + " "
       + carData[i].model + "</h4>" +
      "<dt>" + "year: " + carData[i].year + "</dt>" +
      "<dt>" + "$" + carData[i].price + "</dt>" +
      "<dt>" + "color: " + carData[i].color + "</dt>" +
      "<dt>" + "purchased: " + carData[i].purchased + "</dt>" +
      "<dt>" + carData[i].description + "</dt>" +
      "</dl> </div>";
    };
    domInsertion.innerHTML = domData;
    if (car.item === "false") {
          makeAvailable += `<dd class="available">Available</dd>`;
          } else {
            makeAvailable += `<dd class="backorder">Out of stock</dd>`;
          }
      makeAvailable +=    `</dl>` +
                    `</div>` +
                    `<div class="column col-lg-1 col-md-1 col-sm-1"></div>`;
  aug.makeAvailable = function () {
  var selectedDiv = document.getElementsByClassName("card");
    selectedDiv[b].addEventListener("click", carLot.changeAttributes);
      if (carPurchased === false) {
        carPurchased = true;
        var purchaseCar = document.getElementById(this.id);
        Carlot.carFocus(carPurchased);
      }
      else {
        return;
      };
    };
    };

  carLot.loadInventory(aug.carLists);
  return aug;
})(carLot || {});








