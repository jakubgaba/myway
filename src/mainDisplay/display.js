import {addSVGCorner} from "./svgCornerMenu.js";

/**
 * Generates a div element with a name and title in left upper corner.
 * @see {@link App} - Used Here
 */
export function displayNameAndTitle() {
    return `
       
            <div class="sideTitle">
                <div>
                    <p class="sideTitleName">Jakub Gaba</p>
                    <p class="sideTitleInfo">Developer/Design enthusiast</p>
                </div>
            </div>
       
    `;
}


/**
 * Generates SVG button elements for the right corner of the screen.
 * @see {@link addSVGCorner} - Button creation
 *
 */
export function displayRightCorner() {
    return addSVGCorner("INFO") + addSVGCorner("ABOUT") + addSVGCorner("PRESS");
}
