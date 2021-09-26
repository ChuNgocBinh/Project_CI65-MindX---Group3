export function search(keyword) {
    localStorage.setItem("searchKeyword", keyword);
    if (! window.location.href.endsWith("allRecipes.html")) {
        window.location.href = "./allRecipes.html";
    }
    else {
        searchOnPage();
    }
}
function removeAccents(str) {
    return str.normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  }  
export function searchOnPage() {
    console.log("searching on page")
    let keyword = localStorage.getItem("searchKeyword");
    console.log("keyword: " + keyword);
    let targets = document.getElementsByClassName("searchTarget");
    if (!(keyword == "" || keyword === null)){
        keyword = keyword.toLowerCase()
        for(let target of targets) {
            let title = target.querySelector(".card-info h3").innerHTML.toLowerCase();
            let author = target.querySelector(".card-info .author").innerHTML.toLowerCase().replace('người viết: ','');
            console.log(removeAccents(title).includes(removeAccents(keyword)), removeAccents(author).includes(removeAccents(keyword)));
            if (removeAccents(title).includes(removeAccents(keyword))|| removeAccents(author).includes(removeAccents(keyword))) {
                target.classList.remove("hidden");
            }
            else {
                target.classList.add("hidden");
            }
        }
        localStorage.removeItem("searchKeyword");
    }
    else {
        for(let target of targets) {
            target.classList.remove("hidden");
        }
    }
}