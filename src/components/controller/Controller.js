import React, { useState, useContext } from 'react'
import Context from '../context/Context'

function Controller(props){
    const {handleClick} = useContext(Context)
    const [name, setName] = useState('MORE');
    function turn(e){
        e.target.classList.toggle("turned");
        const newName = name === 'MORE'?'LESS':'MORE';
        setName(newName);
        handleClick();
    }
    return(
        <div className="controller">
            <div className="controller-name">
                {name}
            </div>
            <div className="controller-circle" onClick={turn}>
                <img className="controller-circle_arrow" src="./images/arrow_up.png" alt="arrow up"/>
            </div>
        </div>
    )
}

export default Controller;