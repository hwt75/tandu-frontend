import * as React from "react";
import FormStudyAbroad from "../../components/formStudyAbroad/formStudyAbroad";

import FounderPerson from "../../components/founderPerson/founderPerson";
import "./index.scss";
import imgHeader from "../../assets/about-page.png";
import imgBody from "../../assets/nn-min.png";
import AOS from "aos";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ServiceComponent } from "../../components/serviceComponent/serviceComponent";

const Home = () => {
  AOS.init();
  return (
    <div className="containerServicePage">
      <div className="imgHeader">
        <img src={imgHeader} alt="" className="image" />
        <div className="title">
          <h2>Dịch vụ</h2>
          <div>Trang chủ</div>
        </div>
      </div>
      <ServiceComponent />
      <section className="founder">
          <FounderPerson data-aos="fade-up"/>
      </section>
    </div>
  );
};

export const ServicePage = Home;
