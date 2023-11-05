import * as React from "react";

import "./scholarshipPage.scss";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BsFillBookFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import taiwan from "../../assets/taiwan.png"
import korean from "../../assets/korea.png"
import { AboutUsSection } from "../../components/aboutUsSection/aboutUsSection";

const Scholarship = () => {
  const studyAbroadCountries = [
    {
      id: "1",
      name: "Du học Hàn Quốc",
    },
    {
      id: "2",
      name: "Du học Đài Loan",
    },
    
  ];
  const scholarships = {
    korean: [
      {
        id: "1",
        name: "Học bổng chính phủ",
        target: "Học sinh, sinh viên đã tốt nghiệp GPA 8.0 trở lên",
        description: "100% học phí",
      },
      {
        id: "2",
        name: "Học bổng từ các tổ chức Phi Chính phủ",
        target: "Tất cả các sinh viên",
        description:
          "30% - 100% học phí và hỗ trợ các chi phí khác (bảo hiểm, ký túc,...)",
      },
      {
        id: "3",
        name: "Học bổng từ các trường Đại học",
        target: "Sinh viên mới nhập học, sinh viên đang theo học tại trường",
        description: "30% - 100% học phí",
      },
    ],
    taiwan: [
      {
        id: "1",
        name: "Học bổng chính phủ Việt Nam",
        target: "Giảng viên, công chức nhà nước",
        description: "100% học phí và sinh hoạt phí",
      },
      {
        id: "2",
        name: "Học bổng Bộ Giáo dục Đài Loan",
        description:
          "50% - 100% học phí và một số chi phí khác (sinh hoạt phí)",
        target: "Sinh viên đang theo học hệ cử nhân, thạc sĩ, tiến sĩ",
      },
      {
        id: "3",
        name: "Học bổng từ các trường Đại học",
        description: "50% - 100% học phí và ký túc xá",
        target: "Sinh viên đang theo học tại trường",
      },
      {
        id: "4",
        name: "Học bổng từ các Quỹ phúc lợi xã hội",
        description: "Sinh viên thuộc các trường là đối tác của Quỹ",
        target:
          "30% - 100% học phí và một số chi phí khác (bảo hiểm, ký túc xá...)",
      },
    ],
  };
  return (
    <>
    <AboutUsSection title="Dịch Vụ Của Chúng Tôi"/>
    <div className="containerScholarshipPage">
      
      <div class=" row scholarshipPage">
        <div class="col-md-8 leftscholarshipPage">
          <div class="rounded">
            {Object.keys(scholarships).map((country) => (
              <div key={country} style={{ marginBottom: 50 }}>
                <div className="topLeftScholarshipPage ">
                  <div className={country === "korean" ? "md-3 korean": "md-3 taiwan"} ></div>
                  <div className="text-light fs-4">{country === "korean" ? "Học bổng Hàn Quốc": "Học bổng Đài Loan"}</div>
                </div>
                <div className="mainLeftScholarshipPage">
                  {scholarships[country].map((scholarship, index) => (
                    <div
                    key={scholarship.id}
                      className={
                        index % 2 == 0
                          ? `typesOfScholarshipsLight`
                          : `typesOfScholarshipsGrey`
                      }
                    >
                      <div >
                        <div className="nameScholarships">
                          {scholarship.name}
                        </div>
                        <div className="contentScholarships">
                          <div className="target">
                            <BsFillBookFill className="iconBook me-2" />
                            <div
                              className="nameTarget"
                              title={scholarship.target}
                            >
                              Bậc học :{scholarship.target}
                            </div>
                          </div>
                          <div className="description">
                            <RiMoneyDollarCircleFill className="iconMoney me-2" />
                            <div
                              className="title"
                              title={scholarship.description}
                            >
                              Giá trị: {scholarship.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="col-md-4 rightscholarshipPage">
          <div className="studyAbroadCountries ">
            <div className="topStudyAbroadCountries">
              <div className="name fw-bold fs-5 d-flex align-items-center pt-2">
                Quốc Gia
              </div>
            </div>
            <div className="mainStudyAbroadCountries">
              {studyAbroadCountries.map((item) => (
                <div key={item.id}>
                  <div
                    className="p-2 fw-bold fs-6"
                    style={{ cursor: "pointer" }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export const ScholarshipPage = Scholarship;
