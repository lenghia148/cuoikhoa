import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Shopcart from '../../components/Shopcart'
import Navbar from '../../components/Navbar'
import styles from './Kidsbox.module.css'
const Kidsbox = () => {
  const [data,setData] = useState([])
  const [error,setError] = useState(false)
  const [products,setProducts] = useState([])
  const getData = async () =>
           {
               
                try {
                    const res = await axios.get('http://localhost:8000/kidsbox')
                    
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
    
  
    const handlerAddShopCart =  async (item,id) =>
    {   
       getItemShopCart()
        if (products.some((a)=>
        {   
          return a.title === item.title
        }))  
        {
          try {
           const res = await axios.put(
            `http://localhost:7000/shopcart/${id}`,{
              ...item,
              count : 2
            }) 
            // console.log(res);
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
    useEffect(()=>{
      handlerDelete()
    },[])
   const handlerDelete = async (id) =>
   {
      //  try {
      //    await axios.delete(`http://localhost:7000/shopcart`,item)
        
      //  } catch (error) {
      //    console.log('error');
      //  }
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
                                <img src={item.imgscr} className={styles.image} alt=''/>
                              </div>
                              <h1>{item.title}</h1>
                            </div>
                              <p>{item.discription}</p>
                            <hr className={styles.line} />
                              <div className={styles.price}>
                                  <p>Giá chỉ từ <span>{item.price}</span> đ</p>
                                  <button onClick={()=>handlerAddShopCart(item,item.id)}>CHỌN</button>
                              </div>
                         </div>
              })}
      </div>
    </div>
    <div className={styles.shopcart}>
      <Shopcart/>
    </div>
  </div>
)
}

export default Kidsbox
