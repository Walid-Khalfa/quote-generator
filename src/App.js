import React, { useState, useEffect } from 'react';
import ShareButtons from './components/ShareButtons';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  };
  const [quote, setQuote] = useState(quoteData);

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content);
    alert('Copied');
  };

  return (
    <div className="container">
      <h1>Quote Generator React App</h1>
      <p>{quote.content}</p>
      <span>{quote.author}</span>
      <div className="share-container">
        <button onClick={copy} className="share-button">Copy</button>
        <ShareButtons url={url} title={quote.content} hashtags={['quote', 'generator']} />
        <button onClick={generateQuote} className="share-button">Generate Another Quote</button>
      </div>
    </div>
  );
};

export default App;
