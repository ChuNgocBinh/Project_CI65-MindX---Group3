export function search(keyword) {
    localStorage.setItem("searchKeyword", keyword);
    if (! window.location.href.endsWith("allRecipes.html")) {
        window.location.href = "./allRecipes.html";
    }
    else {
        searchOnPage();
    }
}

export function searchOnPage() {
    console.log("searching on page")
    let keyword = localStorage.getItem("searchKeyword");
    console.log("keyword: "+keyword);
    if (!(keyword == "" || keyword === null)){
        let targets = document.getElementsByClassName("searchTarget");
        for(let target of targets) {
            let title = target.querySelector(".card-info h3").innerHTML;
            let author = target.querySelector(".card-comment p").innerHTML;
            console.log(title.includes(keyword), author.includes(keyword));
            if (!(title.includes(keyword)|| author.includes(keyword))) {
                target.classList.add("hidden");
            }
        }
    }
}