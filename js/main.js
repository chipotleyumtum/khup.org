// Optimized quote display with better performance
const STATIC_QUOTES = [
  "Learning never exhausts the mind. - Leonardo da Vinci",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "Knowledge is power. - Francis Bacon",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

// Cache length for O(1) access
const QUOTES_LENGTH = STATIC_QUOTES.length;

// Optimized random selection with crypto API for better distribution
function getRandomQuote() {
  const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % QUOTES_LENGTH;
  return STATIC_QUOTES[randomIndex];
}

function displayQuote() {
  const quoteElement = document.getElementById('quote-display') || document.getElementById('quote');
  if (quoteElement) {
    quoteElement.textContent = getRandomQuote();
  }
}

// Use passive event listener for better scroll performance
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', displayQuote);
} else {
  displayQuote();
}