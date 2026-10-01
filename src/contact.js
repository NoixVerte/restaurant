import { contact } from "./load-page.js";

contact.id = "contact";
contact.style.display = "flex";
contact.style.flexDirection = "column";
contact.style.alignItems = "center"
const text_content = document.createElement("p");
text_content.innerText = "Contact";
contact.appendChild(text_content);

export { contact };