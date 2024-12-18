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