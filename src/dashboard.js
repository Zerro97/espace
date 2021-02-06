import './dashboard.scss';
import '../assets/logo.png';
import Draggable from 'Draggable';

let currentPage = "";
let pages = document.getElementsByClassName("dashboard__main");
let links = document.getElementsByClassName("dashboard__menuText");

for (let link of links) {
    link.addEventListener("click", () => {
        for (let link of links) {
            link.className = link.className.replace(/\bactiveLink\b/g, "");
        }

        for (let page of pages) {
            page.className = page.className.replace(/\bshow\b/g, "");
        }

        link.classList.add("activeLink");
        currentPage = link.getAttribute("name");
        document.getElementById(currentPage).classList.add("show");

        if (currentPage === "equipmentPage") {
            setUpEquipment();
        } else if(currentPage === "mapPage") {
            setUpMap();
        }
    });
}

function setUpEquipment() {
    let boxes = "";
    for (let i = 0; i < 56; i++) {
        boxes += `<div class="equip__box"></div>`;
    }

    let equipments = document.getElementById("equip__container");
    console.log(equipments);
    equipments.innerHTML = boxes;
}

function setUpMap() {
    let map = document.getElementById("mapContent");
    let options = {
        grid: 10,
    };
    new Draggable(map, options);

    let stages = document.getElementsByClassName("map__stage");
    for(let stage of stages) {
        stage.addEventListener("mouseover", () => {
            stage.innerHTML = `<div class="map__stageInfo"></div>`;
        })
    }
    //console.log(map);
    //console.log(new Draggable(map));
}


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