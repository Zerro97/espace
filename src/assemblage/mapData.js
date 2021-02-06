import SimpleE from "./enemies/simpleE";
import RandomE from "./enemies/randomE";
import SmallE from "./enemies/smallE";
import ReflectE from "./enemies/reflectE";
import GunnerE from "./enemies/gunnerE";
import BigE from "./enemies/bigE";
import StraightE from "./enemies/straightE";
import BigOneB from "./enemies/bigOneB";

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
                "theme": "none",
                "map": {
                    "size": { "width": 2000, "height": 2000 }
                },
                "reward": ["Item1", "Item2"],
                "last": 3,
                "0": {
                    "enemies": [new SimpleE(), new SimpleE(), new SimpleE(), new SimpleE()]
                },
                "1": {
                    "enemies": [new SmallE(), new SmallE(), new SmallE(), new SmallE()]
                },
                "2": {
                    "enemies": [new BigE(), new BigE(), new SimpleE(), new SimpleE(), new SimpleE()]
                },
                "3": {
                    "enemies": [new BigE(), new BigE(), new BigE(), new SmallE(),  new SmallE(), new SmallE()]
                },
            },
            "1": {
                "theme": "fast and furious",
                "map": {
                    "size": { "width": 1000, "height": 1000 }
                },
                "reward": ["Item1", "Item2"],
                "last": 3,
                "0": {
                    "enemies": [new StraightE(), new StraightE(), new StraightE(), new StraightE()]
                },
                "1": {
                    "enemies": [new SmallE(), new SmallE(), new SmallE(), new SmallE()]
                },
                "2": {
                    "enemies": [new ReflectE(), new ReflectE(), new ReflectE(), new ReflectE()]
                },
                "3": {
                    "enemies": [new StraightE(), new StraightE(), new SmallE(), new SmallE(), new ReflectE(), new ReflectE(), ]
                }
            },
            "2": {
                "theme": "gun",
                "map": {
                    "size": { "width": 1000, "height": 1000 }
                },
                "reward": ["Item1", "Item2"],
                "last": 3,
                "0": {
                    "enemies": [new GunnerE(), new SimpleE(), new SimpleE(), new SimpleE()]
                },
                "1": {
                    "enemies": [new GunnerE(), new GunnerE(), new SimpleE()]
                },
                "2": {
                    "enemies": [new GunnerE(), new GunnerE(), new SimpleE(), new SimpleE()]
                },
                "3": {
                    "enemies": [new GunnerE(), new GunnerE(), new GunnerE(), new SmallE(), new SmallE(), new SimpleE(), new SimpleE()]
                }
            },
            "3": {
                "theme": "round",
                "map": {
                    "size": { "width": 2000, "height": 2000 }
                },
                "reward": ["Item1", "Item2"],
                "last": 2,
                "0": {
                    "enemies": [new GunnerE(), new SimpleE(), new SmallE(), new StraightE(), new BigE()]
                },
                "1": {
                    "enemies": [new GunnerE(), new GunnerE(), new SimpleE(), new SmallE(), new StraightE(), new BigE()]
                },
                "2": {
                    "enemies": [new BigOneB()]
                },
            }
        }
    }

    return mapData;
}