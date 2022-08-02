import {Routes,Route,Link} from 'react-router-dom'
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import styles from './Promotion.module.css'
const Promotion = () => {
  const [imgPromotion,setImgPromotion] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const getData = async () =>
  {
    try {
      const res = await axios.get('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/promotion.json')
      setImgPromotion(Object.values(res.data)) 
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
       <div className={styles.Container}>
        <h1>KHUYẾN MÃI</h1>
        <p className={styles.Underline}></p>
      </div>
      <div className={styles.imgPro}>
      {
        imgPromotion.map((img,index)=>{
          return <div className={styles.image_holder}>
                      <Link to='/happysummer' key={index} ><img className={styles.image} src={img}/></Link>
                </div>
        })
      }
      
      </div>
      <button className={styles.btnMenu}><Link className={styles.link} to='/happysummer'>XEM MENU</Link></button>
    </div>
  )
}

export default Promotion
