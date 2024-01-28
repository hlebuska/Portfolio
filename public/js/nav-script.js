const homeButton = document.getElementById("nav-home");
const projectsButton = document.getElementById("nav-projects");
const aboutButton = document.getElementById("nav-about");
const contactsButton = document.getElementById("nav-contacts");

homeButton.addEventListener('click', function (event){
    homeButton.classList.add("selected");
    projectsButton.classList.remove("selected");
    aboutButton.classList.remove("selected");
    contactsButton.classList.remove("selected");
});

projectsButton.addEventListener('click', function (event){
    homeButton.classList.remove("selected");
    projectsButton.classList.add("selected");
    aboutButton.classList.remove("selected");
    contactsButton.classList.remove("selected");
});

aboutButton.addEventListener('click', function (event){
    homeButton.classList.remove("selected");
    projectsButton.classList.remove("selected");
    aboutButton.classList.add("selected");
    contactsButton.classList.remove("selected");
});

contactsButton.addEventListener('click', function (event){
    homeButton.classList.remove("selected");
    projectsButton.classList.remove("selected");
    aboutButton.classList.remove("selected");
    contactsButton.classList.add("selected");
});