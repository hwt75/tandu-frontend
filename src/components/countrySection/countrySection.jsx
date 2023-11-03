import React, { useCallback, useEffect, useState } from 'react';
import { FaPhone, FaMap } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './countrySection.scss';

import { resetLoadCountriesStatus,loadStatus, getCountries } from '../../redux/dataSlice';
import { useDispatch, useSelector} from "react-redux";
import 'animate.css';
import koreaFlag from '../../assets/korea.png';
import taiwanFlag from '../../assets/taiwan.png';
import different from '../../assets/duhoc.png';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { LoadingComponent } from '../Loading';

export const CountrySection = () => {
    AOS.init();
    const dispatch = useDispatch();
    const countries = useSelector(state => state.dataSlice.countries);
   
    const loadCountriesStatus = useSelector(state => state.dataSlice.loadCountries);

    useEffect(()=>{
        dispatch(getCountries())
        console.log(loadCountriesStatus);
    },[loadCountriesStatus])
    return (
        <>
            <div className='section container text-center'>
                <h3 className='section-heading'>Lựa chọn điểm đến của bạn   </h3>
                <div className='country'>
                    { countries.length > 0 ? ( <div className='flag'>
                        <div className='flag-img'>
                            <img src={koreaFlag}/>
                            <div className='flag-description text-center'>
                                <h5>Du học Hàn Quốc</h5>
                                <button className='read-more-btn'>Khám phá ngay</button>
                            </div>
                        </div>
                    </div>) : <LoadingComponent/> }
                   
                </div>
            </div>
        </>
    )
}