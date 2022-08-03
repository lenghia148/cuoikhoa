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
<<<<<<< HEAD
        <li key={1} ><Link className={styles.link} to='/happysummer'>HAPPY SUMMER</Link></li>
        <li key={2} ><Link className={styles.link} to= '/kidsbox'>KIDS BOX</Link></li>
        <li key={3} ><Link className={styles.link} to='/buy1get3'>MUA 1 ĐƯỢC 3</Link></li>
        <li key={4} ><Link className={styles.link} to='/mybox'>MY BOX</Link></li>
        <li key={5} ><Link className={styles.link} to='/combo'>LIMO & COMBO</Link></li>
    
    </ul>
=======
        {Navs.map((item, index) => {
          return <li key={index}>
                  <Link className={styles.link} to={item.link}>
                      {item.desc}
                  </Link>
                </li>
        })}
      </ul>
>>>>>>> 8831a310208aaa7ff42e2971212a05186621b70b
    </div>
  )
}

export default Navbar
