import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Shopcart.module.css'

const Shopcart = (props) => {
  const {product,item,handlerDelete} = props
  const [products,setProducts] = ([])
  
  const getItemShopCart = async () =>
    {   
      
       try {
        const res = await axios.get('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/shopcart.json')
        console.log(res);
        setProducts(Object.values(res.data))
       } catch (error) {
        console.log('errror');
       }
    } 
    useEffect(()=>
    {
      getItemShopCart()
    },[])
  // const handlerDelete = async (item) =>{
  //   setItems(items)
  //   try {
  //     await axios.delete('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/shopcart.json',items)
  //   } catch (error) {
  //     console.log('error');
  //   }
  // }
  console.log(products);
  return (
    <div className={styles.container}>
      <h2>-----Giỏ Hàng------</h2>
       {
          // (product.length==0)?<h1>Nothing</h1>:(
          //   product.map((item,index)=>
          //   {
          //     return <div key={index} className={styles.items}>
          //       <img src={item.imgscr}></img>
          //       <h6>{item.title}</h6>
          //       <h6>{item.price}</h6>
          //       <h6>Số Lượng</h6>
          //       <button onClick={()=>handlerDelete(item.id)}>X</button>
          //     </div>
          //   })
          // )
        }
       
      
    </div>
  )
}

export default Shopcart