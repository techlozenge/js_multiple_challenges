(function(){

  window.onload = function() {

    let mountains = [1000, 3000, 2500, 10000, 21000, 2000, 5000, 10500, 4000];

    // this takes advantage of the "Math" library method's capability to find the highest number in the array
    var largest = Math.max.apply(Math, mountains);

    prompt("The highest mountain is " + largest);
  }

})()
