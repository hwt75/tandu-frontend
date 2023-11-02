import * as React from "react";
import "./index.scss";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BsFacebook} from 'react-icons/bs';
import {PiPhoneCallFill} from 'react-icons/pi';
import {SiZalo} from  "react-icons/si"
const Home = () => {
  return (
   <div className="facebook">
    <BsFacebook className="loader_cube loader_cube--color"/>
    <PiPhoneCallFill className="loader_cube loader_cube--color phone"/>
    <SiZalo className="loader_cube loader_cube--color zalo"/>
   </div>
  );
};

export const IconSideBar = Home;