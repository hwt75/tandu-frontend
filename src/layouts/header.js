import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./header.scss";
import logo from "../assets/logo.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ModalForm from "../components/modalForm/modalForm";

const menu = [
  { id: 1, name: "Trang Chủ", path: "/" },
  { id: 2, name: "Về Chúng Tôi", path: "/about" },
  { id: 3, name: "Dịch Vụ", path: "/service" },
  { id: 4, name: "Học Bổng", path: "/scholarship" },
  { id: 5, name: "Liên Hệ", path: "/contact" },
];

export const Header = () => {
  const navigate = useNavigate();
  const sideBarToogle = () => {
    let sideBar = document.querySelector(".header-menu").classList;
    let icon = document.querySelector(".bars-icon").classList;
    let signin = document.querySelector(".btn-box-tbm").classList;
    sideBar.toggle("hidden-mb");
    icon.toggle("hidden-mb");
    signin.toggle("hidden-pc");
  };

  const [scrollY, setScrollY] = useState(0);
  const modalFormRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));

    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);

  return (
    <header>
      <div className="banner">
        <div className="banner-content container">
          <div className="hotline">
            Hotline: <span className="fw-bold">0123456789</span>
          </div>
          <div className="slogan fw-bold">
            TÂN DU – CẦU VÀNG TỎA SÁNG TƯƠNG LAI
          </div>
        </div>
      </div>
      <div className={scrollY >= 20 ? "main-header on-scroll" : "main-header"}>
        <div className="header-content container">
          <FaBars className="bars-icon" onClick={sideBarToogle} />
          <a className="main-logo" title="Du học Tân Du">
            <Image src={logo} />
          </a>
          <div className="menu">
            <ul className="header-menu hidden-mb">
              <FaXmark className="hide-icon" onClick={sideBarToogle} />
              {menu.map((item, index) => (
              <li key={item.name} onClick={()=> navigate(item.path)} className="menu-item">{item.name}</li>

              ))}
            </ul>
            <div className="btn-box hidden-mb">
              <button className="signin-btn">Đăng kí tư vấn</button>
            </div>
          </div>
          <div className="btn-box-tbm hidden-pc hidden">
            <button
              className="signin-btn"
              onClick={()=> {modalFormRef.current.open()}}
            >
              Đăng kí tư vấn
            </button>
          </div>
        </div>
      </div>
      <ModalForm ref={modalFormRef} />
    </header>
  );
};
