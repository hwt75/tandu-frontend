import * as React from 'react';
import { FaPhone, FaMap } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './reasonSection.scss';
import 'animate.css';
import tandu from '../../assets/tandu.jpg';
import whyus1 from '../../assets/whyus1.png';
import whyus2 from '../../assets/whyus2.png';
import whyus3 from '../../assets/whyus3.png';
import whyus4 from '../../assets/whyus4.png';
import whyus5 from '../../assets/whyus5.png';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

export const ReasonSection = () => {
    AOS.init();
    return (
        <>
            <section className='reason'>
                <div className="container">
                    <div className='heading-title text-center'>
                        <h3 className="section-heading">Lý do lựa chọn GSE</h3>
                        <p className='section-sub-title'>GSE mang lại giải pháp du học uy tín và chuyên nghiệp nhất tại Việt Nam. GSE sẽ đồng hành cùng các bạn trên chặng đường phía trước với giấc mơ du học trong tầm tay, mọi thủ tục và chi phí sẽ được tối ưu nhất.</p>
                    </div>
                    <div className="list-reasons">
                        <div className="row g-5">
                            <div className="col-lg-4 col-md-6">
                                <div className="reason-item" data-aos="fade-up">
                                    <div className="img-box">
                                        <img className='background' src={whyus1}/>
                                        <div className='reason-title'><h4>Đội ngũ nhân viên chuyên nghiệp và thân thiện </h4></div>
                                    </div>
                                    <div className="desc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic, officiis tempore blanditiis at minima vitae soluta! Sequi rerum nobis laboriosam, eum voluptatum adipisci?</p></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="reason-item" data-aos="fade-up">
                                    <div className="img-box">
                                        <img className='background' src={whyus2}/>
                                        <div className='reason-title'><h4>Hợp tác và đào tạo quốc tế </h4></div>
                                    </div>
                                    <div className="desc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic, officiis tempore blanditiis at minima vitae soluta! Sequi rerum nobis laboriosam, eum voluptatum adipisci?</p></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="reason-item" data-aos="fade-up">
                                    <div className="img-box">
                                        <img className='background' src={whyus3}/>
                                        <div className='reason-title'><h4>Visa trọn gói</h4></div>
                                    </div>
                                    <div className="desc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic, officiis tempore blanditiis at minima vitae soluta! Sequi rerum nobis laboriosam, eum voluptatum adipisci?</p></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="reason-item" data-aos="fade-up">
                                    <div className="img-box">
                                        <img className='background' src={whyus4}/>
                                        <div className='reason-title'><h4>Hỗ trợ xin học bổng tại các trường THPT và trường Đại Học danh tiếng  </h4></div>
                                    </div>
                                    <div className="desc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic, officiis tempore blanditiis at minima vitae soluta! Sequi rerum nobis laboriosam, eum voluptatum adipisci?</p></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="reason-item" data-aos="fade-up">
                                    <div className="img-box">
                                        <img className='background' src={whyus5}/>
                                        <div className='reason-title'><h4>Tư vấn và định hướng</h4></div>
                                    </div>
                                    <div className="desc"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic, officiis tempore blanditiis at minima vitae soluta! Sequi rerum nobis laboriosam, eum voluptatum adipisci?</p></div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="reason-item" data-aos="fade-up">
                                    <div className="img-box">
                                        <img className='background' src={tandu}/>
                                        <div className='reason-title'><h4>TanDu nhận được rất nhiều giải thưởng từ các tập đoàn giáo dục lớn trên thế giới  </h4></div>
                                    </div>
                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus hic, officiis tempore blanditiis at minima vitae soluta! Sequi rerum nobis laboriosam, eum voluptatum adipisci?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}