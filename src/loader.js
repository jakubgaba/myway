import gsap from "gsap";

export class Loader {
    constructor(targetElement) {
        this.targetElement = targetElement;
    }

    start() {
        if (this.targetElement) {
            this.targetElement.innerHTML = `
                <div class="loader">
                    <div class="spinner"></div>
                    <h1>Loading...</h1>
                </>
            `; // Add a loader structure

            // Animate the loader (e.g., spinner)
            gsap.to(this.targetElement.querySelector('.spinner'), {
                rotation: 360,
                duration: 1,
                repeat: -1,
                ease: 'linear'
            });
        } else {
            Error('Target element not found');
        }
    }

    stop() {
        if (this.targetElement) {
            const loaderElement = this.targetElement.querySelector('.loader');
            if (loaderElement) {
                gsap.killTweensOf(loaderElement.querySelector('.spinner')); // Stop animations
                loaderElement.remove(); // Remove loader from DOM
            }
        }
    }
}
