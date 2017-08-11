console.log("blal blah blah");

function showCarnivores (carnivores) {
  console.log("Predators: ", carnivores);
  let predators = document.getElementById("animals-carnivores");
  
  /*let predData = " ";

	for(item in carnivores){
		let predItem = carnivores[item];
		predData += "<div>";
		predData += "<h2>" + predItem.animal + "</h2>";
		predData += "</div>";
	}

	predators.innerHTML += predData;*/

	for (let i = 0; i < carnivores.length; i++) {
	predators.innerHTML += `<div class="preds" id="[i]">
						<h3>${carnivores[i].animal}</h3>
						</div>`
	}

}

function showHerbivores (herbivores) {
  let prey = document.getElementById("animals-herbivores");

  	for (let j = 0; j < herbivores.length; j++) {
	prey.innerHTML += `<div class="prey" id="[j]">
						<h3>${herbivores[j].animal}</h3>
						</div>`

  }
}


Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);

