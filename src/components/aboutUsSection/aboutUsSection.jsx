import * as React from 'react';
import './aboutUsSection.scss';
import bgImg from "../../assets/about-page.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useNavigate } from 'react-router-dom';

export const AboutUsSection = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='section' style={{ backgroundImage: `url(${props.image})` }}>
                <h1 className='section-heading'>{props.title}</h1>
                <p className='navigate' onClick={()=> navigate('/')}>Trang chủ</p>
            </div>
        </>
    )
}