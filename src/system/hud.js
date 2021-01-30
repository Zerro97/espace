export default class Hud {
  constructor() {
    this.player = null;
  }

  setup() {
    this.player = entities.find((entity) => {
      return entity.name === "player";
    });

    this.notify()
  }

  notify() {
    let heartHTML = "";
    for (let i = 0; i < this.player.health.cur; i++) {
      heartHTML += "<img src=\"/assets/heart.png\" class=\"heart\"></div>"
    }

    let hearts = document.getElementById("hearts");
    hearts.innerHTML = heartHTML;

    this.progress();
  }


  progress() {
    let i = 0;
    if (i == 0) {
      i = 1;
      let elem1 = document.getElementById("bulletProgress");
      let elem2 = document.getElementById("skillProgress");
      let width = 0;
      let id = setInterval(frame, 10);

      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem1.style.width = width + "%";
          elem2.style.width = width + "%";
        }
      }
    }
  }
}