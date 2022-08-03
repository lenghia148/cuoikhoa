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
    const [id,setId] = useState(0) 
    const getData = async () =>
           {
               
                try {
                    const res = await axios.get('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/happysummer.json')
                    setData(Object.values(res.data))
                } catch (error) {
                    console.log('errror');
                }
           }
    const getItemShopCart = async () =>
    {   
      
       try {
        const res = await axios.get('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/shopcart.json')
        setProduct(Object.values(res.data))
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
      handlerAddShopCart()
    },[flag])
    const handlerAdd = (item,id)=>
    {
      setId(id)
      setItem(item)
      setFlag(!flag)
    }
    const handlerAddShopCart =  async (items) =>
    {   
        // setItem(items)
        try {
           await axios.post(
            `https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/shopcart/item${id}.json`,item) 
            getItemShopCart()  
        } 
        catch (error) {
          console.log('errror');
        } 
    }
    useEffect(()=>{
      handlerDelete()
    },[isDelete])
   const handlerDelete = async (id) =>
   {
       try {
         await axios.delete(`https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/shopcart/-N8UHstGiJkEjb6yot5o.json`)
        
       } catch (error) {
         console.log('error');
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
        <Shopcart product={product} item={item} handlerDelete={handlerDelete} items={items}/>
      </div>
    </div>
  )
}

export default HappySummer
