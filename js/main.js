const url = 'https://quotes15.p.rapidapi.com/quotes/random/?language_code=en';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd0c5831ec9msh24d7fb8e86114a2p17ba88jsnf7b4f2028c8c',
		'x-rapidapi-host': 'quotes15.p.rapidapi.com'
	}
};

async function fetchRandomQuote() {
	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const data = await response.json();
		console.log(data); // Or update the DOM with the quote
		// Example: document.getElementById('quote-display').innerText = data.content;
		return data;
	} catch (error) {
		console.error("Error fetching quote:", error);
	}
}

// If you want to call it immediately:
// fetchRandomQuote();

// Or assign it to be called by an event, e.g., in your HTML:
// <script src="../js/main.js"></script>
// <script>
//   document.addEventListener('DOMContentLoaded', (event) => {
//     fetchRandomQuote().then(quote => {
//       if (quote && document.getElementById('quote')) {
//         document.getElementById('quote').innerText = quote.content + " - " + quote.originator.name;
//       }
//     });
//   });
// </script>