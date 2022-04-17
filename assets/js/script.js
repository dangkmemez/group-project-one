//global variables
var saveHistoryEl = document.getElementById("save-history");

let recipeBtn = document.getElementsByClassName("recipe")[0];
let recipeCont = document.getElementsByClassName('recContainer')[0];
let list = recipeCont.querySelector('ol');
let title = recipeCont.querySelector('h1');
let ingredientList = recipeCont.querySelector('ul');

//movie var's global
var movieTitleContainerEl = document.querySelector("#movie-title");
var movieButtonEl = document.querySelector("#movie");
var movieCont = document.getElementsByClassName('movieContainer')[0];
var movieTitle = movieCont.querySelector('h1');
var imgCont = document.getElementById("img-container");
var saveBtnEl = document.getElementById('save-button')

//array to insert random letter for movie titles
const randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const randomYear = ["1980","1981","1982","1983","1984","1985","1986","1989","1989","1990","1991","1992","1993","1994","1995","1996","2000","2005","2010","2015"]
//local storage empty array 
var comboSave = [];


function getRandomRecipe(e) {
    list.innerHTML = "";
    title.innerHTML = "";
    let api = "96a4968f21f744f9aac6e447181e2bf6"
    var requestUrl = `https://api.spoonacular.com/recipes/random?number=1&apiKey=${api}`;
    console.log(requestUrl.textContent)
    fetch(requestUrl)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        // Using console.log to examine the data
        console.log(data);
        let returnRec = data.recipes[0];
        let returnInstruct = returnRec.analyzedInstructions[0].steps;
        let returnIngr = returnRec.extendedIngredients[0].id;

        // console.log(returnIngr);
        // for(let i = 0; i < returnIngr.length; i++) {
        //     console.log(returnIngr[i].id, returnIngr[i].number);
        //     //add steps
        //     let ingredients = document.createElement('li');
        //     ingredients.classList.add("ingredients");
        //     ingredients.innerHTML = returnIngr[i].id; 
          

        console.log(returnInstruct);
         //add title
         title.innerHTML = returnRec.title;
        for(let i = 0; i < returnInstruct.length; i++) {
            console.log(returnInstruct[i].step, returnInstruct[i].number);
            console.log(title.innerHTML);
            //add steps
            let step = document.createElement('li');
            step.classList.add("step");
            step.innerHTML = returnInstruct[i].step;

          

            // ingredientList.append(ingredients);
            list.append(step);
            

        }
      })
    };

    recipeBtn.addEventListener("click", getRandomRecipe);

//start JS2 logic, call to movie API
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
      //}
      })
    };
    
    //local storage function
    function saveCombo() {
    console.log(movieTitle.textContent);
    console.log(recipeTitle.textContent);

    var savedRecipe = recipeTitle.textContent
    var savedMovie = movieTitle.textContent

    comboSave.push(savedRecipe, savedMovie)

    localStorage.setItem("newCombo", JSON.stringify(comboSave))
    };

    function getTitles() {
      if (JSON.parse(localStorage.getItem("newCombo"))) {
        saveHistoryEl.textContent = (JSON.parse(localStorage.getItem("newCombo")))
      }
    }
    
    
    // event listener for save combo
    saveBtnEl.addEventListener('click', saveCombo);
    
    
    //event listener to button click
    movieButtonEl.addEventListener("click", getMovieTitle, );

    getTitles();
    
  