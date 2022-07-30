import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={`${styles.Footer}`}>
        <div className={`${styles.footerPartOne} ${styles.footer_grid}`}>
            <div className={`${styles.OneItems}`} >
                    <h3 className={styles.header}>MENU</h3>
                    <a className={styles.link}>
                        <p>Kids Box</p>
                    </a>
                    <a className={styles.link}>
                        <p>Mua 1 được 3</p>
                    </a>
                    <a className={styles.link}>
                        <p>My Box</p>
                    </a>
                    <a className={styles.link}>
                        <p>LIMO & COMBO</p>
                    </a>
                    <a className={styles.link}>
                        <p>Pizza</p>
                    </a>
            </div>
            <div className={`${styles.OneItems}`} >
                    <h3 className={styles.header}>VỀ CHÚNG TÔI</h3>
                    <a className={styles.link}>
                        <p>Giới Thiệu</p>
                    </a>
                    <a className={styles.link}>
                        <p>Tầm Nhìn Của Chúng Tôi</p>
                    </a>
                    <a className={styles.link}>
                        <p>Giá Trị Cốt Lõi</p>
                    </a>
                    <a className={styles.link}>
                        <p>Vệ Sinh An Toàn Thực Phẩm</p>
                    </a>
            </div> 
            <div className={`${styles.OneItems}`} >
                    <h3 className={styles.header}>TÌM CỬA HÀNG</h3>
                    <a className={styles.link}>
                        <p>Miền Bắc</p>
                    </a>
                    <a className={styles.link}>
                        <p>Miền Trung</p>
                    </a>
                    <a className={styles.link}>
                        <p>Miền Nam</p>
                    </a>
            </div>
            <div className={`${styles.OneItems}`} >
                    <h3 className={styles.header}>THÔNG TIN TUYỂN DỤNG</h3>
                    <a className={styles.link}>
                        <p>Làm Việc tại Pizza Hut</p>
                    </a>
                    <a className={styles.link}>
                        <p>Môi Trường Làm Việc</p>
                    </a>
                    <a className={styles.link}>
                        <p>Cơ Hội Nghề Nghiệp</p>
                    </a>
            </div>
            <div className={`${styles.OneItems}`} >
                    <h3 className={styles.header}>LIÊN HỆ VỚI PIZZA HUT</h3>
                    <div className={styles.iconContainer}>
                        <a className={styles.footerIcon}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/600px-Facebook-icon-1.png" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/512/1400/1400856.png" alt="" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbE803DAz8ADZhNwHILVisPkUbFqPbL1aW9A&usqp=CAU" alt="" />
                        </a>
                    </div>
                    <h3 className={styles.header}>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h3>
                    <a className={styles.footerIconDown}>
                        <img className={styles.footerIconDown1} src="https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/App-QR-CODE.png" alt="" />
                        <a className={styles.footerIconDown2}>
                            <img src="https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/appstore.png" alt="" />
                            <img src="https://cdn.pizzahut.vn/images/Web_V3/Homepage/Footer/playstore.png" alt="" />
                        </a>
                        
                    </a>
                    
            </div>
        </div>
        <hr/>
        <div className={`${styles.footerPartTwo}`}>
                <div>
                    <div>
                        <p>Công ty TNHH Pizza Việt Nam</p>
                        <p>Số ĐKKD: 0303902751</p>

                    </div>
                    <div className={styles.address}>
                        Số 1-3-5 đường D2 Khu dân cư phức hợp sông Sài Gòn, số 92 Nguyễn Hữu Cảnh, 
                        phường 22, quận Bình Thạnh, TP. Hồ Chí Minh
                    </div>
                </div>
                <div>
                     <p>Điều khoản & Điều kiện</p>
                     <a className={styles.TwoIcon}><img src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png" alt="" /></a>
                </div>
        </div>
    </div>
  )
}

export default Footer
