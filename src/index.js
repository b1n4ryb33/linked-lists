/**
 * Global CSS imports
 */
import "./reset.css";
import "./main.css";

/**
 * Font Awesome
 */
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

import { kvListFactory, linkedListFactory } from "./list-factory/linked-list";
import { hashmapFactory } from "./hashmap-factory/hashmap-factory";


let simpleLL = linkedListFactory();
simpleLL.append("kuck");
simpleLL.append("kuck");
simpleLL.prepend("Räuber");
simpleLL.append("na");
// simpleLL.pop();
console.dir(simpleLL.toString() + "\nsize: " + simpleLL.size());
console.log(simpleLL.contains("na"));
console.log(simpleLL.contains("la"));
console.log(simpleLL.find("kuck"));

console.log("----------------------------------");

let kvList = kvListFactory();

kvList.append("Uno", "Lalala");
kvList.append("Does", "Lalala");
kvList.append("Tres", "Lalala");
kvList.append("Quadro", "Nanana");
console.log(kvList.toString());
console.log(kvList.findKey("Does"));
console.log(kvList.findValue("Nanana"));
kvList.updateValue("Does", "na du rauber");
kvList.updateValue("jojo", "na du rauber");
console.log(kvList.toString());

console.log("----------------------------------");

let hm = hashmapFactory();
hm.set("test", "jajajaja");
hm.set("raueber", "nanana");
hm.set("caro", "hahaha");
hm.set("kann", "lalala");
hm.set("apple", "fruit");
hm.set("book", "read");
hm.set("car", "drive");
hm.set("dog", "bark");
hm.set("elephant", "big");
hm.set("flower", "bloom");
hm.set("guitar", "music");
hm.set("house", "live");
hm.set("ice", "cold");
hm.set("jacket", "wear");
hm.set("kite", "fly");
hm.set("lemon", "sour");
hm.set("moon", "night");
hm.set("notebook", "write");
hm.set("ocean", "blue");
hm.set("pencil", "draw");
hm.set("queen", "royalty");
hm.set("robot", "machine");
hm.set("sun", "shine");
hm.set("tree", "green");

hm.set("unicorn", "mythical");
hm.set("violin", "string");
hm.set("whale", "ocean");
hm.set("xylophone", "instrument");
hm.set("yacht", "luxury");
hm.set("zebra", "stripe");
hm.set("alpha", "first");
hm.set("beta", "second");
hm.set("gamma", "third");
hm.set("delta", "fourth");
hm.set("echo", "sound");
hm.set("foxtrot", "dance");
hm.set("golf", "sport");
hm.set("hotel", "stay");
hm.set("india", "country");
hm.set("juliet", "love");
hm.set("kilo", "weight");
hm.set("lima", "capital");
hm.set("mike", "name");
hm.set("november", "month");


console.log(hm.toString());
console.log(hm.get("lima"));
console.log(hm.has("lima"));
console.log(hm.has("kllllllima"));


// console.dir(simpleLL.at(3).getValue());
