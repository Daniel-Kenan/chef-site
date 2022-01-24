"use strict"

const search = document.getElementById("search"),
    search_query = document.getElementById("search-query");


search_query.addEventListener('keypress', (e) => {
    try {
        let component = fetchRecipeId(recipes.indexOf(search_query.value));
        // console.log(component)
        document.getElementById(component).scrollIntoView();

    } catch {
        null
    }
})

// jquery
function fetchRecipeId(val) {
    switch (val) {
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four"
    }
}



{
    /* <div class="ui-widget">
      <label for="tags">Tags: </label>
      <input id="tags">
    </div> */
}