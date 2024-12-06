// script.js

const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa"
  ];
  
  const quoteDisplay = document.getElementById('quote');
  const generateBtn = document.getElementById('generateBtn');
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  generateBtn.addEventListener('click', () => {
    const randomQuote = getRandomQuote();
    quoteDisplay.textContent = randomQuote;
  });
  