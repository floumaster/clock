import React, {useContext} from 'react'
import Context from '../context/Context'

function AddInfo(){
    const {addInfoClassName} = useContext(Context)
    return(
        <div className={addInfoClassName}>
            <div className="add-info_left">
                <h4 className="add-info_left_topic">CURRENT TIMEZONE</h4>
                <p className="add-info_left_description">Europe/London</p>
                <h4 className="add-info_left_topic">DAY OF THE YEAR</h4>
                <p className="add-info_left_description">295</p>
            </div>
            <div className="add-info_right">
                <h4 className="add-info_left_topic">DAY OF THE WEEK</h4>
                <p className="add-info_left_description">5</p>
                <h4 className="add-info_left_topic">WEEK NUMBER</h4>
                <p className="add-info_left_description">42</p>
            </div>
        </div>
    )
}

export default AddInfo;