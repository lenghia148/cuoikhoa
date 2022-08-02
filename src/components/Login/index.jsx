import React,{useState,useEffect} from "react";
import axios from 'axios'
import styles from "./Login.module.css";
const Login = () => {
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
        "https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
      );     
      setLoading(false);
      setDatabase(Object.values(res.data));
    
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
      alert('success')
    }
    else{
      alert('fail')
    }
  }
  return (
    <form className={styles.form_login}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
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
            YOU'VE REGISTERED AS HUT REWARDS MEMBER. MAKE SURE YOU LOGIN BEFORE
            CHECKOUT TO EARN POINTS FOR FREE PIZZAS!
          </h2>
        </div>
        <label>Email *</label>
        <input type="email" value={mail} className={styles.input}
              onChange={(e) =>
              setMail(e.target.value)
            }></input>
        <label>Mật khẩu *</label>
        <input type="password" value={password} className={styles.input}
              onChange={(e) =>
              setPassword(e.target.value)}
             ></input>
        <button onClick={handlerSubmit}>LOGIN</button>
        <div className={styles.register_message}>
          Bạn chưa có tài khoản? <a>Đăng ký ngay</a> hoặc tìm hiểu thêm về Điều
          khoản và Quyền lợi Thành viên
        </div>
      </div>
    </form>
  );
};

export default Login;
