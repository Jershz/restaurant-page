import chefImg from "./chef.jpeg";

function CreateHomePage(contentBody = document.querySelector("#content")) {
    
    const homeDiv = document.createElement("div");
    const homeImg = document.createElement("img");
    homeDiv.classList.add("home");
    homeDiv.textContent = "Home Page Loaded";
    homeImg.src = chefImg;
    homeDiv.appendChild(homeImg);
    contentBody.appendChild(homeDiv);
}

export { CreateHomePage };