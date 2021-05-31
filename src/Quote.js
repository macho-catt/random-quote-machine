import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Quote = ({ quotes, currentQuote, rng }) => {
  // Gets a random quote from the pool of quotes for the very first render
  let number = rng(0, quotes.length - 1);
  let randomQuote = {...quotes[number]};

  return(
    <div>
      {
        currentQuote
        ? <div>
            <FontAwesomeIcon icon={faQuoteLeft} id="quote-icon" />
            <h2 id="text">{currentQuote.quoteText}</h2>
            <h3 id="author">-{currentQuote.quoteAuthor}</h3>
          </div>
        : <div>
            <FontAwesomeIcon icon={faQuoteLeft} id="quote-icon" />
            <h2 id="text">{randomQuote.quoteText}</h2>
            <h3 id="author">-{randomQuote.quoteAuthor}</h3>
          </div>
      }
    </div>
  )
}

export default Quote
