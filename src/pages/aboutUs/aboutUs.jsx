import * as React from "react";
import "./index.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { DevelopmentComponent } from "../../components/developmentComponent/home";
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";
import { ReasonSection } from "../../components/reasonSection/reasonSection";
import { ValueSection } from "../../components/valueSection/valueSection";
import { CountrySection } from "../../components/countrySection/countrySection";
import AOS from "aos";
import ab from "../../assets/ab.png";
import avt1 from "../../assets/du-hoc-sinh-my-vu-truong-gse.jpg";
import avt2 from "../../assets/Chi-Nguyen-NTU-e1649305299975.jpg";
import { ServiceComponent } from "../../components/serviceComponent/serviceComponent";

const Home = () => {
  AOS.init();
  return (
    <div className="about">
      <AboutUsSection title="Về chúng tôi"/>
      <section className="home-introduce">
        <div className="container" data-aos="fade-up">
          <div className="introduce row">
            <div className="col-md-6">
              <p className="title">Giới thiệu chung</p>
              <div className="company-name-box">
                <h3 className="company-name">
                  Công ty cổ phần giáo dục toàn cầu Tân Du
                </h3>
              </div>
              <p className="description">
              Tân Du là một trong những trung tâm giáo dục toàn cầu được thành lập tại Việt Nam. Tân Du hoạt động với các dịch vụ như tư vấn, xử lý hồ sơ du học và xuất khẩu lao động nhanh chóng, luyện phỏng vấn, chi phí minh bạch,... chuyên nghiệp với đội ngũ nhân viên giàu kinh nghiệm tại Việt Nam, Hàn Quốc, Đài Loan, Nhật Bản, vv...
              <br/>
              Tân Du đặt uy tín và chất lượng lên hàng đầu để giúp thế hệ trẻ Việt Nam có cơ hội học tập và phát triển tại các quốc gia tiên tiến trên thế giới.
              <br />
              Bằng đội ngũ nhân sự thấu hiểu đất nước con người, bằng sự tận tâm và lòng nhiệt tình cống hiến, Tân Du Global được thành lập và hướng đến sứ mệnh giúp các bạn du học sinh “TỎA SÁNG TƯƠNG LAI” của mình.
              </p>
            </div>
            <div className="col-md-6 img-box">
              <div className="borderColor">
                <img src={ab} className="intro-img imgBody" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReasonSection />
      <ValueSection />
      <section className="countries">
        <CountrySection />
      </section>
      <section className="feedback">
        <div className="container" data-aos="fade-up">
          <div className="col-lg-6">
            <h4>Du học sinh nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">
                <div className="arrow left"><FaAngleLeft /></div>
                <div className="arrow right"><FaAngleRight /></div>
                <div className="avatar"><img src={avt1}/></div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis vel in ipsam commodi deserunt? Ipsa maxime error repellat, autem quos reiciendis et quas est assumenda asperiores maiores, sunt velit quasi esse.</div>
              </div>
              <div className="feedback-footer">
                <p><b>Vũ Trường</b> - Kaplan International College </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h4>Đối tác nói gì về Tân Du</h4>
            <div className="feedback-box">
              <div className="feedback-content">
                <div className="arrow left"><FaAngleLeft /></div>
                <div className="arrow right"><FaAngleRight /></div>
                <div className="avatar"><img src={avt2}/></div>
                <div className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident veritatis vel in ipsam commodi deserunt? Ipsa maxime error repellat, autem quos reiciendis et quas est assumenda asperiores maiores, sunt velit quasi esse.</div>
              </div>
              <div className="feedback-footer">
                <p><b>Ms. Chi Nguyen</b> - Nottingham Trent University (UK) </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join-us">
        <div className="container">
          <h2>THAM GIA VÀO ĐỘI NGŨ CÙNG CHÚNG TÔI</h2>
          <div className="btn-box"><button className="join-us-btn">JOIN OUR TEAM</button></div>
        </div>
      </section>
      <ServiceComponent />
    </div>
  );
};

export const AboutUs = Home;