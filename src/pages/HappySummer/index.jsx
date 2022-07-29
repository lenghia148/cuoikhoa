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
        <div className={styles.happySummer}>
              { data.map((item,index)=>
                {
                    return <div key={item.id} className={styles.happySummer_items}> 
                                <div style={{backgroundImage : `url(${item.imgscr})`}} className={styles.image} ></div>
                                <h1>{item.title}</h1>
                                <p>{item.discription}</p>
                                <div className={styles.price}>Giá chỉ từ {item.price} đ
                                    <button>CHỌN</button>
                                </div>
                           </div>
                })}
        </div>
      </div>
      <div className={styles.shopcart}>
        <Shopcart/>
      </div>
    </div>
  )
}

export default HappySummer