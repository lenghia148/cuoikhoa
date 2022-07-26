
import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Promotion from '../../components/Promotion'
import Slide from '../../components/Slide'
import Login from '../../components/Login'
const Home = () => {
  const [acount,setAcount] = useState(false)

  return (
    <div>
     <Header acount={acount} setAcount={setAcount}/>
     {acount&&<Login/>}
     <Slide/>
     <Promotion/>
     <Footer/>
     </div>
  )
}

export default Home