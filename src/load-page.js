export const home = document.createElement("div");
export const menu = document.createElement("div");
export const contact = document.createElement("div");

export const loadPage = () => {
    const content = document.getElementById("content");
    content.style.height = "100rem";
    content.style.width = "50rem";
    content.style.backgroundColor = "beige";
    content.style.border = "2px solid black"
    content.style.borderRadius = "5px";
    content.style.padding = "2rem";

    content.appendChild(home);
};