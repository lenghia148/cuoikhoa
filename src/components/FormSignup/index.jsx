import React,{useState,useEffect} from "react";
import styles from "./FormSignup.module.css";
import axios from "axios";
const FormSignup = () => {
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [database, setDatabase] = useState([]);
    const [users, setUsers] = useState([]);
    const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://login-c1022-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
      );
      // console.log(Object.values(res.data));
      setLoading(false);
      setDatabase(Object.values(res.data));
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handlerSubmitRe = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://login-c1022-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",
        users
      );
      getData();
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div><img src="https://cdn.pizzahut.vn/images/Web_V3/Member/3054x201.jpg" alt="" /></div>
      <h1>🍕🍕 TÍCH ĐIỂM ĐỔI PIZZA NÀO!</h1>
      <h3>THAM GIA HUT REWARDS
      VÀ BẮT ĐẦU HÀNH TRÌNH TÍCH ĐIỂM CỦA BẠN!</h3>
      <form action="" className={styles.form}>
        <div className={styles.form_right}>
        <label htmlFor="">Tên *</label>
        <input type="text" value={user} onChange={e=>setUser(e.target.value)}/> 
        <label htmlFor="">Ngày sinh *</label>
        <input type="date" name="" id="" />
        <label htmlFor="">Giới tính *</label>
        <input type="text" />
        <label htmlFor="">Số điện thoại *</label>
        <input type="number" name="" id="" />
        <label htmlFor="">Địa chỉ Email *</label>
        <input type="email" name="" id="" />
        <input type="checkbox" name="" id="" /><span>Tôi đồng ý trở thành Thành viên Hut Rewards và chấp nhận các Điều khoản & Điều kiện và Chính sách bảo mật của Pizza Hut.</span>

        </div>
        <div className={styles.form_left}>
          <label htmlFor="">Mật khẩu *</label>
          <input type="password" />
          <label htmlFor="">Xác nhận mật khẩu *</label>
          <input type="password" />
        </div>
  
      </form>
      <button >ĐĂNG KÝ</button>
    </div>
  );
};

export default FormSignup;
