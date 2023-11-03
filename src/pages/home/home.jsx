import * as React from "react";
import { FaMedal, FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import "./index.scss";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import banner from "../../assets/image/banner.jpg";
import tandu from "../../assets/tandu.jpg";
import adboard from "../../assets/Du-Hoc-GSE-2-1.png";

import { CountrySection } from "../../components/countrySection/countrySection";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
const Home = () => {
  AOS.init();
  return (
    <>
      <section className="home-slider">
        <img src= {banner}/>
      </section>
      <CountrySection />
      <section className="home-introduce">
        <div className="container"> 
          <div className="introduce row">
            <div className="col-md-6">
              <p className="title">Giới thiệu chung</p>
              <div className="company-name-box"><h3 className="company-name">Công ty Tân Du</h3></div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus consectetur esse consequuntur sit commodi reprehenderit, porro sapiente ipsum pariatur corporis quidem quasi ab excepturi distinctio error fugiat! Est, excepturi?
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus consectetur esse consequuntur sit commodi reprehenderit, porro sapiente ipsum pariatur corporis quidem quasi ab excepturi distinctio error fugiat! Est, excepturi?
              </p>
            </div>
            <div className="col-md-6 img-box">
              <img src= {adboard} className="intro-img"/>
            </div>
          </div>
          <div className="stat-list row">
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><FaMedal /></div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><FaMedal /></div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><FaMedal /></div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><FaMedal /></div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><FaMedal /></div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><FaMedal /></div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container " data-aos="fade-up">
          <h3 className="section-heading">Tin tức mới nhất</h3>
          <div className="list-news">
            <div className="row gx-md-5 gy-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
              <div className="col">
                <div className="news-content">
                  <a><img src={banner}/></a>
                  <div className="description">
                    <a><h4 className="news-title">Lorem ipsum dolor sit amet</h4></a>
                    <p className="news-date">02 Tháng Mười Một, 2023</p>
                    <div className="news-description">Lorem ipsum dolor sit amet consectetur...</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="news-content">
                  <a><img src={banner}/></a>
                  <div className="description">
                    <a><h4 className="news-title">Lorem ipsum dolor sit amet</h4></a>
                    <p className="news-date">02 Tháng Mười Một, 2023</p>
                    <div className="news-description">Lorem ipsum dolor sit amet consectetur...</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="news-content">
                  <a><img src={banner}/></a>
                  <div className="description">
                    <a><h4 className="news-title">Lorem ipsum dolor sit amet</h4></a>
                    <p className="news-date">02 Tháng Mười Một, 2023</p>
                    <div className="news-description">Lorem ipsum dolor sit amet consectetur...</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="news-content">
                  <a><img src={banner}/></a>
                  <div className="description">
                    <a><h4 className="news-title">Lorem ipsum dolor sit amet</h4></a>
                    <p className="news-date">02 Tháng Mười Một, 2023</p>
                    <div className="news-description">Lorem ipsum dolor sit amet consectetur...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box"><button className="more-btn">Xem thêm</button></div>
          </div>
        </div>
      </section>
      <section className="scholarship">
        <div className="container">
          <h3 className="section-heading">Học bổng du học</h3>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 uni-img">
                  <img src={banner}/>
                </div>
                <div className="col-md-6 text">
                  <div className="university">
                    <img className="logo" src={tandu}/>
                    <h5 className="uni-name">ABC</h5>
                  </div>
                  <h5 className="title"><a>Học bổng 100%</a></h5>
                  <ul className="info">
                    <li><span>Bậc học: Thạc sĩ</span></li>
                    <li><span>Giá trị: 100% học phí</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="list-scholar">
                <li><a><img src={tandu}/><span>Học bổng 50% học phí cho bậc Thạc sĩ </span></a></li>
                <li><a><img src={tandu}/><span>Học bổng 50% học phí cho bậc Thạc sĩ </span></a></li>
                <li><a><img src={tandu}/><span>Học bổng 50% học phí cho bậc Thạc sĩ </span></a></li>
              </ul>
              <a className="read-more">Xem thêm</a>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback">
        <div className="container">
          <div className="col-lg-6">
            <h4>Du học sinh nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">
                <div className="arrow left"><FaAngleLeft /></div>
                <div className="arrow right"><FaAngleRight /></div>
                <div className="avatar"><img src={tandu}/></div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis vel in ipsam commodi deserunt? Ipsa maxime error repellat, autem quos reiciendis et quas est assumenda asperiores maiores, sunt velit quasi esse.</div>
              </div>
              <div className="feedback-footer">
                <p><b>Trần Minh Tuấn</b> - Chủ tịch code dạo</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4>Đối tác nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">
                <div className="arrow left"><FaAngleLeft /></div>
                <div className="arrow right"><FaAngleRight /></div>
                <div className="avatar"><img src={tandu}/></div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis vel in ipsam commodi deserunt? Ipsa maxime error repellat, autem quos reiciendis et quas est assumenda asperiores maiores, sunt velit quasi esse.</div>
              </div>
              <div className="feedback-footer">
                <p><b>Trần Minh Tuấn</b> - Chủ tịch code dạo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partner">
        <div className="container">
          <h3 className="section-heading">Đối tác tiêu biểu</h3>
          <div className="list-partner-inner">
            <h4>Đối tác trong nước</h4>
            <div className="list-partner">
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
            </div>
          </div>
          <div className="list-partner-inner">
            <h4>Đối tác quốc tế</h4>
            <div className="list-partner">
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu}/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="form-section">
        
      </section>
    </>
  );
};

export const HomePage = Home;
