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
      <form action="">
        <label htmlFor="">Tên *</label>
        <input type="text" value={user} onChange={e=>setUser(e.target.value)}/> 
        <label htmlFor="">Mật khẩu *</label>
        <input type="text" value={password} onChange={e=>setPassword(e.target.value)}/>
        {/* <label htmlFor="">Tên *</label>
                <input type="text" /> */}
        <button >ĐĂNG KÝ</button>
      </form>
    </div>
  );
};

export default FormSignup;
