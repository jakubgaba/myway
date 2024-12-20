import {EventEmitter} from 'events';
import gsap from "gsap";


const eventEmitter = new EventEmitter();

export default eventEmitter;


/**
 * Listeners when top line is completed the left line is animated and svgWrapper is scaled.
 * @see {@link addHoverEffect} - Emitter for this class
 * @see {@link addLineToSVGCorner} - SVG line creation parameters
 * @param {SVGLineElement} line - Taking leftLineSvg.querySelector('line') as a parameter.
 and overwriting initial values of the line.
 * @param {HTMLElement} wrapper - Taking svgWrapper as a parameter.
 *                              and overwriting initial values of the line.
 */
eventEmitter.on('topLineAnimationComplete', (line, wrapper) => {
    gsap.to(line, {
        duration: 0.2,
        attr: { y1: "70%", y2: "5%" }
    });
    gsap.to(wrapper, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
});
