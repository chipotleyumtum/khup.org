// Performance utilities for khup.org
// Debounce and throttle functions for optimizing event handlers

/**
 * Debounce function - delays execution until after wait time has elapsed
 * Useful for: search inputs, window resize, scroll events
 * Time Complexity: O(1)
 * @param {Function} func - The function to debounce
 * @param {number} wait - The delay in milliseconds
 * @param {boolean} immediate - Execute on leading edge instead of trailing
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 300, immediate = false) {
  let timeout;
  
  return function executedFunction(...args) {
    const context = this;
    
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    
    const callNow = immediate && !timeout;
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    
    if (callNow) func.apply(context, args);
  };
}

/**
 * Throttle function - ensures function is called at most once per interval
 * Useful for: scroll events, mouse movement tracking
 * Time Complexity: O(1)
 * @param {Function} func - The function to throttle
 * @param {number} limit - The time limit in milliseconds
 * @returns {Function} Throttled function
 */
function throttle(func, limit = 300) {
  let inThrottle;
  
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Lazy load images when they enter viewport
 * Improves initial page load performance
 */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px' // Start loading 50px before entering viewport
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Preload critical resources for better performance
 * @param {string[]} urls - Array of resource URLs to preload
 * @param {string} type - Resource type ('image', 'font', 'script', 'style')
 */
function preloadResources(urls, type = 'image') {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    if (type === 'font') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} True if user prefers reduced motion
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { debounce, throttle, initLazyLoading, preloadResources, prefersReducedMotion };
}
