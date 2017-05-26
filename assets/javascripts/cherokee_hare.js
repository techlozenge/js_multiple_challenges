(function(){
  window.onload = function() {

    let startingPopulation = 100; // beginning population
    let birthRate = 1.25;         // percentage of growth
    let numberOfWeeks = 4;        // duration
    
    for (i = 1; i <= numberOfWeeks; i++) {
      startingPopulation = startingPopulation * birthRate;
      let x = startingPopulation.toFixed(2) // this simply saves our current sum at 2 decimal places
      document.write("<b>Week " + i + ": " + x + "</b><br>");
    }

  }
})()
