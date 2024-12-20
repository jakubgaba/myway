/**
 * Generates an SVG element inside of a WRAPPER element.
 * @param {string} name - The text to be displayed in the SVG.
 */
export function addSVGCorner(name) {
    return `
    <svg class="rightCornerMenu" 
height="44" 
width="117" 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 117 44" 
fill="none"
> 
    <path d="M 0 44 L 0 0 L 100 0" fill="none" stroke="white" stroke-width="1" />
    <path d="M 117 0 L 117 44 L 17 44" fill="none" stroke="white" stroke-width="5" />
    <text x="50%" y="50%" text-anchor="middle" dy=".25em" font-family="iceland, sans-serif" font-size="12" fill="#fff">
        ${name}
    </text>
</svg>
    `
}

/**
 * Generates SVG element paths for left and top side of the WRAPPER element.
 * @see {@link addHoverEffect} - Emitter for this class
 */
export function addLineToSVGCorner() {
    return `
  <svg class="topLineSvg" xmlns="http://www.w3.org/2000/svg">
    <line x1="100%" y1="0" x2="100%" y2="0" stroke="white" stroke-width="2" />
  </svg>
    <svg class="leftLineSvg" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="0" x2="0" y2="0" stroke="white" stroke-width="1" />
  </svg>
    `
}