import { home } from "./load-page.js";
import food_image from "./food.jpg"

home.id = "home";
home.style.display = "flex";
home.style.flexDirection = "column";
home.style.alignItems = "center"
const text_content = document.createElement("p");
text_content.innerText = "Home";
home.appendChild(text_content);
const home_image = document.createElement("img");
home_image.src = food_image;
home_image.style.height = "400px";
home_image.style.width = "80%";
home.appendChild(home_image);

export { home };