//the word we are going to use for the game is going to be whatever pops into: var wordBank
//then I'm going to do a random number gen for picking something from the wordbank array

var currGameWord = wordBank

//Next I'm declaring the wordBank array. I was thinking of trying to make objects where 
//I call out the key for the blank vs the key for the letter, but I would get some very
//confusing code later when it came to display each letter. Let's just stick with a nested
//array for now. Arrays within arrays... Carl Sagan-y. 

//I'm hoping the arrays get the numbering and not the strings. There's probably a way to specify either, 
//but I don't want to find out right now. Yuck.

var wordBank = [


["H","E","L","L","O"],
["S","P","A","C","E"],
["B","O","Y"],
["C","H","A","O","S"],
["M","O","O","N"],
["D","U","S","T"], // just remembered to put commas between array items


]

//this generates the random number. I'm using a minus one instead of the plus
// because the wordbank length will always be one more than the highest array position 
//number

var randomNmbr = Math.floor((Math.random()*(wordBank.length-1)); 




// making a new array based on the length of this word. Not sure how to do it. Check here:
// http://stackoverflow.com/questions/3369583/create-array-based-on-variable-value-with-javascript

//I also got reminded of arguments here. I totally forgot what this.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from












//clarify what's going on in the console
//console.log("This is the javascript file");

//Declare Global Variables
//	var wordBank = ["One", "Two", "Three", "Four", "Five"]
//	var currentWord;
//	var gameState = {
//		player : {
//			score: {
//				wins :0,
//				losses :0,
//			},
//			guessesLeft : 12,
//			guessesMade : 0,
//			blanksLeft: 3,
//		}
//	};
// When the user presses a key, it will run the following function...
//      document.onkeyup = function(event) {

//        // Determine which key was pressed
//        var currentGuess = event.key;

//        // Sets the computerGuess variable equal to a random choice from the computerChoice array.




//      // function for picking word from wordbank //

//            var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
