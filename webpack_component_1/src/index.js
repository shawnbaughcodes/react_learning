// import "./index.css";
// document.body.innerHTML = "<h1>Hello World</h1>";
import "./index.css";
import Card from "./Components/Card/Card.js";
let cards = document.getElementById("cards");
for (var i = 0; i < 8; i++){
    cards.appendChild(Card());
}
