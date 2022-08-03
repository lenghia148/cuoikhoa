import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Shopcart.module.css'

const Shopcart = (props) => {
  const {product,item,handlerDelete} = props
  const [products,setProducts] = useState([])
  
  const getItemShopCart = async () =>
    {   
      
       try {
        const res = await axios.get('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/shopcart.json')
        setProducts([res.data])
        // let resItems = Object.keys(res.data).length
        // let resValue = Object.values(res.data)  
        // var resTotal = []
        // for (let i =0; i<resItems.length;i++)
        //    {
            
        //    } 
          
        // console.log(resValue);
       } catch (error) {
        console.log('error');
       }
    } 
    useEffect(()=>
    {
      getItemShopCart()
    },[])

  // console.log(products);

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