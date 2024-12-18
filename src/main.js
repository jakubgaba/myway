import './style.css';
import {displayNameAndTitle, displayLeftCorner} from "./mainDisplay/display.js";

document.querySelector('#app').innerHTML = `
<div>
    ${displayNameAndTitle()}
</div>
<div>
  ${displayLeftCorner()}
</div>
`;