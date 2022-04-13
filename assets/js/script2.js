//handles movies

//global variables
var movieTitleContainerEl = document.querySelector("#movie-title");
var movieButtonEl = document.querySelector("#movie");
var movieCont = document.getElementsByClassName('movieContainer')[0];
var movieTitle = movieCont.querySelector('h1');
var imgCont = document.getElementById("img-container");

//array to insert random letter for movie titles
const randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const randomYear = ["1980","1981","1982","1983","1984","1985","1986","1989","1989","1990","1991","1992","1993","1994","1995","1996","2000","2005","2010","2015"]


var getMovieTitle = function () {

  var randomValue = randomLetter[Math.floor(randomLetter.length * Math.random())];
var randomYValue = randomYear[Math.floor(randomYear.length * Math.random())];

  movieTitle.innerHTML = "";
  movieTitleUrl = "";


  var movieTitleUrl =
    "https://www.omdbapi.com/?type=movie&language=english&t=" + randomValue + "&y=" + randomYValue + "&apikey=ce1eea9d";
    console.log(randomValue);
    
  //make get request to url
  fetch(movieTitleUrl).then(function (response) {
    
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.Title);

    movieTitle.textContent = data.Title;
  //   if (!data.poster){
  //     imgCont.setAttribute("src", "./assets/256px-Loader.gif")
  // } else{
    imgCont.setAttribute("src", data.Poster);
  // }
  })
};

//event listener to button click
movieButtonEl.addEventListener("click", getMovieTitle, );