import './style.css';
import {displayNameAndTitle, displayRightCorner} from "./mainDisplay/display.js";
import {addLineToSVGCorner} from "./mainDisplay/svgCornerMenu.js";

export class App {
    constructor() {
        this.appElement = null;
    }

    initialize() {
        this.appElement = document.querySelector('#app');
        if (!this.appElement) {
            const newAppElement = document.createElement('div');
            newAppElement.id = 'app';
            document.body.appendChild(newAppElement);
            this.appElement = newAppElement;
        }
        this.appElement.innerHTML = `
            ${displayNameAndTitle()}
            <div class="rightCornerWrapper">
                ${addLineToSVGCorner()}
                ${displayRightCorner()}
            </div>
        `;
    }
}
