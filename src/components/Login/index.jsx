import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import styles from "./Login.module.css";
import Example from "../Notifications";

import Notifications from "../Notifications";
const Login = ({acount,setAcount,isUser,setIsUser}) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [database, setDatabase] = useState([]);
  const [users, setUsers] = useState({});
  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:7000/users"
      );     
      setLoading(false);
      setDatabase(Object.values(res.data));
      console.log(database);
    
    } catch (error) {
      console.log('hello error');
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handlerSubmit = (e) =>
  {
    e.preventDefault();
    const userLogin = database.find((item,index)=>
    {
        return (item.mail ===mail &&  item.password === password)
    })
    if (userLogin!=null)
    { 
      setAcount(false)
      setIsUser(true)
      userLoginNow(userLogin)
      alert('success')
    }
    else{
      alert('fail')
    }
  }
  const userLoginNow = async (user)=>
  {
    try {
       await axios.post('http://localhost:7000/user',user)
    } catch (error) {
      console.log('error');
    }
  }
  return (
    
    <form className={styles.form_login}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <a className={styles.closeBnt} onClick={()=>setAcount(false)}><img src="https://cdn.pizzahut.vn/images/Web_V3/Member/close.png" alt="" /></a>
      <div className={styles.img_login}>
        <img
          src="https://cdn.pizzahut.vn/images/Web_V3/Member/EN-1548x1557.jpg"
          alt=""
        />
      </div>
      <div className={styles.form_container}>
        <div className={styles.container_header}>
          <h1>🍕🍕 WELCOME BACK!</h1>
          <h2>
                BẠN ĐÃ LÀ THÀNH VIÊN HUT REWARDS!
          </h2> 
          <h2>ĐĂNG NHẬP
              TRƯỚC KHI THANH TOÁN ĐỂ TÍCH ĐIỂM – ĐỔI PIZZA NHÉ!</h2>
          
        </div>
        <label><h4>Email *</h4></label>
        <input type="email" value={mail} className={styles.input}
              onChange={(e) =>
              setMail(e.target.value)
            }></input>
        <label><h4>Mật khẩu *</h4></label>
        <input type="password" value={password} className={styles.input}
              onChange={(e) =>
              setPassword(e.target.value)}
             ></input>
        <button onClick={handlerSubmit} className={styles.loginBnt}>ĐĂNG NHẬP</button>
        <div className={styles.register_message}>
          Bạn chưa có tài khoản? <Link to={'./signup'} className={styles.signupLink}>Đăng ký ngay</Link> hoặc tìm hiểu thêm về Điều
          khoản và Quyền lợi Thành viên 
        </div>
        
      </div>
    </form>

  );
};

export default Login;
