import React,{useState,useEffect} from 'react'
import Header from '../../components/Header'
import Shopcart from '../../components/Shopcart'
import Navbar from '../../components/Navbar'
import styles from './Mybox.module.css'
import axios from 'axios'
const Mybox = () => {
  const [data,setData] = useState([])
    const [error,setError] = useState(false)
    const getData = async () =>
           {
               
                try {
                    const res = await axios.get('https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/mybox.json')
                    setData(Object.values(res.data))
                } catch (error) {
                    console.log('errror');
                }
           }
    useEffect(()=>
    {
        getData()
    },[])
   console.log(data);
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
                                  <button>CHỌN</button>
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

export default Mybox
