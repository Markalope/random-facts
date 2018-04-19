/*
This contains functions for selecting random array items.
The array items construct a randomized sentence.
The maximum random number is the length of each array.
*/


//array of sentence beginings

var sentenceBeginning = [
    "I have always liked",
    "One of my favorite things is",
    "I really like",
    "I enjoy",
    "There's almost nothing better than",
    "I like",
    "You know what I like?",
    "Since you asked, I enjoy"
];

//array of random facts
var randomFact = [
    "Winter nights and 9,000 pounds o’ blankets",

    "Snow",

    "WKRP in Cincinatti",

    "Those secret agent briefcase ads in airline magazines",

    "The sound of big clocks ticking",

    "Romantic breakfasts, about 9:30",

    "Fog on water",

    "Avalanches, a safe distance from my person",

    "Jamaican accents",

    "The cult of Elvis",

    "Skin diving",

    "The word ‘kowtow’",

    "The super-extra furry part on a cat’s back legs to cushion pounces",

    "Boomerangs",

    "Topographic maps",

    "Trails visible - stretching off to infinity",

    '“Stairway to Heaven” - Led Zepplin',

    'People who wait all the way through “Top 200 Rock Songs Of All Time” countdowns when everybody knows #1 is “Stairway to Heaven” everytime',

    "Driving boats",

    '“Scandinavian Design” furniture',

    "The North Face gear - or maybe just the logo…",

    "Fred, Daphne, Shaggy & Scoob in the Mystery Machine",

    "Dreadlocked Rastamen",

    "The look of the ocean in Tahiti, Virgin Islands, etc."


];

//setting variables for array lengths
var x = (sentenceBeginning.length);
var y = (randomFact.length);


//Working random item selector code for sentence beginnings
function rand2(min, x) {
  var offset2 = min;
  var range2 = (x - min) + 1;

  var randomNumber2 = Math.floor( Math.random() * range2) + offset2;
  return randomNumber2;
}

randomNumber2 = rand2(0, sentenceBeginning.length - 1);

randomItem2 = sentenceBeginning[randomNumber2];


//Working random item selector code for facts
function rand(min, y) {
    var offset = min;
    var range = (y - min) + 1;
  
    var randomNumber = Math.floor( Math.random() * range) + offset;
    return randomNumber;
  }
  
  randomNumber = rand(0, randomFact.length - 1);
  
  randomItem = randomFact[randomNumber];
  

  //function for printing the final sentence to the browser
var printFact = function(){
    document.write("<p class=answer>" + randomItem2 + " "  + randomItem + "</p>");
    }
    printFact();