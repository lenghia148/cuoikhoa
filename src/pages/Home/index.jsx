import React, { useState } from 'react'
import Header from '../../components/Header'
import Login from '../../Login'
const Home = () => {
  const [acount,setAcount] = useState(false)
  
  return (
    <div>
     <Header acount={acount} setAcount={setAcount}/>
     {acount && <Login />}
    </div>
  )
}

export default Home