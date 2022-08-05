import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Shopcart from '../../components/Shopcart'
import Navbar from '../../components/Navbar'
import styles from './HappySummer.module.css'
import axios from 'axios'
const HappySummer = () => {
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
    // const [countItem,setCountItem] = useState(0)
    var countItem
    const getData = async () =>
           {
               
                try {
                    const res = await axios.get('http://localhost:8000/happysummer')

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
    },[isPost])
 
   const handlerAdd = (item,id)=>
   {
      handlerAddShopCart(item,id)
      setIsPost((prev) => prev +1)
   }
     
    const handlerAddShopCart =  async (item,id) =>
    {   
    
      
        if (products.some((currentItem)=>
        {   
          return currentItem.title === item.title
        }))  
        {
          alert('SẢN PHẨM ĐÃ CÓ TRONG GIỎ HÀNG')
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
        <Shopcart products={products}  getItemShopCart ={getItemShopCart} isPost={isPost}  items={items} setIsPost={setIsPost} countItem={countItem}/>
      </div>
    </div>
  )
}

export default HappySummer
