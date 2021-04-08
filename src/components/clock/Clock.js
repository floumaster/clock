import React, {useState, useEffect} from 'react'


function Clock(){
    const [time, setTime] = useState(getDate())
    const [greeting, setGreeting] = useState(new Date().getHours() < 6 ? 'NIGHT':'DAY');
    const [planet, setPlanet] = useState(greeting === 'DAY' ? `./images/sun.png`:`./images/moon.png`);
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setTime(getDate())
            setGreeting(new Date().getHours() < 6 ? 'NIGHT':'DAY')
            setPlanet(greeting === 'DAY' ? `./images/sun.png`:`./images/moon.png`)
        }, 1000);
        return ()=>{
            clearInterval(intervalID);
        }
    })
    function getDate(){
        let hours = new Date().getHours() < 10 ? '0' + new Date().getHours(): new Date().getHours();
        let minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes(): new Date().getMinutes();
        return `${hours}:${minutes}`
    }
    return(
        <div className="clock-wrapper">
            <div className="day-night">
                <img className="day-night_sun" src={planet} alt="sun"/>
                <span className="day-night_greeting">GOOD {greeting}, ITS CURRENTLY</span>
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