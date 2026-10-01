import "./styles.css";
import { loadPage } from "./load-page.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

loadPage();

const home_btn = document.getElementById("home-btn");
const menu_btn = document.getElementById("menu-btn");
const contact_btn = document.getElementById("contact-btn");

home_btn.addEventListener("click", () => {
    if (content.firstChild.id != "home") {
        content.removeChild(content.firstChild);
        content.appendChild(home);
    }
});

menu_btn.addEventListener("click", () => {
    if (content.firstChild.id != "menu") {
        content.removeChild(content.firstChild);
        content.appendChild(menu);
    }
});

contact_btn.addEventListener("click", () => {
    if (content.firstChild.id != "contact") {
        content.removeChild(content.firstChild);
        content.appendChild(contact);
    }
});