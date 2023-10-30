import * as React from 'react';
import './index.scss';
import {AiFillHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"
import {BsList} from "react-icons/bs"
export const Component = () => {
    return (
        
        <div id="header">
            <a className="logo">
                {/* <img src="./assets/377225466_1124892828481060_4001356940655265680_n-removebg-preview.png" alt=""> */}
            </a>
            <div id="menu">
           
            <AiFillHome className='icon-home icon'/>
                <div className="item">
                    <a>Trang chủ</a>
                </div>
                <div className="item">
                    <a href="">Giới thiệu</a>
                </div>
                <div className="item">
                    <li>
                        <a href="">
                         Dịch vụ
                      </a>
                           <ul className="subnav">
                            <li><a href="#">Dịch vụ sửa bài luận học bổng</a></li>
                            <li><a href="#">Dịch vụ đào tạo</a></li>
                            <li><a href="#">Dịch vụ tư vấn du học</a></li>
                           </ul>
                    
                    </li>
                </div>
                <div className="item">
                    <li>
                          <a href="">Quốc gia</a>
                          <ul className="subnav">
                            <li><a href="#">Du học Anh</a></li>
                            <li><a href="#">Du học Úc</a></li>
                            <li><a href="#">Du học Mỹ</a></li>
                            <li><a href="#">Du học Canada</a></li>
                            <li><a href="#">Du học Ireland </a></li>
                            <li><a href="#">Du học Hà Lan</a></li>
                            <li><a href="#">Du học New Zealand</a></li>
                            <li><a href="#">Du học Singapore</a></li>
                           </ul>
                    </li>
                </div>
                <div className="item">
                    <a href="">Học bổng</a>
                </div>
                <div className="item">
                    <a href="">Tin tức mới nhất</a>
                </div>
                <div className="item">
                    <a href="">Sự kiện</a>
                </div>
                <div className="item">
                    <a href="">Liên hệ</a>
                </div>
                <button class="icon" ><BsList className="list"/></button>

            </div>
            <div id="actions">
                <div className="item">
                <AiOutlineSearch className='icon-search icon'/>
                </div>
                <div className="item">
                    <button  className="signin" href="">Đăng kí tư vấn</button>
                </div>

            </div>
                    </div>
             
        
    );
}
export const ImageCardComponent = Component;