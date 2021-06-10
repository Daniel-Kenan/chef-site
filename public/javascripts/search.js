"use strict"

const search = document.getElementById("search"),
    search_query = document.getElementById("search-query");

let i = 0;

search.addEventListener("click", () => {
    if (i == 0) {
        search_query.style.display = "block";
        --i;
        window.scrollTo(0, 0);
        return
    }
    search_query.style.display = "none";
    ++i;
})
search_query.addEventListener('keypress', (e) => {
    try {
        let component = _(recipes.indexOf(search_query.value));
        // console.log(component)
        document.getElementById(component).scrollIntoView();

    } catch {
        null
    }
})
var recipes = [
    "Chantilly cream",
    "Almond-flour-crepes",
    "Diplomat pudding",
    "Marrow flower fritters",
    "Turnips au gratin"
];
// jquery
function _(val) {
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
$(function () {
    $("#search-query").autocomplete({
        source: recipes
    });
});


{
    /* <div class="ui-widget">
      <label for="tags">Tags: </label>
      <input id="tags">
    </div> */
}