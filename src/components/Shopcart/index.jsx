import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Shopcart.module.css'

const Shopcart = (props) => {
  const {products,item,handlerDelete} = props
  // const [products,setProducts] = useState([])

  const [items,setItems] = useState([])



  // const getItemShopCart = async () =>
  //   {   
      
  //      try {
  //       const res = await axios.get('http://localhost:7000/shopcart')
  //       setProducts([[res.data][0]])

  //       setProducts([res.data])
       
  //      } catch (error) {
  //       console.log('error');
  //      }
  //   } 
  //   useEffect(()=>
  //   {
  //     getItemShopCart()
  //   },[])


  

  return (
    <div className={styles.container}>
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
                <h2>{item.count}</h2>
                <button onClick={handlerDelete}>X</button>
              </div>
              }
            })
          )
        }
    </div>
  )
}

export default Shopcart