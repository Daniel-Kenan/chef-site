"use strict"

const search = document.getElementById("search"),
search_query = document.getElementById("search-query");

let i = 0 ;

search.addEventListener("click",()=>{
    if(i == 0){
        search_query.style.display = "block";--i;
        window.scrollTo(0, 0);
        return
    }
    search_query.style.display = "none";++i;
})