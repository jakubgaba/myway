import './style.css';
import gsap from 'gsap';
import {displayNameAndTitle, displayRightCorner} from "./mainDisplay/display.js";
import {addLineToSVGCorner} from "./mainDisplay/svgCornerMenu.js";


document.querySelector('#app').innerHTML = `
  ${displayNameAndTitle()}
     <div class="rightCornerWrapper">
  ${addLineToSVGCorner()}
  ${displayRightCorner()}
  </div>
`;