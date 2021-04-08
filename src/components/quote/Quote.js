import React, { useState, useContext } from 'react'
import Context from '../context/Context'

function Quote(){
    const {quotesClassName} = useContext(Context)
    const quotes = [
        {
            quote: 'An experiment is a question which science poses to Nature, and a measurement is the recording of Nature’s answer.',
            autor: 'Max Planck'
        },
        {
            quote: 'The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.',
            autor: 'Albert Einstein'
        },
        {
            quote: 'Men love to wonder, and that is the seed of science.',
            autor: 'Ralph Waldo Emerson'
        },
        {
            quote: 'There are in fact two things, science and opinion; the former begets knowledge, the latter ignorance.',
            autor: 'Hippocrates'
        },
        {
            quote: 'What we know is a drop, what we don’t know is an ocean.',
            autor: 'Isaac Newton'
        }
    ]
    const [currQuote, setCurrQuote] = useState(0);
    function changeQuote(e){
            e.target.classList.toggle("spin");
            setTimeout(()=>{
                nextQuote();
                e.target.classList.toggle("spin");
            }, 2000)
    }
    function nextQuote(){
        const newQuote = currQuote;
        if(newQuote===quotes.length-1){
            setCurrQuote(0);
        }
        else{
            setCurrQuote(newQuote+1);
        }
    }
    return(
        <div className={quotesClassName}>
            <div className="quote-content">
                <q className="quote">{quotes[currQuote].quote}</q>
                <br/><br/>
                <cite className="author"><b>{quotes[currQuote].autor}</b></cite>
            </div>
            <div className="quote-loader">
                <img className="quote-arrows" src='/images/arrows.png' alt="arrows loader" onClick={changeQuote}/>
            </div>
        </div>
    )
}

export default Quote;