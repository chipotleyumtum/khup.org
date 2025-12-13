const STATIC_QUOTES = [
  "Learning never exhausts the mind. - Leonardo da Vinci",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "Knowledge is power. - Francis Bacon",
  "In the middle of difficulty lies opportunity. - Albert Einstein",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

function getRandomQuote() {
  return STATIC_QUOTES[Math.floor(Math.random() * STATIC_QUOTES.length)];
}

function displayQuote() {
  const quoteElement = document.getElementById('quote-display') || document.getElementById('quote');
  if (quoteElement) {
    quoteElement.textContent = getRandomQuote();
  }
}

document.addEventListener('DOMContentLoaded', displayQuote);