// JavaScript for Blog.html: GSAP animations

document.addEventListener('DOMContentLoaded', function() {
  // Animate the blog title
  if (typeof gsap !== 'undefined') {
    gsap.from('.title', {
      duration: 2,
      y: -50,
      opacity: 0
    });
    // Continuously rotate the crown symbol
    gsap.to('#crown', {
      duration: 3,
      rotationY: 360,
      repeat: -1,
      ease: 'linear'
    });
  } else {
    console.warn('GSAP not loaded.');
  }
});
