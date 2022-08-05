import React, { useState } from 'react'
import styles from './Notifications.module.css'

const Notifications = ({type}) => {
    const [success,setSuccess]  = useState(false)
    const [fail,setFail] = useState(false)
    if(type == 'success' )
        {
            setSuccess(true)
            setTimeout(()=>
            {
                setSuccess(false)
            },3000)
        }
        else if (type == 'fail' )
        {
            setFail(true)
            setTimeout(()=>
            {
                setFail(false)
            },3000)
        }
        else 
             {

             }
    
  return (
     <div>
         {
            success ? <div> Thành công </div> : null
            
         }
         
     </div>
  )
}

export default Notifications