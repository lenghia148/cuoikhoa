
import React, { useState } from 'react'

import Header from '../../components/Header'
import Promotion from '../../components/Promotion'
import Slide from '../../components/Slide'
import Login from '../../Login'
const Home = () => {
  const [acount,setAcount] = useState(false)

  return (
    <div>
     <Header acount={acount} setAcount={setAcount}/>
     {acount&&<Login/>}
     <Slide/>
     <Promotion/>
     </div>
  
  
  )
}

export default Home