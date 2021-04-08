import React, {useContext} from 'react'
import Quote from '../quote/Quote'
import LowerItems from '../lowerItems/LowerItems'
import Context from '../context/Context'

function FaceClock(){
    const {wrapperClassName} = useContext(Context)
    return(
        <div className={wrapperClassName}>
            <Quote/>
            <LowerItems/>
        </div>
    )
}

export default FaceClock;