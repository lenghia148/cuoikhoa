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
      console.log(res.data);
      setImgPromotion(Object.values(res.data))
      console.log(imgPromotion);
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      <h1>KHUYẾN MÃI</h1>
      <div className={styles.imgPro}>
      {
        imgPromotion.map((img,index)=>{
          return <img key={index} src={img}/>
        })
      }
      
      </div>
      <button className={styles.btnMenu}>XEM MENU</button>
    </div>
  )
}

export default Promotion