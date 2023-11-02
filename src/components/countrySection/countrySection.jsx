import * as React from 'react';
import { FaPhone, FaMap } from "react-icons/fa6";
import './countrySection.scss';
import koreaFlag from '../../assets/korea.png';
import taiwanFlag from '../../assets/taiwan.png';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export const CountrySection = () => {
    return (
        <>
            <div className='section container text-center'>
                <h3 className='section-heading'>Lựa chọn điểm đến của bạn   </h3>
                <div className='country'>
                    <div className='flag'>
                        <div className='flag-img'>
                            <img src={koreaFlag}/>
                            <div className='flag-description text-center'>
                                <h5>Du học Hàn Quốc</h5>
                                <button className='read-more-btn'>Khám phá ngay</button>
                            </div>
                        </div>
                    </div>
                    <div className='flag'>
                        <div className='flag-img'>
                            <img src={taiwanFlag}/>
                            <div className='flag-description text-center'>
                                <h5>Du học Đài Loan</h5>
                                <button className='read-more-btn'>Khám phá ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}