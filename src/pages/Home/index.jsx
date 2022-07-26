<<<<<<< HEAD
import React,{useState} from 'react'
=======
import React, { useState } from 'react'
>>>>>>> a2390341b37b6e3c0a22dae020377772699ac85a
import Header from '../../components/Header'
import Promotion from '../../components/Promotion'
import Slide from '../../components/Slide'
import Login from '../../Login'
const Home = () => {
  const [acount,setAcount] = useState(false)
<<<<<<< HEAD
  return (
    <div>
     <Header acount={acount} setAcount={setAcount}/>
     {acount&&<Login/>}
     <Slide/>
     <Promotion/>
=======
  
  return (
    <div>
     <Header acount={acount} setAcount={setAcount}/>
     {acount && <Login />}
>>>>>>> a2390341b37b6e3c0a22dae020377772699ac85a
    </div>
  )
}

export default Home