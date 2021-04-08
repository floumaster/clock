import React from 'react'
import Clock from './../clock/Clock'
import Controller from './../controller/Controller'

function LowerItems(){
    return(
        <div className="lower-items">
            <Clock/>
            <Controller/>
        </div>
    )
}

export default LowerItems;