import { menu } from "./load-page.js";

menu.id = "menu";
menu.style.display = "flex";
menu.style.flexDirection = "column";
menu.style.alignItems = "center"
const text_content = document.createElement("p");
text_content.innerText = "Menu";
menu.appendChild(text_content);

export { menu };