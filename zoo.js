function Animal () {
    this.name = null
}

function Panthera () {
  this.genusName = 'Panthera'
}
Panthera.prototype = new Animal

function Canis () {
  this.genusName = 'Canis'
}
Canis.prototype = new Animal

function Tigris () {
  this.speciesName = 'Tiger'
}
Tigris.prototype = new Animal

function Leo () {
  this.speciesName = 'Lion'
}
Leo.prototype = new Animal

function Latrans () {
  this.speciesName = 'Coyote'
}
Latrans.prototype = new Canis()

function Dirus () {
  this.speciesName = 'Dire Wolf'
}
Dirus.prototype = new Canis()

var direwolf = new Dirus('Ghost')
console.log("name", direwolf.name)
console.log("genus", direwolf.genusName)
console.log("species", direwolf.speciesName)