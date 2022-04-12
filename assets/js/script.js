//Global var
var recipeButtonEl = document.querySelector("#recipe-button")
var recipeEl = document.querySelector("recipe")

var buttonClickHandler = function (event) {
   
};
//function to fetch recipe API

var requestUrl ="https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=96a4968f21f744f9aac6e447181e2bf6" 

   fetch(requestUrl).then(function (response) {
       if (response.ok) {
           response.json().then(function (data) {
               console.log(data);
               displayRecipe(data)
               });
           
       } else {
           alert("Error: " + response.statusText);
           
       };
   });
  var displayRecipe = function (title) {
      for (var i=0; i < data.length; i++) {}

  };
function data() {
    
};
  
       
   

//event listener for recipe button
recipeButtonEl.addEventListener("click", buttonClickHandler);