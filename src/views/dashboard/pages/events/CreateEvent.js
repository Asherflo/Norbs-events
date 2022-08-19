import React, {useState} from "react";
import Preview from './Preview';
import CreateEventsDetails from "../../../../components/dashboard/events/CreateEventsDetails";

const  CreateEvent =() =>{
    const [eventDetails , setEventDetails]= useState({})
    return(
        <div classneme ="createEventContainer">
            <div>
                <CreateEventsDetails setEventDetails = {setEventDetails}/>
            </div>
            <Preview eventDetails = {eventDetails} />
        </div>
    )
}

export default CreateEvent
