import * as React from "react";
import "./index.scss";
import contactImg from '../../assets/image/contact.png'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { DevelopmentComponent } from "../../components/developmentComponent/home";
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";
import {ContactComponent } from "../../components/contact/contact";

const Home = () => {
  return (
    <div className="contact">
      <AboutUsSection image={`${contactImg}`} title="Liên hệ với Tân Du"/>
      <ContactComponent />
    </div>
  );
};

export const ContactPage = Home;