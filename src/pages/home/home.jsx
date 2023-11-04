import * as React from "react";
import { FaMedal, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/image/banner.jpg";
import tandu from "../../assets/tandu.jpg";
import adboard from "../../assets/Du-Hoc-GSE-2-1.png";

import { CountrySection } from "../../components/countrySection/countrySection";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import FounderPerson from "../../components/founderPerson/founderPerson";
const partners = [
  {
    name: "Đối tác Đài Loan",
    description : [
      {
        id: "1",
        name: "Đại học Đông Nam",
        link: "https://docs.google.com/document/d/1eYK5VXOrLXJuGrMC42NZ1JzV9i6SO4RN/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "2",
        name: "Đại học Cần Ích",
        link: "https://docs.google.com/document/d/1ED3LYWvncPrw8ki5z8wM40K4k6Tf98yv/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "3",
        name: "Đại học Dục Đạt",
        link: "https://docs.google.com/document/d/1QT4J7oleMscmJcROcVsrqYeGHGiVicBB/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "4",
        name: "Đại học Hồng Quốc Đức Lâm",
        link: "https://docs.google.com/document/d/1RiIADRNagR2acJJ8bCRidJ-3zZ4dlyIR/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "5",
        name: "Đại học KH Ứng dụng Nam Đài",
        link: "https://docs.google.com/document/d/1UHc2ynuKWnW4TwgObggF7hZqPzhnYc-c/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
      {
        id: "6",
        name: "Đại học Kiện hành",
        link: "https://docs.google.com/document/d/1-H2gzhYCI6Qi6U1L43ldB37iopOyafjc/edit?usp=drive_link&ouid=112230120660892027610&rtpof=true&sd=true",
      },
    ],
  },
 {
  name: "Đối tác Hàn Quốc",
  description : [
    {
      id: "1",
      name: "Đại học KH JEONBUK",
      link: "https://docs.google.com/document/d/1quW_KSe5eWbwd9lp6ZeXLZn-vwqGqnFZ/edit?usp=drive_link",
    },
    {
      id: "2",
      name: "Đại học SHIN ANSAN",
      link: "https://docs.google.com/document/d/1Z4SIdD0cUnkK7tJmiQqFcab5xQ96lh_d/edit?usp=drive_link",
    },
    {
      id: "3",
      name: "Đại học KYUNGMIN",
      link: "https://docs.google.com/document/d/1bXpx4tF_prgCUSdKykplt33iua0oCuCb/edit?usp=drive_link",
    },
    {
      id: "4",
      name: "ĐH DAEKYEUNG",
      link: "https://docs.google.com/document/d/1eKrFCYq96ewkp4BDESHnqvtf4YxVIX5y/edit?usp=drive_link",
    },
    {
      id: "5",
      name: "Cao đẳng KHKT DAEJEON",
      link: "https://docs.google.com/document/d/1SJEKt-vzIKFpr7PxwJm2DhqONltejS7g/edit?usp=drive_link",
    },
  ],
 }
];


const Home = () => {
  AOS.init();
  return (
    <>
      <section className="home-slider">
        <img src={banner} />
      </section>
      
      <CountrySection />
      <section className="home-introduce padding-side">
        <div className="container">
          <div className="introduce row">
            <div className="col-md-6">
              <p className="title">Giới thiệu chung</p>
              <div className="company-name-box">
                <h3 className="company-name">
                  Công ty cổ phần giáo dục toàn cầu Tân Du
                </h3>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                doloribus consectetur esse consequuntur sit commodi
                reprehenderit, porro sapiente ipsum pariatur corporis quidem
                quasi ab excepturi distinctio error fugiat! Est, excepturi?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                doloribus consectetur esse consequuntur sit commodi
                reprehenderit, porro sapiente ipsum pariatur corporis quidem
                quasi ab excepturi distinctio error fugiat! Est, excepturi?
              </p>
            </div>
            <div className="col-md-6 img-box">
              <img src={adboard} className="intro-img" />
            </div>
          </div>
          <div className="stat-list row">
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">
                  <FaMedal />
                </div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">
                  <FaMedal />
                </div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">
                  <FaMedal />
                </div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">
                  <FaMedal />
                </div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">
                  <FaMedal />
                </div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="stat-item">
                <div className="icon">
                  <FaMedal />
                </div>
                <div className="desc">
                  <p className="number">12+</p>
                  <p className="text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news padding-side">
        <div className="container " data-aos="fade-up">         
           <FounderPerson />
        </div>
      </section>
      <section className="scholarship padding-side">
        <div className="container" >
          <h3 className="section-heading">Học bổng du học</h3>
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 uni-img">
                  <img src={banner} />
                </div>
                <div className="col-md-6 text">
                  <div className="university">
                    <img className="logo" src={tandu} />
                    <h5 className="uni-name">ABC</h5>
                  </div>
                  <h5 className="title">
                    <a>Học bổng 100%</a>
                  </h5>
                  <ul className="info">
                    <li>
                      <span>Bậc học: Thạc sĩ</span>
                    </li>
                    <li>
                      <span>Giá trị: 100% học phí</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="list-scholar">
                <li>
                  <a>
                    <img src={tandu} />
                    <span>Học bổng 50% học phí cho bậc Thạc sĩ </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img src={tandu} />
                    <span>Học bổng 50% học phí cho bậc Thạc sĩ </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img src={tandu} />
                    <span>Học bổng 50% học phí cho bậc Thạc sĩ </span>
                  </a>
                </li>
              </ul>
              <a className="read-more">Xem thêm</a>
            </div>
          </div>
        </div>
      </section>
      <section className="feedback padding-side">
        <div className="container" >
          <div className="col-lg-6">
            <h4>Du học sinh nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">
                <div className="arrow left">
                  <FaAngleLeft />
                </div>
                <div className="arrow right">
                  <FaAngleRight />
                </div>
                <div className="avatar">
                  <img src={tandu} />
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Provident veritatis vel in ipsam commodi deserunt? Ipsa maxime
                  error repellat, autem quos reiciendis et quas est assumenda
                  asperiores maiores, sunt velit quasi esse.
                </div>
              </div>
              <div className="feedback-footer">
                <p>
                  <b>Trần Minh Tuấn</b> - Chủ tịch code dạo
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4>Đối tác nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">
                <div className="arrow left">
                  <FaAngleLeft />
                </div>
                <div className="arrow right">
                  <FaAngleRight />
                </div>
                <div className="avatar">
                  <img src={tandu} />
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Provident veritatis vel in ipsam commodi deserunt? Ipsa maxime
                  error repellat, autem quos reiciendis et quas est assumenda
                  asperiores maiores, sunt velit quasi esse.
                </div>
              </div>
              <div className="feedback-footer">
                <p>
                  <b>Trần Minh Tuấn</b> - Chủ tịch code dạo
                </p>
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
                <img src={tandu} />
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
            </div>
          </div>
          <div className="list-partner-inner">
            <h4>Đối tác quốc tế</h4>
            <div className="list-partner">
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
              <div className="partner-item col-lg-2 col-md-4 col-6">
                <img src={tandu} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const HomePage = Home;
