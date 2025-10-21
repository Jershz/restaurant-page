import "./styles.css";
import { CreateHomePage } from "./home.js";
import { CreateMenuPage } from "./menu.js";
import { CreateAboutPage } from "./about.js";

function InitializeNavHeader() {
    const contentBody = document.querySelector("#content");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");

    function initializePage() {
        clearContentBody();
        bindEvents();
        CreateHomePage(contentBody);
        updateNavBarStyle(homeButton);
    }
    function bindEvents() {
        homeButton.addEventListener("click", homeButtonClick);
        menuButton.addEventListener("click", menuButtonClick);
        aboutButton.addEventListener("click", aboutButtonClick);
    }
    function homeButtonClick() {
        clearContentBody();
        CreateHomePage(contentBody);
        updateNavBarStyle(homeButton);
    }
    function menuButtonClick() {
        clearContentBody();
        CreateMenuPage(contentBody);
        updateNavBarStyle(menuButton);
    }
    function aboutButtonClick() {
        clearContentBody();
        CreateAboutPage(contentBody);
        updateNavBarStyle(aboutButton);
    }
    function clearContentBody() {
        contentBody.textContent = "";
    }
    function updateNavBarStyle(clickedButton) {
        homeButton.style.textDecoration = "";
        menuButton.style.textDecoration = "";       
        aboutButton.style.textDecoration = "";        
        clickedButton.style.textDecoration = "underline";
    }

    initializePage();
}

InitializeNavHeader();
