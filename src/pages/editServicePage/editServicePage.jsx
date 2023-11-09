import * as React from "react";
import FormStudyAbroad from "../../components/formStudyAbroad/formStudyAbroad";
import FounderPerson from "../../components/founderPerson/founderPerson";
import "./editServicePage.scss";
import imgHeader from "../../assets/about-page.png";
import imgBody from "../../assets/nn-min.png";
import AOS from "aos";
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ServiceComponent } from "../../components/serviceComponent/serviceComponent";

const Home = () => {
  AOS.init();
  return (
    <>
        <AboutUsSection title="Dịch vụ sửa bài luận học bổng" />
        <section className="about-service">
            <div className="container">
                <div className="about-content">
                    <p className="title color-primary"><strong>Giới thiệu về dịch vụ</strong></p>
                    <div className="section-title"><h2 className="heading">Dịch vụ sửa bài luận học bổng</h2></div> 
                    <p className="section-description">Dịch vụ sửa bài luận học bổng là một trong những dịch vụ “độc quyền” chỉ có tại GSE. Dịch vụ sửa chửa bài luận học bổng tại GSE là dịch vụ đáp ứng nhu cầu làm hồ sơ xin học bổng được chấp nhận và xét duyệt cao nhất. Dịch vụ phát triển và thành công bởi các cựu du học sinh khối Châu Âu thế nên chúng tôi hiểu rõ tiêu chí chấm điểm cũng như cách trình bày bài luận như thế nào để đạt được điểm cao và các bước xin học bổng dễ dàng nhất. Chính vì vậy hãy để GSE giúp bạn làm việc này.</p>
                    <h2 className="heading">Dịch vụ sửa bài luận học bổng “độc quyền” cho học viên của GSE</h2>
                    <p>Để giúp các bạn sinh viên tăng phần tự tin với bộ hồ sơ xin học bổng của mình, GSE hiện đang cung cấp dịch vụ sửa bài luận học bổng cùng chuyên gia “cực phẩm” chỉ dành riêng cho các bạn sinh viên nộp hồ sơ du học cùng với GSE.
                    </p>
                    <ul>
                        <li>Thời gian: 1.30 – 5.30 chiều – Thứ 3 hàng tuần</li>
                        <li>Chuyên gia: Mr. Eddy Lawson – Chuyên gia Tư vấn Giáo dục</li>
                        <li>Đăng ký: tại đây hoặc form bên dưới bài viết</li>
                    </ul>
                    <img />
                    <h2 className="heading">Mr. Eddy – Chuyên gia Anh Quốc luôn lắng nghe & thấu hiểu HSSV Việt Nam</h2>
                    <p>Mr. Eddy đã từng giảng dạy tiếng Anh học thuật tại nhiều trường đại học Anh Quốc, bao gồm University of Nottingham – trường đại học danh tiếng thuộc Russell Group, và cũng được chứng nhận đủ tiêu chuẩn là giám khảo chấm thi IELTS. Bên cạnh đó, ông Eddy cũng có các chứng chỉ giảng dạy tiêng Anh quốc tế, như: Cambridge CELTA (Level 5) và Delta (Level 7).</p>
                    <p>Ông đã có hơn 5 năm kinh nghiệm làm việc trong lĩnh vực giảng dạy tại Việt Nam, từ các khóa học tiếng Anh chuyên ngành tại các trường đại học tại Việt Nam đến các khóa luyện thi IELTS. Chính vì vậy, ông luôn hiểu rõ được điểm mạnh và điểm yếu của HSSV Việt Nam.</p>
                    <p>Hiện nay là chuyên gia tư vấn cao cấp tại Tư vấn Du học GSE. Mr. Eddy đã tư vấn sửa bài luận và giúp rất nhiều sinh viên của GSE được nhận học bổng tại các trường đại học/cao đẳng hàng đầu và vô cùng danh giá tại nhiều quốc gia khác nhau.</p>
                    <p>Với kinh nghiệm giảng dạy tại Anh Quốc và Việt Nam, Mr. Eddy luôn hướng tới những giáo trình tiếng Anh học thuật và luyện thi IELTS phù hợp với năng lực của HSSV Việt Nam. Bên cạnh đó, là những khóa học luyện kỹ năng Nghe – Nói cho sinh viên chuẩn bị lên đường du học, nhắm giúp các bạn có cảm giác “quen thuộc hơn” với tiếng Anh bản ngữ và những chia sẻ về cuộc sống thực tế tại nước ngoài.</p>
                    <img />
                    <h2 className="heading">Bài luận học bổng – Chìa khóa thành công của hồ sơ xin học bổng</h2>
                    <p>Khi nhắm đến những suất học bổng khủng, điểm trung bình học tập và IELTS cao là một điều hiển nhiên khi bạn muốn là một trong những ứng viên tiềm năng. Tuy nhiên, số lượng ứng viên có sức học tốt không phải là ít, vì vậy, các trường đã dựa vào một yếu tố vô cùng quan trọng khác để cân nhắc xem sinh viên có xứng đáng được nhận suất học bổng đó hay không – chính là bài luận xin học bổng.</p>
                    <h2 className="heading">Thế nào là một bài luận tốt?</h2>
                    <ul>
                        <li>Nội dung mạch lạc, thuyết phục và sáng tạo</li>
                        <li>Sử dụng từ vựng tự nhiên như người bản ngữ</li>
                        <li>Mang đậm dấu ấn cá nhân, không đại trà</li>
                    </ul>
                    <h2 className="heading">Lý do bạn không nên bỏ qua cơ hội sửa bài luận cùng chuyên gia</h2>
                    <ul>
                        <li>Đây là cơ hội trao đổi trực tiếp 1:1 để chuyên gia có thể hiểu và đưa ra những ý kiến tốt nhất cho mỗi bài luận xin học bổng của sinh viên.</li>
                        <li>Các bạn được nói chuyện trực tiếp với chuyên gia bản địa và nhận được những phản hồi về bài tự luận và CV du học của mình.</li>
                        <li>Nếu bạn có bất kỳ thắc mắc nào cần giải đáp cho bài viết của mình, hoặc bạn cần những lời khuyên hữu dụng để bắt tay vào viết bài Tự luận xin học và xin học bổng.</li>
                        <li>Dịch vụ này đã và đang giúp đỡ rất nhiều bạn sinh viên làm hồ sơ du học cùng GSE đạt được những suất học bổng khủng trong suốt những năm qua, các bạn có thể tham khảo danh sách các bạn sinh viên đạt học bổng trong năm 2021.</li>
                    </ul>
                    <p>Vậy còn chần chừ gì nữa mà chưa nhanh tay đăng ký cho mình một cuộc hẹn riêng 1-1 với chuyên gia người bản ngữ để giải đáp mọi thắc mắc về cách viết hiệu quả nhất.</p>
                    <h2 className="heading">GSE sẽ hướng dẫn viết CV xin học bổng du học chuẩn</h2>
                    <p>Vì chuyên gia của Tư vấn du học GSE sẽ sửa cho riêng từng bạn rất chi tiết và cụ thể, nên mỗi buổi chúng tôi đều giới hạn số lượng người tham dự, các bạn vui lòng đăng ký đặt chỗ tại đây. Nếu như bạn không thể đăng ký trực tuyến hoặc muốn biết thêm chi tiết, vui lòng liên hệ theo số <strong>HOTLINE: 1900 7211</strong></p>
                    <p><strong>Các bạn và bậc phụ huynh có nhu cần cần tìm hiểu và tư vấn online miễn phí vui lòng liên hệ:</strong></p>
                    <p><strong><a href="" className="color-secondary">Công ty tư vấn du học</a> | GSE</strong></p>
                    <p>
                        <strong>Văn phòng Hà Nội</strong>
                        <br/><strong>Địa chỉ:</strong> 
                        <br/><strong>Số điện thoại:</strong> 
                        <br/><strong>Email:</strong> 
                    </p>
                    <p>
                        <strong>Văn phòng TP.Hồ Chí Minh</strong>
                        <br/><strong>Địa chỉ:</strong> 
                        <br/><strong>Số điện thoại:</strong> 
                        <br/><strong>Email:</strong> 
                    </p>
                    <p><strong>Fanpage: </strong><a href="" className="text-link">abc</a></p>
                    <p className="color-secondary"><strong>HOTLINE - 1900 7211 <span className="color-primary">|</span> <span className="color-primary">|</span> </strong></p>
                </div>
            </div>
        </section>
        <section className="service-step">
            <div className="container">
                <h2 className="section-title">Quy trình tư vấn du học</h2>
                <p className="section-sub-title">Quy trình tư vấn tại GSE được tuân thủ chặt chẽ và xuyên suốt quá trình du học của sinh viên</p>
                <div className="list-step">
                    <div className="row g-5">
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                        <div className="col-lg-1-5 col-md-4 col-6">
                            <div className="step-item">
                                <div className="number">1</div>
                                <p>Tư vấn lộ trình du học thông minh & tiết kiệm </p>
                                <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, blanditiis cumque nam qui sint quas quis, consectetur aliquid molestias sapiente possimus fugit quae earum corporis voluptates reiciendis suscipit eveniet consequatur officia similique?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  );
};

export const EditServicePage = Home;
