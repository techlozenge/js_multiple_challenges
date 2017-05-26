(function(){

      window.onload = function() {

            // create a variable called 'word' which is the hangman word
            // create a second variable called 'letter' which is the letter that the player guessed
            // Print out "Yeah, the letter 'x' exists 'y' times in my word" if the letter exists
            // If the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."

            let myword = "engine";

            let myguess = prompt("Guess a letter and I'll tell you if its in the word");

            let count = (myword.split(myguess).length -1);  // this counts the splits for the whole word/string

            if (count > 0) {
                document.write("<b>Yeah, the letter " + myguess + " exists " + count + " times in my word</b>");
            } else {
                document.write("Nope, that letter doesn't exist in my word.");
            }
      }
})()
