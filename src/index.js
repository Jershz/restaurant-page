import "./styles.css";
import { CreateHomePage } from "./home.js";
import { CreateMenuPage } from "./menu.js";
import { CreateAboutPage } from "./about.js";

function InitializeNavHeader() {
    const contentBody = document.querySelector("#content");
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");

    function bindEvents() {
        homeButton.addEventListener("click", homeButtonClick);
        menuButton.addEventListener("click", menuButtonClick);
        aboutButton.addEventListener("click", aboutButtonClick);
    }
    function homeButtonClick() {
        clearContentBody();
        CreateHomePage(contentBody);
    }
    function menuButtonClick() {
        clearContentBody();
        CreateMenuPage(contentBody);
    }
    function aboutButtonClick() {
        clearContentBody();
        CreateAboutPage(contentBody);
    }
    function clearContentBody() {
        contentBody.textContent = "";
    }

    bindEvents();
}

InitializeNavHeader();