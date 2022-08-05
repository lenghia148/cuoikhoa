import {Link} from 'react-router-dom'
import React from 'react'
import styles from './Navbar.module.css'

let indicatorPosition = 0;
let indicatorWidth = 0;

const Navbar = () => {
  const NAVS = [
    {link: '/happysummer', desc: 'HAPPY SUMMER'},
    {link: '/kidsbox', desc: 'KIDS BOX'},
    {link: '/buy1get3', desc: 'MUA 1 ĐƯỢC 3'},
    {link: '/mybox', desc: 'MY BOX'},
    {link: '/combo', desc: 'LIMO & COMBO'},
  ];

  const indicator = {
    position: 'absolute',
    bottom: '7px',
    width: `${indicatorWidth}px`,
    left: `${indicatorPosition}px`,
    height: '3px',
    backgroundColor: 'orange',
    height: '40px',
    zIndex: '-2',
    opacity: '0.2'
  }

  const handleClick = (event) => {
    indicatorPosition = event.target.getBoundingClientRect().left;
    indicatorWidth = event.target.getBoundingClientRect().width;
  }
  
  return (
    <div className={styles.container}>
     <ul className={styles.content}>
        {NAVS.map((item, index) => {
          return <li key={index}>
                  <Link className={styles.link} to={item.link} onClick={(e) => handleClick(e)}>
                      {item.desc}
                  </Link>
                  <div style={indicator}/>
                </li>
        })}
      </ul>

    </div>
  )
}

export default Navbar
