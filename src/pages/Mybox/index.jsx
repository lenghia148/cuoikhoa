import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Shopcart from '../../components/Shopcart'
import Navbar from '../../components/Navbar'
import styles from './Mybox.module.css'
import axios from 'axios'
const Mybox = () => {
  const [data,setData] = useState([])
  const [error,setError] = useState(false)
  const [product,setProduct] = useState([])
  const [flag,setFlag] = useState(true)
  const [item,setItem] = useState({})
  const [items,setItems] = useState({})
  const [products,setProducts] = useState([])
  const [isDelete,setIsDelete] = useState(false)
  const [isPost,setIsPost] = useState(0)
  const [id,setId] = useState(0) 
  const [count,setCount] = useState(0)
  const getData = async () =>
         {
             
              try {
                  const res = await axios.get('http://localhost:8000/mybox')

                  setData(Object.values(res.data))
              } catch (error) {
                  console.log('errror');
              }
         }
  const getItemShopCart = async () =>
  {   
    
     try {
      const res = await axios.get('http://localhost:7000/shopcart')
      setProducts(Object.values(res.data))
      
     } catch (error) {
      console.log('errror');
     }
  }    
  useEffect(()=>
  {
      getData()
      getItemShopCart()
  },[])
  
 useEffect(()=>
 {
  
 })
 const handlerAdd = (item,id)=>
 {
    handlerAddShopCart(item,id)
    setIsPost((prev) => prev +1)
 }
  const handlerAddShopCart =  async (item,id) =>
  {   
     getItemShopCart()
      if (products.some((a)=>
      {   
        return a.discription === item.discription
      }))  
      {
        try {
          await axios.put(
          `http://localhost:7000/shopcart/${id}`,{
            ...item,
            count :  2
          }) 
          getItemShopCart()
        } catch (error) {
          
        }
      } 
      else {
        try {
          await axios.post(
           `http://localhost:7000/shopcart/`,{
           ...item,
             count : 1
           }) 
        
       } 
       catch (error) {
         console.log('errror');
       } 
      }
    
  }

 const handlerDelete = async (id) =>
 {
    
 }

return (
  <div className={styles.menu}>
    <div className={styles.content}>
      <Header></Header>
      <Navbar/>
      <div className={styles.happySummer}>
            { data.map((item,index)=>
              {
                  return <div key={index} className={styles.happySummer_items}>
                            <div className={styles.hightlight}>
                              <div className={styles.image_holder}>
                                <img src={item.imgscr} className={styles.image} alt=''/>
                              </div>
                              <h1>{item.title}</h1>
                            </div>
                            <p>{item.discription}</p>
                            <hr className={styles.line} />
                            <div className={styles.price}>
                              <p>Giá chỉ từ <span>{item.price}</span> đ</p>
                              <button onClick={()=>handlerAdd(item,item.id)}>CHỌN</button>
                            </div>
                          </div>
              })}
      </div>
    </div>
    <div className={styles.shopcart}>
      <Shopcart products={products}  getItemShopCart ={getItemShopCart} isPost={isPost} handlerDelete={handlerDelete} items={items}/>
    </div>
  </div>
)
}

export default Mybox
