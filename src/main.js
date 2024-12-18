import './style.css';
import gsap from 'gsap';
import {displayNameAndTitle, displayRightCorner} from "./mainDisplay/display.js";


document.querySelector('#app').innerHTML = `
  ${displayNameAndTitle()}
  <div class="rightCornerWrapper">
   ${displayRightCorner()}
</div>
 
`;