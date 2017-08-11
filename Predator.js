var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(event.target.responseText);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        showCarnivores(carnivores);
      });

      loader.open("GET", "carnivores.json");
      loader.send();

    },

  loadHerbivores: function (callbackToInvoke) {
    var loader2 = new XMLHttpRequest();

      loader2.addEventListener("load", function () {
        //herbivores = JSON.parse(this.responseText);
        herbivores = JSON.parse(event.target.responseText);
        showHerbivores(herbivores);
      });

      loader2.open("GET", "herbivores.json");
      loader2.send();
    },
  }
})(Predator || {});

//alternative:
/*var Predator = (function (loadCarnivores) {
  var carnivores = [];

    var loader = new XMLHttpRequest();
    loader.addEventListener("load", loaderComplete);

    function loaderComplete(event) {
      let carnivores = JSON.parse(this.responseText);
      showCarnivores(carnivores);
    }

    loader.open('GET', "carnivores.json")
    loader.send();

  return loadCarnivores;
})(Predator || {});


var Predator = (function (loadHerbivores) {
  var herbivores = [];

      var loader2 = new XMLHttpRequest();

      loader2.addEventListener("load", loader2Complete);
      //loader2.addEventListener("error", loader2Failed);

      function loader2Complete(event) {
          let herbivores = JSON.parse(event.target.responseText);
          console.log("herbivores: ", herbivores);
          showHerbivores(herbivores);
        }

      //function loader2Failed(event) {
         // console.log("dataFailed", event);
          //}

      loader2.open('GET', "herbivores.json");
      loader2.send();

 return loadHerbivores;
})(Predator || {});*/



