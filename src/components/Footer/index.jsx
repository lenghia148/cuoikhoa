import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.Footer}>
        <div className={styles.footerPartOne}>
            <div className={`${styles.OneItems} ${styles.footerPartOne__1}`} >
                    <h3>MENU</h3>
                    <a>Kids Box</a>
                    <a>Mua 1 được 3</a>
                    <a>My Box</a>
                    <a>LIMO & COMBO</a>
                    <a>Pizza</a>
            </div>
            <div className={`${styles.OneItems}`} >
                    <h3>VỀ CHÚNG TÔI</h3>
                    <a>Giới Thiệu</a>
                    <a>Tầm Nhìn Của Chúng Tôi</a>
                    <a>Giá Trị Cốt Lõi</a>
                    <a>Vệ Sinh An Toàn Thực Phẩm</a>
            </div> 
            <div className={`${styles.OneItems}`} >
                    <h3>TÌM CỬA HÀNG</h3>
                    <a>Miền Bắc</a>
                    <a>Miền Trung</a>
                    <a>Miền Nam</a>
                    
            </div>
            <div className={`${styles.OneItems}`} >
                    <h3>THÔNG TIN TUYỂN DỤNG</h3>
                    <a>Làm Việc tại Pizza Hut</a>
                    <a>Môi Trường Làm Việc</a>
                    <a>Cơ Hội Nghề Nghiệp</a>
                    
            </div>
            <div className={`${styles.OneItems}`} >
                    <h3>LIÊN HỆ VỚI PIZZA HUT</h3>
                    <a className={styles.footerIcon}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Facebook-icon-1.png/600px-Facebook-icon-1.png" alt="" />
                        <img src="https://cdn-icons-png.flaticon.com/512/1400/1400856.png" alt="" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbE803DAz8ADZhNwHILVisPkUbFqPbL1aW9A&usqp=CAU" alt="" />
                    </a>
                    <h3>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h3>
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
        <div className={styles.footerPartTwo}>
                <div>
                    <div>
                        <p>Công ty TNHH Pizza Việt Nam</p>
                        <p>Số ĐKKD: 0303902751</p>

                    </div>
                    <div>
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