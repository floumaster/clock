import './App.css';
import React, {useState} from 'react'
import FaceClock from './components/faceClock/FaceClock'
import AddInfo from './components/addInfo/AddInfo'
import Context from './components/context/Context'

function App() {
  const [wrapperClassName, setWrapperClassName] = useState('faceClock-wrapper');
    const [quotesClassName, setQuotesClassName] = useState('quote-wrapper');
    const [addInfoClassName, setAddInfoClassName] = useState('add-info none');
    function handleClick(){
        const newWrapperName = wrapperClassName === 'faceClock-wrapper'? "faceClock-wrapper up":'faceClock-wrapper';
        setWrapperClassName(newWrapperName);
        const newQuotesClassName = quotesClassName === 'quote-wrapper'? "quote-wrapper hidden":'quote-wrapper';
        setQuotesClassName(newQuotesClassName);
        const newAddInfoClassName = addInfoClassName === 'add-info'? "add-info none":'add-info';
        setAddInfoClassName(newAddInfoClassName);
    }
  return (
    <Context.Provider value={{wrapperClassName, quotesClassName, handleClick, addInfoClassName}}>
      <div className="App">
        <FaceClock/>
        <AddInfo/>
      </div>
    </Context.Provider>
  );
}

export default App;
