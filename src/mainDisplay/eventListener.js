import { EventEmitter } from 'events';
import gsap from "gsap";


const eventEmitter = new EventEmitter();

export default eventEmitter;

eventEmitter.on('topLineAnimationComplete', (line, wrapper) => {
    // Animate the line
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
