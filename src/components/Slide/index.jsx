import React,{useState,useEffect} from 'react'
import axios from 'axios';
import styles from './Slide.module.css'
const Slide = () => {
  const [database,setDatabase] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(false)
  const [show,setShow] = useState(2)
  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:7000/slide"
      );
      
      setLoading(false);
      setDatabase(Object.values(res.data[0]));
        
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(()=>
  { 
    if(show< -1)
    {
      setShow(2)
    }
    setTimeout(()=>setShow(preState=>preState-1),3000)
  },[show])
  
  return (
    
    <div>
    
         <img className={styles.imgSlide} src={ database[show]|| 'https://cdn.pizzahut.vn/images/Web_V3/Homepage/VN-Web-Hompage-BOGO-REG_MN6EL_120720221019.jpg'} alt="" />
    </div>
  )
}

export default Slide