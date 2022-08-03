import {Link} from 'react-router-dom'
import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  const Navs = [
    {link: '/happysummer', desc: 'HAPPY SUMMER'},
    {link: '/kidsbox', desc: 'KIDS BOX'},
    {link: '/buy1get3', desc: 'MUA 1 ĐƯỢC 3'},
    {link: '/mybox', desc: 'MY BOX'},
    {link: '/combo', desc: 'LIMO & COMBO'},
  ];
  return (
    <div className={styles.container}>
     <ul className={styles.content}>
        {Navs.map((item, index) => {
          return <li key={index}>
                  <Link className={styles.link} to={item.link}>
                      {item.desc}
                  </Link>
                </li>
        })}
      </ul>

    </div>
  )
}

export default Navbar
