import * as React from "react";
import "./index.scss";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { DevelopmentComponent } from "../../components/developmentComponent/home";
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";
const Home = () => {
  return (
    <div className="contact">
<DevelopmentComponent />
    </div>
  );
};

export const AboutUs = Home;