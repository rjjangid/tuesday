// scripts.js
document.addEventListener('mousemove', (event) => {
    const butterflies = document.querySelectorAll('.butterfly');
    butterflies.forEach((butterfly, index) => {
        const speed = (index + 1) / 5; // Each butterfly will follow the cursor at a different speed
        const x = (event.clientX * speed) / 20;
        const y = (event.clientY * speed) / 20;
        butterfly.style.transform = translate(${x}px, ${y}px);
    });

    const bees = document.querySelectorAll('.bee');
    bees.forEach((bee, index) => {
        const speed = (index + 1) / 5; // Each bee will follow the cursor at a different speed
        const x = (event.clientX * speed) / 30;
        const y = (event.clientY * speed) / 30;
        bee.style.transform = translate(${x}px, ${y}px);
    });
});
