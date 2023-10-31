import * as React from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./header.scss";
import logo from "../assets/logo-1.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Image } from "react-bootstrap";

export const Header = () =>{
    const sideBarToogle = () => {
        let sideBar = document.querySelector(".header-menu").classList;
        sideBar.toggle("hidden-mb");
    }

    return (
        <header>
            <div className="banner">
                <div className="banner-content container">
                    <div className="hotline">Hotline: <span className="fw-bold">0123456789</span></div>
                    <div className="slogan fw-bold">TÂN DU – CẦU VÀNG TỎA SÁNG TƯƠNG LAI</div>
                </div>
            </div>
            <div className="main-header">
                <div className="header-content container">
                    <FaBars className="bars-icon" onClick={sideBarToogle}/>
                    <a className="main-logo" title="Du học Tân Du"><Image src={logo}/></a>
                    <ul className="header-menu hidden-mb">
                        <FaXmark className="hide-icon" onClick={sideBarToogle}/>
                        <li className="menu-item">Trang chủ</li>
                        <li className="menu-item">Về chúng tôi</li>
                        <li className="menu-item">Dịch vụ</li>
                        <li className="menu-item">Học bổng</li>
                        <li className="menu-item">Liên hệ</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}