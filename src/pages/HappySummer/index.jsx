import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Shopcart from '../../components/Shopcart'
import Navbar from '../../components/Navbar'
import styles from './HappySummer.module.css'
import axios from 'axios'
const HappySummer = () => {
    const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const getData = async () =>
           {
               
                try {
                    const res = await axios.get('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/happysummer.json')
                    setData(Object.values(res.data))
                } catch (error) {
                    console.log('errror');
                }
           }
    useEffect(()=>
    {
        getData()
    },[])
   console.log(data);
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <Header></Header>
        <Navbar/>
      </div>
      <div className={styles.shopcart}>
        <Shopcart/>
      </div>
    </div>
  )
}

export default HappySummer