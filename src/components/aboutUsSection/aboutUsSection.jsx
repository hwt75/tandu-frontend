import * as React from 'react';
import './aboutUsSection.scss';
import bgImg from "../../assets/about-page.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export const AboutUsSection = () => {
    return (
        <>
            <div className='section' style={{ backgroundImage: `url(${bgImg})` }}>
                <h1 className='section-heading'>Về chúng tôi</h1>
                <p>Trang chủ</p>
            </div>
        </>
    )
}