import * as React from "react";
import "./index.scss";
import { Navigate, useNavigate } from "react-router-dom";

const Compoent = () => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>404 Error Page #2</h1>
        <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
        <section className="error-container">
          <span className="four"><span className="screen-reader-text">4</span></span>
          <span className="zero"><span className="screen-reader-text">0</span></span>
          <span className="four"><span className="screen-reader-text">4</span></span>
        </section>
        <div className="link-container">
          <a onClick={()=> navigate('home')}  className="more-link">Visit to Home page</a>
        </div>
      </div>
    )
}
export const ErrorPage = Compoent;