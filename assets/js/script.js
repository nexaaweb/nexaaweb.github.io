// GSAP Init
gsap.registerPlugin(ScrollTrigger);

// Swiper Carousel (Cafe Cycling - Auto 3-sec loop, sync content)
const serviceSwiper = new Swiper('.auto-cycle', {
    autoplay: { delay: 3000, disableOnInteraction: false },
    loop: true,
    effect: 'fade',
    on: {
        slideChange: function () {
            // Sync text/price with image - already in HTML
        }
    }
});

const testimonialSwiper = new Swiper('.testimonial-carousel', {
    autoplay: { delay: 4000 },
    loop: true,
    effect: 'slide'
});

// Jarallax Parallax (Watches Scrolling)
jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});

// GSAP Scroll-Triggered Wireframe Transform
gsap.utils.toArray('.wireframe-trigger').forEach(section => {
    gsap.fromTo(section.querySelector('.wireframe'), 
        { scale: 1, opacity: 1 },
        { scale: 0.8, opacity: 0.5, duration: 1, scrollTrigger: { trigger: section, start: 'top 80%', scrub: true } }
    );
    gsap.fromTo(section.querySelector('.full-ui'), 
        { scale: 0.8, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 1, scrollTrigger: { trigger: section, start: 'top 80%', scrub: true } }
    );
});

// Three.js 3D Overlapping Mockups (Simple scene)
function initThree(canvasId) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(canvasId), alpha: true });
    renderer.setSize(window.innerWidth, 300);

    // Simple cube as mockup placeholder (replace with GLTF loader for real models)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}
initThree('three-canvas');
initThree('portfolio-three-canvas'); // For portfolio

// Floating Icons Hover Pop-up
document.querySelectorAll('.floating-icons img').forEach(icon => {
    icon.addEventListener('mouseover', e => {
        const popup = document.querySelector('.popup');
        popup.textContent = e.target.dataset.popup;
        popup.style.display = 'block';
        popup.style.top = `${e.pageY + 10}px`;
        popup.style.left = `${e.pageX}px`;
    });
    icon.addEventListener('mouseout', () => {
        document.querySelector('.popup').style.display = 'none';
    });
});

// Particle Bridge Animation (Vanilla JS Canvas - Inspired by particles.js)
const particleCanvas = document.getElementById('particle-canvas');
if (particleCanvas) {
    const ctx = particleCanvas.getContext('2d');
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = 200;

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }
        draw() {
            ctx.fillStyle = 'cyan';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particles = [];
    function createParticles() {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle(particleCanvas.width / 2, particleCanvas.height / 2));
        }
    }
    createParticles();

    function animateParticles() {
        ctx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        particles.forEach((p, i) => {
            p.update();
            p.draw();
            if (p.size <= 0.2) particles.splice(i, 1);
        });
        if (particles.length < 100) createParticles();
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

// Interactive Quiz (Simple)
function showQuiz() {
    document.getElementById('quiz-form').style.display = 'block';
}

// Form Submit Dummy
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Submitted! AI Tip: For Website, use SEO best practices.');
    });
});

// Window Resize for Canvases
window.addEventListener('resize', () => {
    particleCanvas.width = window.innerWidth;
    // Resize Three.js too if needed
});

// Nexaaweb Logo Flow Animation (On Load - Watches style auto-assemble)
window.addEventListener('load', () => {
    gsap.from('nav li', { duration: 1, y: -50, stagger: 0.2, ease: 'bounce.out' });
});
