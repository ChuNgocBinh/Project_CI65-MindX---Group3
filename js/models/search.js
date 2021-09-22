export default async function search(keyword) {
    if (! window.location.href.endsWith("allRecipes.html")) {
    window.location.href = "./allRecipes.html";
    }
    console.log(keyword);
    let targets = document.getElementsByClassName("searchTarget")
    console.log(targets.length)
}