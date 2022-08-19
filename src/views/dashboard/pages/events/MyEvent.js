import React, {useEffect} from "react";
import axios from "axios";

const MyEvent = ({event}) => {


    return(
        <div className="event-card">
            <div className="image-containers" style={{backgroundImage:'url(https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1600)' }}>
            </div>
            <div className="event-detail">
                <p>Event Title</p>
                <h5>{event.title}</h5>
                <p>Event Title</p>
                <h5>{event.description}</h5>
            </div>
            <div className="event-actions">
                <button>View Details</button>
            </div>
        </div>
    )
}

export default MyEvent