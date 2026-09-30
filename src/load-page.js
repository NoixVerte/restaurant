const home = document.createElement("div");
const menu = document.createElement("div");
const contact = document.createElement("div");

const loadPage = () => {
    const content = document.getElementById("content");

    const content_template = document.createElement("div");
    content_template.style.height = "100%";
    content_template.style.width = "100%";
    content_template.style.backgroundColor = "beige";
    content_template.style.border = "2px solid black"
    content_template.style.borderRadius = "5px";
    content_template.style.padding = "2rem";
    
    home.style.cssText = content_template.style.cssText;
    home.id = "home";
    home.innerText = "Home";
    
    menu.style.cssText = content_template.style.cssText;
    menu.id = "menu";
    menu.innerText = "Menu";
    
    contact.style.cssText = content_template.style.cssText;
    contact.id = "contact";
    contact.innerText = "Contact";

    content.appendChild(home);
};

export {home, menu, contact, loadPage};