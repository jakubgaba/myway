import gsap from 'gsap';

export function addHoverEffect() {
    const svgElements = document.querySelectorAll('.rightCornerMenu');

    svgElements.forEach(svgElement => {
        const paths = svgElement.querySelectorAll('path');
        gsap.set(paths, { strokeOpacity: 1 });
        svgElement.addEventListener('mouseenter', () => {
            gsap.to(paths[0], { duration: 0.5, attr: { d: "M 17 44 L 17 0 L 100 0" }, strokeWidth: 3 });
            gsap.to(paths[1], { duration: 0.5, attr: { d: "M 100 0 L 100 44 L 17 44" }, strokeWidth: 10 });
        });
        svgElement.addEventListener('mouseleave', () => {
            gsap.to(paths[0], { duration: 1, attr: { d: "M 0 44 L 0 0 L 100 0" }, strokeWidth: 1 });
            gsap.to(paths[1], { duration: 1, attr: { d: "M 117 0 L 117 44 L 17 44" }, strokeWidth: 5 });
        });
    });
}
