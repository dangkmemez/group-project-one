//handles recipes
let recipeBtn = document.getElementsByClassName("recipe")[0];
let recipeCont = document.getElementsByClassName('recContainer')[0];
let list = recipeCont.querySelector('ol');
let title = recipeCont.querySelector('h1');
recipeBtn.addEventListener("click", getRandomRecipe);





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

        console.log(returnInstruct);
         //add title
         title.innerHTML = returnRec.title;
        for(let i = 0; i < returnInstruct.length; i++) {
            console.log(returnInstruct[i].step, returnInstruct[i].number);
            //add steps
            let step = document.createElement('li');
            step.classList.add("step");
            step.innerHTML = returnInstruct[i].step;


            list.append(step);

        }
      })
    } 