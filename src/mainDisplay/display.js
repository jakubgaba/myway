import {addHoverEffect} from "./basicEffects.js";
import {addSVGCorner} from "./svgCornerMenu.js";

export function displayNameAndTitle() {
    return `
        <div>
            <div class="sideTitle">
                <div>
                    <p class="sideTitleName">Jakub Gaba</p>
                    <p class="sideTitleInfo">Developer/Design enthusiast</p>
                </div>
            </div>
        </div>
    `;
}


export function displayRightCorner() {
    return addSVGCorner("INFO") + addSVGCorner("ABOUT") + addSVGCorner("SakDick");
}


export function displayLeftCorner() {
}


document.addEventListener('DOMContentLoaded', () => {
    addHoverEffect();
});