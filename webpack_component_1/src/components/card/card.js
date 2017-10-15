import './card.css'
import card from './card.html'
import Modal from "./../Modal/Modal.js";

class Card {
    constructor(){
        this.ele = document.createRange().createContextualFragment(card);
        this.buttonEvent();
        return this.ele;
    }
    buttonEvent(){
        this.ele.getElementById("mainButton").addEventListener('click', e => {
        document.body.appendChild(Modal("Awesome Title"));
    })
    }
}
export default function(){
    return new Card();
}
