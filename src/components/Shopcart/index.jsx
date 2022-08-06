import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Shopcart.module.css'

const Shopcart = (props) => {
  const {getItemShopCart,products,isPost,setIsPost,countItem} = props
  const [data,setData] = useState([])
  const [items,setItems] = useState([])
  const [itemCount,setItemCount] = useState(0)
  const [countItems,setcountItems] = useState([])
  const [flag,setFlag] = useState(1)
  
  useEffect(()=>{
    getItemShopCart()
    getData()
  },[isPost])
  useEffect(()=>{
    getItemShopCart()
    getData()
    
  },[countItem])
  useEffect(()=>
  {
    total(data)
  },[data])
  const handlerDelete = async (idItem) => {
    
    try {
      await axios.delete(
        `http://localhost:7000/shopcart/${idItem}`)
        getItemShopCart()
        getData()
        
    }
    catch (error) {
      console.log('errror');
    }
  
  }
  const getData = async () =>
  {
      
       try {
           const res = await axios.get('http://localhost:7000/shopcart')

           setData(Object.values(res.data))
           
       } catch (error) {
           console.log('errror');
       }
  }
  const total = (data) =>
  {
    setFlag (prev => prev +1)
      const total = data.reduce((init,current,index)=>
      {
            return init += current.price
      },0)
      setItemCount(total)
  }
  const handlerPayment = async () =>{
    alert('CẢM ƠN')
    try {
      await axios.delete('http://localhost:7000/shopcart') 
      
    } catch (error) {
      console.log('error');
    }
  } 
   
  return (
    <>
    <div className={styles.container}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h2 className={styles.first_h2}>----- Giỏ Hàng -----</h2>
       {
          (data.length==0)?<div className={styles.nothing}> Không có sản phẩm trong giỏ hàng</div>:(
            data.map((item,index)=>
            {             
              {         
                return <div key={index} className={styles.items}>
                
                <div className={styles.item_partner1} >
                  <img className={styles.item_scr} src={item.imgscr}/>
                  {/* <input 
                    type="number" 
                     defaultValue='1'
                     value={a[item.id]}
                     onChange={e=>setA(prev=> ({...prev,a:e.target.value}))}/> */}
                <h4>{item.title}</h4>
                </div>
                <div className={styles.item_partner}>
                <h4>{item.price/1000}.000 đ </h4>
                <button onClick={()=>handlerDelete(item.id)}>X</button>
                </div>
              </div>
              }
            })
          )
        }
        
    </div>
    <div className={styles.payment}> 
     
    <h2>TỔNG HÓA ĐƠN: {itemCount} </h2>
    <button  className={styles.paymentBnt} onClick={handlerPayment}>THANH TOÁN</button>
 </div>
 </>
  )
}

export default Shopcart