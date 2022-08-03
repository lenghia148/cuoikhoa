import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Shopcart.module.css'

const Shopcart = (props) => {
  const {product,item,handlerDelete} = props
  const [products,setProducts] = useState([])

  const [items,setItems] = useState([])

  

  const getItemShopCart = async () =>
    {   
      
       try {
        const res = await axios.get('http://localhost:7000/shopcart')


        
       
        setProducts([[res.data][0]])

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


  

  return (
    <div className={styles.container}>
      <h2>-----Giỏ Hàng------</h2>
       {
          (products.length==0)?<h1>Nothing</h1>:('hello'
            // products.forEach((item,index)=>
            // {
               
            //   { 
                  
            //   //   console.log(a);
            //   //   return <div key={b} className={styles.items}>
            //   //   <img src={a.imgscr}></img>
            //   //   <h6>{a.title}</h6>
            //   //   <h6>{a.price}</h6>
            //   //   <h6>Số Lượng</h6>
            //   //   {/* <button onClick={()=>handlerDelete(a.id)}>X</button> */}
            //   // </div>
            //   }
             
            // })
            
          )
          
        }
       
      
    </div>
  )
}

export default Shopcart