import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Shopcart.module.css'

const Shopcart = (props) => {
  const {getItemShopCart,products,isPost,setIsPost} = props
  const [data,setData] = useState([])
  const [items,setItems] = useState([])
  useEffect(()=>{
    getItemShopCart()
    getData()
  },[isPost])
  const handlerDelete = async (idItem) => {
    
    try {
      await axios.delete(
        `http://localhost:7000/shopcart/${idItem}`)
        getItemShopCart()
        
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
           
            let count = data.reduce((previousValue,currentIndex,index)=>
            {
                return previousValue = previousValue + currentIndex.price
            },0)
           setItems(count)
       } catch (error) {
           console.log('errror');
       }
  }
  console.log(items);
  return (
    <>
    <div className={styles.container}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <h2>-----Giỏ Hàng------</h2>
       {
          (products.length==0)?<h1>Nothing</h1>:(
            products.map((item,index)=>
            {             
              {         
                return <div key={index} className={styles.items}>
                <img src={item.imgscr}></img>
                <h6>{item.title}</h6>
                <h5>{item.price}</h5>
                <input type="number"  className={styles.count} defaultValue={item.count}></input>
                <button onClick={()=>handlerDelete(item.id)}>X</button>
              </div>
              }
            })
          )
        }
        
    </div>
    <div className={styles.payment}> 
    <div>{items}</div>
    <div>VAT</div>
    <button>THANH TOÁN</button>
 </div>
 </>
  )
}

export default Shopcart