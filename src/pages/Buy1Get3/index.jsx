import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Shopcart from '../../components/Shopcart'
import Navbar from '../../components/Navbar'
import styles from './Buy1Get3.module.css'
import axios  from 'axios'
const Buy1Get3 = () => {
  const [data,setData] = useState([])
  const [error,setError] = useState(false)
  const [product,setProduct] = useState([])
  const [item,setItem] = useState({})
  const getShopCart = async () =>
  {
     try { 
      const res = await axios.get('http://localhost:7000/shopcart')
      setProduct(Object.values(res.data))
     } catch (error) {
      console.log('error');
     }
  }
  const getData = async () =>
         {
             
              try {
                  const res = await axios.get('http://localhost:8000/buy1get3')
                  setData(Object.values(res.data))
              } catch (error) {
                  console.log('error');
              }
         }
  useEffect(()=>
  {
      getData()
      getShopCart()
  },[])
const handlerBuy =  async (item)=>
{
  // setItem(item)
  // try {
  //     await axios.post('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/shopcart.json',item)
  //     getShopCart()
  // } catch (error) {
  //   console.log('error');
  // }
}

return (
  <div className={styles.menu}>
    <div className={styles.content}>
      <Header></Header>
      <Navbar/>
      <div className={styles.happySummer}>
            { data.map((item,index)=>
              {
                  return <div key={item.id} className={styles.happySummer_items}>
                            <div className={styles.hightlight}>
                              <div className={styles.image_holder}>
                                <img src={item.imgscr} className={styles.image}/>
                              </div>
                              <h1>{item.title}</h1>
                            </div>
                              <p>{item.discription}</p>
                            <hr className={styles.line} />
                              <div className={styles.price}>
                                  <p>Giá chỉ từ <span>{item.price}</span> đ</p>
                                  <button onClick={()=>handlerBuy(item)}>CHỌN</button>
                              </div>
                         </div>
              })}
      </div>
    </div>
    <div className={styles.shopcart}>
      <Shopcart product={product}/>
    </div>
  </div>
)
}

export default Buy1Get3
