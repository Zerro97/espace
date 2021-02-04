import SimpleE from "./simpleE";
import RandomE from "./randomE";
import SmallE from "./smallE";
import ReflectE from "./reflectE";
import GunnerE from "./gunnerE";
import BigE from "./bigE";
import StraightE from "./straightE";

/**
 * Contains information about what enemies, how many waves, how many stages, how many acts are there.
 * Used in spawn, wave system
 * Note that I didn't use entity class for this
 */
export default function MapData() {
    let mapData = {
        "name": "mapData",
        // Indicates whether enemy have spawned
        "spawned": false,
        "curAct": 0,
        "curStage": 0,
        "curWave": 0,
        // Act
        "0": {
            // Stage
            "0": {
                "theme": "simple",
                "map": {
                    "size": { "width": 2000, "height": 2000 }
                },
                "reward": ["Item1", "Item2"],
                "last": 1,
                "0": {
                    //"enemies": [new GunnerE(), new GunnerE(), new GunnerE()]
                    "enemies": [new StraightE(), new StraightE(), new RandomE(), new GunnerE(), new GunnerE(), new GunnerE(), new GunnerE(), new BigE(), new SmallE(), new ReflectE(), new ReflectE(), new RandomE(), new RandomE(), new RandomE(), new RandomE(), new SimpleE()]
                },
                "1": {
                    "enemies": [new SimpleE(), new SimpleE()]
                },
            },
            "1": {
                "theme": "simple",
                "map": {
                    "size": { "width": 2000, "height": 2000 }
                },
                "reward": ["Item1", "Item2"],
                "last": 3,
                "0": {
                    "enemies": [new StraightE(), new StraightE(), new StraightE()]
                },
                "1": {
                    "enemies": [new SimpleE(), new SimpleE()]
                },
                "2": {
                    "enemies": [new StraightE(), new StraightE()]
                },
                "3": {
                    "enemies": [new StraightE(), new StraightE(), new StraightE(), new StraightE(), new SimpleE(), new SimpleE(), new SimpleE(), new SimpleE()]
                }
            }
        }
    }

    return mapData;
}