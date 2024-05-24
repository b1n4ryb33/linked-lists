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

import { linkedListFactory } from "./list-factory/linked-list";


let simpleLL = linkedListFactory();
simpleLL.append("kuck");
simpleLL.append("kuck");
simpleLL.prepend("Räuber");
simpleLL.append("na");
// simpleLL.pop();
console.dir(simpleLL.toString() + "\nsize: " + simpleLL.size());
console.log(simpleLL.contains("na"));
console.log(simpleLL.contains("la"));
console.log(simpleLL.find("kuck"))

// console.dir(simpleLL.at(3).getValue());
