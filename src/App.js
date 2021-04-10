import React from "react";
import axios from "axios";
import QuoteCard from "./components/QuoteCard";

function App() {
  const getQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => setQuote(data[0]));
  };

  const [quote, setQuote] = React.useState(getQuote);

  return (
    <div className="App">
      <button type="button" onClick={getQuote}>
        Get a new quote
      </button>
      <QuoteCard key={quote} {...quote} />
    </div>
  );
}

export default App;
