// Optimized JavaScript for blog.html: GSAP animations with better performance

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

function initAnimations() {
  // Only initialize GSAP if it exists and elements are present
  if (typeof gsap === 'undefined') return;

  const titleElement = document.querySelector('.title');
  const crownElement = document.getElementById('crown');

  // Animate title with will-change for better performance
  if (titleElement) {
    gsap.from(titleElement, {
      duration: 2,
      y: -50,
      opacity: 0,
      ease: 'power2.out'
    });
  }

  // Continuously rotate the crown symbol with GPU acceleration
  if (crownElement) {
    gsap.to(crownElement, {
      duration: 3,
      rotationY: 360,
      repeat: -1,
      ease: 'linear',
      force3D: true
    });
  }
}
