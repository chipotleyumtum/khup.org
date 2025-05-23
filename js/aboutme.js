// JavaScript for aboutme.html
// Handles random quote display

document.addEventListener('DOMContentLoaded', function() {
  const quotes = [
    "Learning never exhausts the mind."
    // Add more quotes here if desired
  ];
  const quoteElement = document.getElementById('quote');
  if (quoteElement) {
    quoteElement.innerText = quotes[Math.floor(Math.random() * quotes.length)];
  } else {
    console.error("Quote element not found!");
  }
});
