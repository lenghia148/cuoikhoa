import React,{useState,useEffect} from "react";
import styles from "./FormSignup.module.css";
import axios from "axios";

const FormSignup = () => {
    const [user,setUser] = useState({})
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [mail,setMail] = useState('')
    const [phoneNumer,setPhoneNumer] = useState('')
    const [birthDay,setBirthDay] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [database, setDatabase] = useState([]);
    const [checkbox1,setCheckbox1] =useState(false)
    const [checkbox2,setCheckbox2] =useState(false)
    const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:7000/users"
      );
     
      setLoading(false);
      setDatabase(Object.values(res.data));
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const handlerSubmitRe =  async (e) => {
    // e.preventDefault();
    setUser({
      name,
      phoneNumer,
      password,
      mail,
      birthDay
    })
    try {
      if(checkbox1 && checkbox2 )
        {
          await axios.post(
            "http://localhost:7000/users",user
          );
          getData();
          setLoading(false);
        }
     else {
          alert('check')
     }
    } catch (error) {
      setError(true);
    }
  };

  return (
    
    <div className={styles.container}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div><img src="https://cdn.pizzahut.vn/images/Web_V3/Member/3054x201.jpg" alt="" /></div>
      <h2 className={styles.h2}>🍕🍕 TÍCH ĐIỂM ĐỔI PIZZA NÀO!</h2>
      <h3 className={styles.h3}>THAM GIA HUT REWARDS
      VÀ BẮT ĐẦU HÀNH TRÌNH TÍCH ĐIỂM CỦA BẠN!</h3>
    <form action="" className={styles.form}>
      <div className={styles.form_right}>
        <label htmlFor="">Tên *</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/> 
        <label htmlFor="">Ngày sinh *</label>
        <input type="date" name=""  value={birthDay} onChange={(e)=>setBirthDay(e.target.value)}/>
        <label htmlFor="">Số điện thoại *</label>
        <input type="number" name=""   value={phoneNumer} onChange={(e)=>setPhoneNumer(e.target.value)}/>
        <label htmlFor="">Địa chỉ Email *</label>
        <input type='email' name=""  value={mail} onChange={(e)=>setMail(e.target.value)}/>
      <div className={styles.confirm_one}>
        <input type="checkbox" className={styles.confirm_checkbox} id="hello" defaultChecked={checkbox1}  onChange={()=>setCheckbox1(!checkbox1)} />
        <div>Tôi đồng ý trở thành Thành viên Hut Rewards và chấp nhận các Điều khoản & Điều kiện và Chính sách bảo mật của Pizza Hut.</div>
      </div>
      </div>
        <div className={styles.form_left}>
          <label htmlFor="">Mật khẩu *</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <label htmlFor="">Xác nhận mật khẩu *</label>
          <input type="password" />
          <div className={styles.note}><h3>Mật khẩu ít nhất 8 ký tự và đáp ứng 4 điều kiện sau:</h3>
          <div>Các số 0-9. Ví dụ: 2, 6, 7</div>
          <div>Các chữ cái thường (nhỏ) a-z. Ví dụ: a, e, r</div>
          <div>Chữ cái viết hoa (in hoa) A-Z. Ví dụ: A, E, R</div>
          <div>Các ký tự đặc biệt như !@#$</div>
          </div>
          <div className={styles.confirm_one}>
        <input type="checkbox" className={styles.confirm_checkbox2} name=""  defaultChecked={checkbox2}  onChange={()=>setCheckbox2(!checkbox2)}/>
        <div className={styles.confirm_checkbox3}>
              Tôi đồng ý trở thành Thành viên Hut Rewards và chấp nhận các Điều khoản & Điều kiện và Chính sách bảo mật của Pizza Hut.</div>
        </div>
        </div>
  
      </form>
      <button type="submit" onClick={handlerSubmitRe} className={styles.resigerBnt}>ĐĂNG KÝ</button>
    </div>
  );
};

export default FormSignup;
