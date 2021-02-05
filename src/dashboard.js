import './dashboard.scss';
import '../assets/logo.png';

let statusPage = document.getElementById("status");
let equipmentPage = document.getElementById("equipment");
let mapPage = document.getElementById("map");

let pages = document.getElementsByClassName("dashboard__main");
let links = document.getElementsByClassName("dashboard__menuText");

links.forEach((link) => {
    link.addEventListener("click", () => {
        statusPage.style.display = "none";
        equipmentPage.style.display = "flex";
        mapPage.style.display = "none";
    });
})


// statusLink.addEventListener("click", () => {
//     statusLink.style.color = "#5a7edb";

//     statusPage.style.display = "flex";
//     equipmentPage.style.display = "none";
//     mapPage.style.display = "none";
// });

// equipmentLink.addEventListener("click", () => {
//     statusPage.style.display = "none";
//     equipmentPage.style.display = "flex";
//     mapPage.style.display = "none";
// });

// mapLink.addEventListener("click", () => {
//     statusPage.style.display = "none";
//     equipmentPage.style.display = "none";
//     mapPage.style.display = "flex";
// })