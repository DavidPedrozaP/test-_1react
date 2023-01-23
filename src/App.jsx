import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import db from "./db/quotes.json";

const arrayColors=["#00c6ab", "#c8ad8d", "#008080", "#191c32", "#DC143C", "6aa3b4",
"#15ab92", "#le91ed","#20298C"]

const getRandom = (arrayElements) => {
  const quantityValues = arrayElements.length;
  const ramdonIndex = Math.floor(Math.random() * quantityValues);
  return arrayElements[ramdonIndex];
};

function App() {
  
  const [quote, setQuote] = useState(getRandom(db));
  const [color, setColor] = useState(getRandom(arrayColors));
  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }

  console.log(getRandom(db));

  return (
    <div className="App" style={{backgroundColor:color}}>
      <QuoteBox quote={quote} newQuote = {newQuote} color ={color} />
    </div>
  );
}

export default App;
