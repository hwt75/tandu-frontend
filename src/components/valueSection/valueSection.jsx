import * as React from 'react';
import { FaPhone, FaMap } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './valueSection.scss';
import 'animate.css';
import giatri from '../../assets/giatri.png';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export const ValueSection = () => {
    AOS.init();
    return (
        <>
        <section className="value">
            <div className="container"> 
            <div className="row">
                <div className="col-md-4 mb-md-0 mb-4">
                    <p className="heading">Giá Trị Cốt Lõi</p>
                    <div className="title-box"><h3 className="title">GSE - Nơi chắp cánh ước mơ và kiến tạo tương lai</h3></div>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolore nulla minus ullam eligendi laboriosam, sit error repudiandae. Numquam quia quasi tempore magnam reiciendis, ratione dolorum beatae corporis natus, totam dignissimos maiores.
                    </p>
                </div>
                <div className="col-md-8 img-box mb-3">
                    <img src= {giatri} className="intro-img"/>
                </div>
            </div>
            <button className='read-more-btn'>Xem thêm</button>
            </div>
      </section>
        </>
    )
}