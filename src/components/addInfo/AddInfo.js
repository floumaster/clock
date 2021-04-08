import React, {useContext, useState, useEffect} from 'react'
import Context from '../context/Context'

function AddInfo(){
    const {addInfoClassName, } = useContext(Context)
    const [dayWeek, setDayWeek] = useState(new Date().getDay());
    const [weekYear, setWeekYear] = useState(new Date().getMonth() * 4 + new Date().getDate()%7);
    const [dayYear, setDayYear] = useState(Math.ceil(Math.abs(new Date().getTime() - new Date('01-01-2021').getTime()) / (1000 * 3600 * 24))+1);
    useEffect(()=>{
        const intervalID = setInterval(()=>{
            setDayWeek(new Date().getDay()); 
            setWeekYear(new Date().getMonth() * 4 + new Date().getDate()%7);
            setDayYear(Math.ceil(Math.abs(new Date().getTime() - new Date('01-01-2021').getTime()) / (1000 * 3600 * 24))+1)
        }, 1000);
        return ()=>{
            clearInterval(intervalID);
        }
    })
    return(
        <div className={addInfoClassName}>
            <div className="add-info_left">
                <h4 className="add-info_left_topic">CURRENT TIMEZONE</h4>
                <p className="add-info_left_description">Europe/DPR</p>
                <h4 className="add-info_left_topic">DAY OF THE YEAR</h4>
                <p className="add-info_left_description">{dayYear}</p>
            </div>
            <div className="add-info_right">
                <h4 className="add-info_left_topic">DAY OF THE WEEK</h4>
                <p className="add-info_left_description">{dayWeek}</p>
                <h4 className="add-info_left_topic">WEEK NUMBER</h4>
                <p className="add-info_left_description">{weekYear}</p>
            </div>
        </div>
    )
}

export default AddInfo;