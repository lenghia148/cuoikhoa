
import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Promotion from '../../components/Promotion'
import Slide from '../../components/Slide'
import Login from '../../components/Login'
import axios from 'axios'
const Home = () => {
  const [acount,setAcount] = useState(false)
  const [isUser,setIsUser] = useState(false)
  const [userNow,setUserNow] = useState([])
  const getUser = async () =>{
    try {
      const res = await axios.get('http://localhost:7000/user')
      setUserNow(res.data[0].name)
      console.log(userNow);
    } catch (error) {
      console.log('error');
    }
  }
  useEffect(()=>
  {
    getUser()
  },[userNow])
  return (
    <div>
     <Header 
        acount={acount} 
        setAcount={setAcount} 
        isUser={isUser} 
        setIsUser={setIsUser} 
        userNow = {userNow}
        setUserNow ={setUserNow}
    />
     {acount&&
     <Login 
        acount={acount} 
        setAcount={setAcount} 
        isUser={isUser} 
        setIsUser={setIsUser} 
      />}
     <Slide/>
     <Promotion/>
     <Footer/>
     </div>
  )
}

export default Home