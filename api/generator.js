
const quoteContainer = document.querySelector('.quote');
const newQuoteButton = document.getElementById('new-quote-btn');

async function getRandomQuote() {
  try {
    
    const res = await fetch('https://type.fit/api/quotes');
    const data = await res.json();

    const index = Math.floor(Math.random() * data.length);
    const quote = data[index];

    
    quoteContainer.innerHTML = `<p> Quote: ${quote.text}</p><p>Author: ${quote.author || 'Unknown'}</p>`;
  } catch (error) {
    console.error('Error while fetching data:', error);
    quoteContainer.innerHTML = '<p>Failed to fetch a quote. Please try again later.</p>';
  }
}

newQuoteButton.addEventListener('click', getRandomQuote);

getRandomQuote();
