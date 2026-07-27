document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Menu Toggle ---
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // --- Typing Effect ---
  const typingText = document.getElementById('typing-text');
  const roles = [
    "Backend Developer",
    "Ingeniero Prompt",
    "Desarrollo de Bots con IA",
    "Open Source Contributor",
    "NestJS Enthusiast"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingText.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      typingText.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typeSpeed = 2000; // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  if (typingText) {
    type();
  }

  // --- Intersection Observer for Scroll Animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Handle staggered animations if delay var is present
        // We don't need to do anything manual if CSS handles var(--delay)
        // But if we want to force it via JS for consistency:
        const delay = entry.target.style.getPropertyValue('--delay');
        if (delay) {
          entry.target.style.transitionDelay = delay;
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up, .fade-in-left');
  animatedElements.forEach(el => observer.observe(el));

  // --- Navbar Scroll Effect ---
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(5, 5, 5, 0.95)';
      nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
      nav.style.background = 'rgba(5, 5, 5, 0.8)';
      nav.style.boxShadow = 'none';
    }
  });

  // --- Canvas Background Animation (Starfield) ---
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let stars = [];

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    }

    function initStars() {
      stars = [];
      const starCount = Math.floor((width * height) / 4000); // Responsive count
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          vx: (Math.random() - 0.5) * 0.2, // Subtle movement
          vy: (Math.random() - 0.5) * 0.2,
          alpha: Math.random(),
          twinkleSpeed: Math.random() * 0.02
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // Update position
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle
        star.alpha += star.twinkleSpeed;
        if (star.alpha > 1 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
  }
});