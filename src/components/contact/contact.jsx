import * as React from 'react';
import { FaPhone, FaMap } from "react-icons/fa6";
import './contact.scss';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


export const Contact = () => {
    return (
        <>
            <div className='contact-box col-md-6 col-xs-12'>
                <div className='contact-heading'>
                    <h4 className='company-name'>Công ty Tân Du</h4>
                    <p className='company-phone'><FaPhone className='second-color'/> <span className='phone-number'>0123456789 (Hotline)</span></p>
                </div>
                <ul className='list-office'>
                    <li className='office-item'>
                        <h5 className='office-name'>Trụ sở </h5>
                        <div className='office-desc'>
                            <p className='office-address'><FaMap className='second-color'/> Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
                            <p className='office-phone'>Tel: <span className='phone-number'>0123456789</span> | Hotline: <span className='phone-number'>0123456789</span></p>
                        </div>
                    </li>
                    <li className='office-item'>
                        <h5 className='office-name'>Trụ sở </h5>
                        <div className='office-desc'>
                            <p className='office-address'><FaMap className='second-color'/> Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
                            <p className='office-phone'>Tel: <span className='phone-number'>0123456789</span> | Hotline: <span className='phone-number'>0123456789</span></p>
                        </div>
                    </li>
                    <li className='office-item'>
                        <h5 className='office-name'>Trụ sở </h5>
                        <div className='office-desc'>
                            <p className='office-address'><FaMap className='second-color'/> Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
                            <p className='office-phone'>Tel: <span className='phone-number'>0123456789</span> | Hotline: <span className='phone-number'>0123456789</span></p>
                        </div>
                    </li>
                    <li className='office-item'>
                        <h5 className='office-name'>Trụ sở </h5>
                        <div className='office-desc'>
                            <p className='office-address'><FaMap className='second-color'/> Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội</p>
                            <p className='office-phone'>Tel: <span className='phone-number'>0123456789</span> | Hotline: <span className='phone-number'>0123456789</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}