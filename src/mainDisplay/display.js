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


export function displayLeftCorner() {
    return `
<svg style="margin-top: 100px" height="100" width="100" class="leftCorner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <!-- First Line: Left and Top -->
    <path d="M 0 100 L 0 0 L 100 0" fill="none" stroke="red" stroke-width="5" />
    <!-- Second Line: Bottom and Right -->
    <path d="M 100 0 L 100 100 L 0 100" fill="none" stroke="blue" stroke-width="5" />
</svg>
    `;
}



export function displayRightCorner() {

}
