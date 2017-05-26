// I can't believe JavaScript doesn't have a string reverse function :-)

(function(){
  window.onload = function() {

      let word = "madamimadam";
      let word2 = "racecar";
      let word3 = "engine";

      function reverse(str) {
        let strReversed = "";
        for (x = str.length - 1; x >= 0; x--)  // start a the end and plug in letters
          strReversed += str[x];
        return strReversed;
      }

      if (reverse(word) == word) {
        document.write("True, " + word + " is a Palendrome<br>");
      } else {
        document.write("False, " + word + " is not a Palendrome<br>");
      }

      if (reverse(word2) == word2) {
        document.write("True, " + word2 + " is a Palendrome<br>");
      } else {
        document.write("False, " + word2 + " is not a Palendrome<br>");
      }

      if (reverse(word3) == word3) {
        document.write("True, " + word3 + " is a Palendrome<br>");
      } else {
        document.write("False, " + word3 + " is not a Palendrome<br>");
      }

  }
})()
