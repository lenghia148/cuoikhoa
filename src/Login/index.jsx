import React,{useState,useEffect} from "react";
import axios from 'axios'
import styles from "./Login.module.css";
const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [database, setDatabase] = useState([]);
  const [users, setUsers] = useState([]);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
      );
      console.log(res.data);
      setLoading(false);
      setDatabase(Object.values(res.data));
      console.log(database);
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
        "https://cuoikhoa-eedb4-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",
        users
      );
      getData();
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
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
        <h1>🍕🍕 WELCOME BACK!</h1>
        <h2>
          YOU'VE REGISTERED AS HUT REWARDS MEMBER. MAKE SURE YOU LOGIN BEFORE
          CHECKOUT TO EARN POINTS FOR FREE PIZZAS!
        </h2>
        <label>User *</label>
        <input type="text" value={users.user} onChange={(e) =>
              setUsers((prev) => ({ ...prev, name: e.target.value }))
            }></input>
        <label>Password *</label>
        <input type="text" value={users.password} onChange={(e) =>
              setUsers((prev) => ({ ...prev, pass: e.target.value }))
            } ></input>
        <button onClick={handlerSubmitRe}>LOGIN</button>
        <div>
          Bạn chưa có tài khoản? <a>Đăng ký ngay</a> hoặc tìm hiểu thêm về Điều
          khoản và Quyền lợi Thành viên
        </div>
      </div>
    </form>
  );
};

export default Login;
