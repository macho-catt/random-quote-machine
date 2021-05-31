import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Quote from './Quote.js'
import Button from './Button.js'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [fadedown, setFadeDown] = useState(1);
  const url = 'http://localhost:3001/quotes';

  // Set quotes state with quotes from DB
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setQuotes(quotes.concat(response.data));
      })
  }, [])

  // Random number generator
  const getRandomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleOnClick = () => {
    let number = getRandomNum(0, quotes.length - 1);
    let randomQuote = {...quotes[number]};
    setCurrentQuote(randomQuote);
    setFadeDown(1);
  }

  const handleOnAnimationEnd = () => {
    setFadeDown(0);
  }

  return(
    <div id="container">
      <div id="quote-box">
        <div id="quote-container" fadedown={fadedown} onAnimationEnd={handleOnAnimationEnd} >
          <Quote quotes={quotes} currentQuote={currentQuote} rng={getRandomNum} />
        </div>
        <div id="misc-container">
          <a href="https://twitter.com/intent/tweet" id="tweet-quote">
            <FontAwesomeIcon icon={faTwitter} id="twitter-icon" />
          </a>
          <Button onClick={handleOnClick}  />
        </div>
      </div>
    </div>
  )
}

export default App