//handles movies

//global variables
var movieTitleContainerEl = document.querySelector("#movie-title");
var movieButtonEl = document.querySelector("#movie");

//array to insert random letter for movie titles
const randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]



//click event to get movie title from OMBd
var buttonClickHandler = function(event) {


};


var getMovieTitle = function (t) {
  //"t" is the parameter per OMDb api//

  var movieTitleUrl =
    "https://www.omdbapi.com/?type=movie&t=" + t + "&apikey=ce1eea9d";

  //make get request to url
  fetch(movieTitleUrl).then(function (response) {
    //request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        displayMovieTitle(data, t);
      });
    }
  });
};

var displayMovieTitle = function (title) {
  //loop over movie titles
  for (var i = 0; i < t.length; i++) {}
};


//event listener to button click
movieButtonEl.addEventListener("click", buttonClickHandler);