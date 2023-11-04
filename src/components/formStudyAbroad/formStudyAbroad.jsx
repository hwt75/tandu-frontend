import * as React from "react";
import "./formStudyAbroad.scss";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const FormStudyAbroad = () => {
  const [office, setOffice] = React.useState("Văn Phòng*");
  const [country, setCountry] = React.useState("Quốc gia định du học*");
  const [yearNumber, setYearNumber] = React.useState("Năm học dự kiến*");
  const [reason, setReason] = React.useState("Vì sao bạn biết đến chúng tôi*");

  const countrys = [
    { id: 1, label: "Nhật bản" },
    { id: 2, label: "Mỹ" },
    { id: 3, label: "Pháp" },
    { id: 4, label: "Đức" },
  ];
  const offices = [{ id: 1, label: "Văn phofhg chính phủ" }];
  const years = [
    { id: 1, label: "1 năm" },
    { id: 2, label: "2 năm" },
  ];
  const reasons = [{ id: 1, label: "Bạn bè giới thiệu" }];

  const [formData, setFormData] = React.useState({
    office: "",
    country: "",
    yearNumber: "",
    reason: "",
    name: "",
    email: "",
    firstName: "",
    phoneNumber: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData, "hellio");
  };
  return (
    <div className="form-study">
      <div className="container">
      <div className="formStudyAbroad">
        <div className="header">
          <span className="titleForm text-light">Bạn muốn đi du học ?</span>
        </div>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 ">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="input1"
                  placeholder="Tên*"
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="input2"
                  name="email"
                  placeholder="Email*"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-4">
                <DropdownButton
                  id="country"
                  title={country}
                  className="form-control customSelect"
                >
                  {countrys.map((option) => (
                    <Dropdown.Item
                      onClick={() => {
                        formData.country = option.label;
                        setCountry(option.label);
                      }}
                      onChange={handleInputChange}
                      key={option.id}
                    >
                      {option.label}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group mb-5">
                <DropdownButton
                  id="office"
                  title={office}
                  className="form-control customSelect"
                >
                  {offices.map((option) => (
                    <Dropdown.Item
                      onClick={() => {
                        formData.office = option.label;
                        setOffice(option.label);
                      }}
                      onChange={handleInputChange}
                      key={option.id}
                    >
                      {option.label}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group mb-4 customFormGroupLeft">
                <button
                  type="submit"
                  className="btn customButton bg-primary"
                //   style={{ backgroundColor: "	#98FB98" }}
                >
                  <div className="me-4 mb-1 text-light">Liên hệ ngay</div>
                  <BsFillArrowRightCircleFill className="text-light"/>
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="input3"
                  name="firstName"
                  placeholder="Họ*"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="input4"
                  name="phoneNumber"
                  placeholder="SĐT*"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group mb-4">
                <DropdownButton
                  id="yearNumber"
                  title={yearNumber}
                  className="form-control customSelect"
                >
                  {years.map((option) => (
                    <Dropdown.Item
                      onClick={() => {
                        formData.yearNumber = option.label;
                        setYearNumber(option.label);
                      }}
                      onChange={handleInputChange}
                      key={option.id}
                    >
                      {option.label}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group mb-5">
                <DropdownButton
                  id="reason"
                  title={reason}
                  className="form-control customSelect"
                >
                  {reasons.map((option) => (
                    <Dropdown.Item
                      onClick={() => {
                        formData.reason = option.label;
                        setReason(option.label);
                      }}
                      onChange={handleInputChange}
                      key={option.id}
                    >
                      {option.label}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </div>
              <div className="form-group mb-4 customFormGroupRight">
                <button
                  className="btn customButton "
                >
                  <div className="me-2 mb-1 phonenumber">123456789 (Hotline)</div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>

  );
};

export default FormStudyAbroad;
