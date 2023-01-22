import React from 'react'
import QuoteButton from './QuoteButton'

const QuoteBox = ({quote,newQuote, color}) => {
  return (
    <div className='card' style={{color:color}}>
      <i className='quotebox_icon bx bxs-quote-left'></i>
      <p className='quote'>{quote.quote}</p>
      <h3 className='autor'>{quote.author}</h3>
      <QuoteButton color={color} newQuote = {newQuote}/>
    </div>
  )
}

export default QuoteBox
