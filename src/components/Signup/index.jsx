import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './Singup.module.css'
import Header from "../../components/Header";
import FormSignup from "../../components/FormSignup";
const Signup = () => {
  
  return (
    <div>
      <Header></Header>
      <FormSignup></FormSignup>
    </div>
  );
};

export default Signup;
