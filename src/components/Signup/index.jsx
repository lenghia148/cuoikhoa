import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Singup.module.css'
import Header from "../../components/Header";
import FormSignup from "../../components/FormSignup";
const Signup = () => {
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
    <div>
      <Header></Header>
      <FormSignup></FormSignup>
    </div>
  );
};

export default Signup;
