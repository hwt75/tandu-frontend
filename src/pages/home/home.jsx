import * as React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { PiTarget, PiMedal, PiHandshake } from "react-icons/pi";
import { IoSchoolOutline, IoEarthOutline } from "react-icons/io5";
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
      <section className="home-introduce padding-side">
        <div className="container"> 
          <div className="introduce row">
            <div className="col-md-6">
              <p className="title">Giới thiệu chung</p>
              <div className="company-name-box"><h3 className="company-name">Công ty Tân Du</h3></div>
              <p className="description">
              Tân Du là một trong những trung tâm giáo dục toàn cầu được thành lập tại Việt Nam. Tân Du hoạt động với các dịch vụ như tư vấn, xử lý hồ sơ du học và xuất khẩu lao động nhanh chóng, luyện phỏng vấn, chi phí minh bạch,... chuyên nghiệp với đội ngũ nhân viên giàu kinh nghiệm tại Việt Nam, Hàn Quốc, Đài Loan, Nhật Bản, vv...
              <br/>
              Tân Du đặt uy tín và chất lượng lên hàng đầu để giúp thế hệ trẻ Việt Nam có cơ hội học tập và phát triển tại các quốc gia tiên tiến trên thế giới.
              <br />
              Bằng đội ngũ nhân sự thấu hiểu đất nước con người, bằng sự tận tâm và lòng nhiệt tình cống hiến, Tân Du Global được thành lập và hướng đến sứ mệnh giúp các bạn du học sinh “TỎA SÁNG TƯƠNG LAI” của mình.
              </p>
            </div>
            <div className="col-md-6 img-box">
              <img src= {adboard} className="intro-img"/>
            </div>
          </div>
          <div className="stat-list row">
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">< PiMedal /></div>
                <div className="desc">
                  <p className="number">10+</p>
                  <p className="text">Tân du với hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn giáo dục - du học châu Á.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">< PiTarget /></div>
                <div className="desc">
                  <p className="number">100%</p>
                  <p className="text">Đội ngũ Tân Du với 100% trình độ cao, sẽ hướng dẫn bạn từng bước chi tiết nhất.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">< PiHandshake /></div>
                <div className="desc">
                  <p className="number">100+</p>
                  <p className="text">Tân Du liên kết với hơn 100 trường đại học và doanh nghiệp danh tiếng tại châu Á.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><IoSchoolOutline /></div>
                <div className="desc">
                  <p className="number">75%</p>
                  <p className="text">Sinh viên Tân Du được nhận học bổng của các đối tác.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon"><AiOutlineLike /></div>
                <div className="desc">
                  <p className="number">98%</p>
                  <p className="text">Khách hàng hài lòng với dịch vụ của chúng tôi.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">< IoEarthOutline /></div>
                <div className="desc">
                  <p className="number">0 :( cứu</p>
                  <p className="text">Chúng tôi chưa có văn phòng. Hãy cứu chúng tôi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news padding-side">
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
      <section className="scholarship padding-side">
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
      <section className="feedback padding-side">
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
      <section className="partner padding-side">
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
      
    </>
  );
};

export const HomePage = Home;
