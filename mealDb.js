
function connect(){

 var searchTerm = document.getElementById("searchBox").value ; 

 var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}` ;
 console.log (url);

 fetch (url)
 .then (res => res.json())
 .then (data => display(data))

}

function display (data){

  //console.log (data);
  var allMeals = data.meals ;
  console.log(allMeals);

  var oldContent = document.getElementById("container");
  oldContent.textContent = ""; 

  for (var i=0; i<allMeals.length; i++){

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `Meal Name: ${allMeals[i].strMeal}  <br>
                        Meal ID: ${allMeals[i].idMeal}<br>
                        <img src="${allMeals[i].strMealThumb}"> <br> <br>
                        Cooking Instructions: <p>
                        ${allMeals[i].strInstructions}  </p> <br>
                        ` 
  

     newDiv.classList.add("mealStyle");
     oldContent.appendChild(newDiv);
  }

}