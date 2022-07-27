import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.content}>
        <li><a>HAPPY SUMMER</a></li>
        <li><a>KIDS BOX</a></li>
        <li><a>MUA 1 ĐƯỢC 3</a></li>
        <li><a>MY BOX</a></li>
        <li><a>LIMO & COMBO</a></li>
        <li><a>PIZZA</a></li>
      </ul>
    </div>
  )
}

export default Navbar