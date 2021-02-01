import Movement from "./system/movement";
import Collision from "./system/collision";
import Render from "./system/render";
import Status from "./system/status";
import Spawn from "./system/spawn";
import Despawn from "./system/despawn";
import Input from "./system/input"
import Follow from "./system/follow"
import Hud from "./system/hud"
import Wave from "./system/wave";
import Timer from "./system/timer";
import Knockback from "./system/knockback";

export default class Game {
    constructor() {
        // Sytems to update entities
        this.input = new Input();
        this.status = new Status();
        this.follow = new Follow();
        this.spawn = new Spawn();
        this.despawn = new Despawn();
        this.movement = new Movement();
        this.knockback = new Knockback();
        this.render = new Render();
        this.hud = new Hud();
        this.wave = new Wave();
        this.collision = new Collision();
        this.timer = new Timer();

        // Order of systems are critical
        this.systems = [
            this.spawn,
            this.despawn,
            this.timer,
            this.status,
            this.follow,
            this.collision,
            this.knockback,
            this.movement,
            this.hud,
            this.render,
            this.wave
        ];
    }

    // GAME LOOP
    update() {
        this.systems.forEach((system) => {
            system.update();
        })
    }

    // INITIAL SET UP (called once before update function starts)
    setup() {
        // Spawn should be first as it creates entities, which is referred by other systems after
        this.spawn.setup();
        this.input.setup();
        this.follow.setup();
        this.movement.setup();
        this.render.setup();
        this.hud.setup();
        this.wave.setup();
    }
}