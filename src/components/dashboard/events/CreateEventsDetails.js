import React, {useState} from "react";
import Input from "../../reusable/Input";
import {BsFillSlashSquareFill} from "react-icons/bs";


 const CreateEventsDetails = (props) => {

     const{ setEventDetails , eventDetails} = props

     const[fieldError, setFieldError] = useState({
             eventName: {message: "", error: false},
             location:{ message: "",error:false},
            description:{ message:"", error: false},

         }
     )

     const handleChange = (e) =>{
         setEventDetails({...eventDetails, [e.target.name]: e.target.value})
     }
     return(
         <div>
             <Input text ="email" handleChange={ handleChange }
                    icon ={<BsFillSlashSquareFill/>}
                    label ="eventName" fieldError={fieldError}/>
         </div>
     )

 }

 export default CreateEventsDetails