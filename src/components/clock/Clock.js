import React, {useState, useEffect} from 'react'


function Clock(){
    const [time, setTime] = useState(getDate())
    useEffect(()=>{
        const intervalID = setInterval(()=>{setTime(getDate())}, 1000);
        return ()=>{
            clearInterval(intervalID);
        }
    })
    function getDate(){
        let hours = new Date().getHours();
        let minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes(): new Date().getMinutes();
        return `${hours}:${minutes}`
    }
    return(
        <div className="clock-wrapper">
            <div className="day-night">
                <img className="day-night_sun" src="./images/sun.png" alt="sun"/>
                <span className="day-night_greeting">GOOD MORNING, ITS CURRENTLY</span>
            </div>
            <div className="time">
                {time}
            </div>
            <div className="address">
                IN DONBAS, DPR
            </div>
        </div>
    )
}

export default Clock;