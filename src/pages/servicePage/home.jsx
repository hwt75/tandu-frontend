import * as React from "react";
import FormStudyAbroad from "../../components/formStudyAbroad/formStudyAbroad";

import FounderPerson from "../../components/founderPerson/founderPerson";
import "./index.scss";
import imgHeader from "../../assets/about-page.png";
import imgBody from "../../assets/nn-min.png";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  const services = [
    {
      id: "1",
      name: "Dịch vụ tư vấn",
      description:
        "Tân Du cung cấp dịch vụ tư vấn du học và xuất khẩu lao động dựa trên kinh nghiệm thực tế của các chuyên gia tư vấn và mong muốn, khả năng tài chính của khách hàng. Giải đáp thắc mắc và đưa ra những lựa chọn phù hợp nhất với yêu cầu của khách hàng.",
    },
    {
      id: "2",
      name: "Dịch vụ Đào tạo tiếng Hàn, tiếng Trung",

      description:"Với kinh nghiệm và kiến thức chuyên môn của các giáo viên, Tân Du tự tin đồng hành cùng với bạn trong những bước đầu tiên chinh phục một ngôn ngữ mới, một hành trình mới.,",
    },
    {
      id: "3",
      name: "Hỗ trợ xử lý hồ sơ và thủ tục",
      description: "Hỗ trợ xử lý hồ sơ và thủ tục",
    },
    {
      id: "4",
      name: "Ôn luyện phỏng vấn",
      description:
        "Đội ngũ giáo viên giàu kinh nghiệm của Tân Du sẽ giúp bạn ôn luyện, trả lời những câu hỏi phỏng vấn với trường, với Đại sứ quán; giúp bạn giữ vững tinh thần, tự tin bước vào vòng phỏng vấn.",
    },
    {
      id: "5",
      name: "Liên hệ với các trường Đại học tại HQ và ĐL",
      description: "Liên hệ với các trường Đại học tại HQ và ĐL",
    },
  ];
  return (
    <div className="contaierServicePage">
      <div className="imgHeader">
        <img src={imgHeader} alt="" className="image" />
        <div className="title">
          <h2>Dịch vụ</h2>
          <div>Trang chủ</div>
        </div>
      </div>
      <div>
        {services.map((item, index) => (
          <div className="bodyServicePage">
            <div
              className="rightBody"
              style={index % 2 !== 0 ? { display: "none" }: {display:"block"}}
            >
              <h2 className="name">{item.name}</h2>
              <div className="description">{item.description}</div>
              <a className="viewMore"> Xem thêm</a>
            </div>
            <div className="leftBody">
              <div className="borderColor">
                <img src={imgBody} alt="" className="imgBody" />
              </div>
            </div>
            <div
              className="rightBody"
              style={index % 2 === 0 ? { display: "none" }: {display:"block"}}
            >
              <h2 className="name">{item.name}</h2>
              <div className="description">{item.description}</div>
              <a className="viewMore"> Xem thêm</a>
            </div>
          </div>
        ))}
      </div>
      <FounderPerson/>
    </div>
  );
};

export const ServicePage = Home;
