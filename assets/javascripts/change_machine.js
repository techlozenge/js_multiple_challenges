(function(){
  window.onload = function() {

// produces an array that indicates the number of 1, 5, 10, and 20 bills that the change machine should return. You want the change machine to return the smallest number of bills possible.

    let billsArray = [20, 10, 5, 1]; // this is our set to choose from
    let changeArray = [];            // this is the output we'll produce
    let amount = 147;                // this is the amount our customer needs

    console.log("Need change for $" + amount);

    // division and suppression of decimal lets us place the number of each bill into the changeArray
    // surpressing the fraction will return zero in the event of a fraction
    for (i = 0; i < billsArray.length; i++) {
        let amt = Math.floor(amount / billsArray[i]);   // divide and surpress decimal
        amount = amount - (amt * billsArray[i]);        // decrease amount by our twenties, tens, fives, ones
        changeArray.push(amt);
        console.log("index: " + i + " == " + changeArray[i] + " $" + billsArray[i] + " bill(s).");
    }
  }
})()
