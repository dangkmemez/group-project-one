//handles movies

//global variables
var movieTitleContainerEl = document.querySelector("#movie-title");
var movieButtonEl = document.querySelector("#movie");

//array to insert random letter for movie titles
const randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var randomValue = randomLetter[Math.floor(randomLetter.length * Math.random())];
console.log(randomValue);



//click event to get movie title from OMBd
var buttonClickHandler = function(event) {


};


var getMovieTitle = function () {
  //"t" is the parameter per OMDb api//

  var movieTitleUrl =
    "https://www.omdbapi.com/?type=movie&t=" + randomValue + "&apikey=ce1eea9d";

  //make get request to url
  fetch(movieTitleUrl).then(function (response) {
    //request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayMovieTitle(data, title, poster);
      });
    }
  });
};

var displayMovieTitle = function (title) {
  //loop over movie titles
  for (var i = 0; i < randomLetter.length; i++) {}
};


//event listener to button click
movieButtonEl.addEventListener("click", buttonClickHandler);