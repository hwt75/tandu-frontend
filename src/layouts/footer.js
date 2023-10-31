import * as React from "react";
import { FaPhone, FaFacebook, FaSquareTwitter, FaInstagram, FaLinkedin} from "react-icons/fa6";
import './footer.scss';
import logo from "../assets/logo-1.png";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content container">
                    <div className="row">
                        <div className="footer-item col-lg-4">
                            <a><img src={logo} className="company-logo"/></a>
                            <p className='company-phone'><FaPhone className='text-white'/> <span className='phone-number'>0123456789 (Hotline)</span></p>
                            <ul className="list-office">
                                <li className="office-item">
                                    <p className="p-heading mb-2">Trụ sở </p>
                                    <span>Hà Nội: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội | Tel: <span className="fw-bold">0123456789</span> | Hotline: <span className="fw-bold">0123456789</span></span>
                                </li>
                                <li className="office-item">
                                    <p className="p-heading mb-2">Trụ sở </p>
                                    <span>Hà Nội: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội | Tel: <span className="fw-bold">0123456789</span> | Hotline: <span className="fw-bold">0123456789</span></span>
                                </li>
                                <li className="office-item">
                                    <p className="p-heading mb-2">Trụ sở </p>
                                    <span>Hà Nội: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội | Tel: <span className="fw-bold">0123456789</span> | Hotline: <span className="fw-bold">0123456789</span></span>
                                </li>
                                <li className="office-item">
                                    <p className="p-heading mb-2">Trụ sở </p>
                                    <span>Hà Nội: Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội | Tel: <span className="fw-bold">0123456789</span> | Hotline: <span className="fw-bold">0123456789</span></span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8 row">
                            <div className="footer-item col-md-4">
                                <p className="p-heading">Về TanDu</p>
                                <ul className="menu-list">
                                    <li className="menu-item"><a>Giới thiệu về Tân Du</a></li>
                                    <li className="menu-item"><a>Việc làm</a></li>
                                    <li className="menu-item"><a>Liên hệ với chúng tôi</a></li>
                                    <li className="menu-item"><a>Chính sách bảo mật</a></li>
                                </ul>
                            </div>
                            <div className="footer-item col-md-4">
                            <p className="p-heading">Quốc gia du học</p>
                                <ul className="menu-list">
                                    <li className="menu-item"><a>Du học Anh</a></li>
                                    <li className="menu-item"><a>Du học TBN</a></li>
                                    <li className="menu-item"><a>Du học Hàn</a></li>
                                    <li className="menu-item"><a></a></li>
                                    <li className="menu-item"><a></a></li>
                                </ul>
                            </div>
                            <div className="footer-item col-md-4">
                            <p className="p-heading">Thông tin hữu ích</p>
                                <ul className="menu-list">
                                    <li className="menu-item"><a>Học bổng</a></li>
                                    <li className="menu-item"><a>Lịch</a></li>
                                    <li className="menu-item"><a>Dịch vụ</a></li>
                                </ul>
                            </div>
                            <ul className="social-list">
                                <li className="social-icon"><FaFacebook id="fb-icon"/></li>
                                <li className="social-icon"><FaSquareTwitter id="twitter-icon"/></li>
                                <li className="social-icon"><FaInstagram id="ig-icon"/></li>
                                <li className="social-icon"><FaLinkedin id="link-icon"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="copyright">
                    @Copyright 2023 – Công ty cổ phần Tân Du.
                </p>
            </footer>
        </>
    )
}