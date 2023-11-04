import * as React from "react";
import "./founderPerson.scss";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import avata from "../../assets/avata.png";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import ModalHandleClickCard from "../modalHandleClickCard/modalHandleClickCard";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Card from "react-bootstrap/Card";
const FounderPerson = () => {
  const [show, setShow] = React.useState(false);
  const [infoTeacher, setinfoTeacher] = React.useState();

  const data = [
    {
      id: 1,
      name: "Pham Thi Bich Dao",
      posistion: "Giám đốc điều hành",
      quote: "hãy chiến đấu bằng tất cả sức mạnh",
      carrer: {
        title: "Kinh nghiệm làm việc",
        description: [
          {
            title:
              "Quản lý tiếp thị tại Tổ chức Du lịch Hàn Quốc, Samsung Engineeringring",
          },
          {
            title:
              "Đại diện của Công ty TNHH Unisem (The loT Smart Solution Company) tại Việt Nam (2019~2021)",
          },
          {
            title:
              "Người sáng lập kiêm Giám Đốc của HASE K&P CO.,LTD (từ 2017)",
          },
          {
            title:
              "Chuyên gia tư vấn tự do (Thương mại, Đầu tư, Chuyển đổi số, M&A) ",
          },
        ],
      },
      study: {
        title: "Học Vấn",
        description: [
          {
            title:
              "Giáo sư nghiên cứu thuộc Đại học Songho (Đồng nghiên cứu các dự án chuyển đổi số) (từ 2020)",
          },

          {
            title:
              "Thạc sĩ Thương mại Quốc tế tại Trường nghiên cứu Quốc tế Đại học Chungang (Seoul, Hàn Quốc) (2007)",
          },
          {
            title: "Cử nhân tại trường Đại học Kinh tế Quốc dân (1996)",
          },
          {
            title:
              "Cử nhân tại trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội (2002)",
          },
        ],
      },
    },
    {
      id: 2,
      name: "Hàn Huy Dũng",
      posistion: "Giám đốc điều hành",
      quote: "hãy chiến đấu bằng tất cả sức mạnh",
      carrer: {
        title: "Kinh nghiệm làm việc",
        description: [
          {
            title:
              "Quản lý tiếp thị tại Tổ chức Du lịch Hàn Quốc, Samsung Engineeringring",
          },
          {
            title:
              "Đại diện của Công ty TNHH Unisem (The loT Smart Solution Company) tại Việt Nam (2019~2021)",
          },
          {
            title:
              "Người sáng lập kiêm Giám Đốc của HASE K&P CO.,LTD (từ 2017)",
          },
          {
            title:
              "Chuyên gia tư vấn tự do (Thương mại, Đầu tư, Chuyển đổi số, M&A) ",
          },
        ],
      },
      study: {
        title: "Học Vấn",
        description: [
          {
            title:
              "Giáo sư nghiên cứu thuộc Đại học Songho (Đồng nghiên cứu các dự án chuyển đổi số) (từ 2020)",
          },

          {
            title:
              "Thạc sĩ Thương mại Quốc tế tại Trường nghiên cứu Quốc tế Đại học Chungang (Seoul, Hàn Quốc) (2007)",
          },
          {
            title: "Cử nhân tại trường Đại học Kinh tế Quốc dân (1996)",
          },
          {
            title:
              "Cử nhân tại trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội (2002)",
          },
        ],
      },
    },
    {
      id: 3,
      name: "Trịnh Văn Kiểm",
      posistion: "Giám đốc điều hành",
      quote: "hãy chiến đấu bằng tất cả sức mạnh",
      carrer: {
        title: "Kinh nghiệm làm việc",
        description: [
          {
            title:
              "Quản lý tiếp thị tại Tổ chức Du lịch Hàn Quốc, Samsung Engineeringring",
          },
          {
            title:
              "Đại diện của Công ty TNHH Unisem (The loT Smart Solution Company) tại Việt Nam (2019~2021)",
          },
          {
            title:
              "Người sáng lập kiêm Giám Đốc của HASE K&P CO.,LTD (từ 2017)",
          },
          {
            title:
              "Chuyên gia tư vấn tự do (Thương mại, Đầu tư, Chuyển đổi số, M&A) ",
          },
        ],
      },
      study: {
        title: "Học Vấn",
        description: [
          {
            title:
              "Giáo sư nghiên cứu thuộc Đại học Songho (Đồng nghiên cứu các dự án chuyển đổi số) (từ 2020)",
          },

          {
            title:
              "Thạc sĩ Thương mại Quốc tế tại Trường nghiên cứu Quốc tế Đại học Chungang (Seoul, Hàn Quốc) (2007)",
          },
          {
            title: "Cử nhân tại trường Đại học Kinh tế Quốc dân (1996)",
          },
          {
            title:
              "Cử nhân tại trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội (2002)",
          },
        ],
      },
    },
    {
      id: 4,
      name: "Lê Văn Cương",
      posistion: "Giám đốc điều hành",
      quote: "hãy chiến đấu bằng tất cả sức mạnh",
      carrer: {
        title: "Kinh nghiệm làm việc",
        description: [
          {
            title:
              "Quản lý tiếp thị tại Tổ chức Du lịch Hàn Quốc, Samsung Engineeringring",
          },
          {
            title:
              "Đại diện của Công ty TNHH Unisem (The loT Smart Solution Company) tại Việt Nam (2019~2021)",
          },
          {
            title:
              "Người sáng lập kiêm Giám Đốc của HASE K&P CO.,LTD (từ 2017)",
          },
          {
            title:
              "Chuyên gia tư vấn tự do (Thương mại, Đầu tư, Chuyển đổi số, M&A) ",
          },
        ],
      },
      study: {
        title: "Học Vấn",
        description: [
          {
            title:
              "Giáo sư nghiên cứu thuộc Đại học Songho (Đồng nghiên cứu các dự án chuyển đổi số) (từ 2020)",
          },

          {
            title:
              "Thạc sĩ Thương mại Quốc tế tại Trường nghiên cứu Quốc tế Đại học Chungang (Seoul, Hàn Quốc) (2007)",
          },
          {
            title: "Cử nhân tại trường Đại học Kinh tế Quốc dân (1996)",
          },
          {
            title:
              "Cử nhân tại trường Đại học Ngoại ngữ - Đại học Quốc gia Hà Nội (2002)",
          },
        ],
      },
    },
  ];
  const handleClickCard = (data) => {
    setShow(false);
    console.log(data, "data");
    setinfoTeacher(data);
    setShow(true);
  };
  const handleClose = (data) => setShow(data);
  return (
    <div className="contaier">
      <div className="topFounderPersonPage">
        <div className="title">Our Team</div>
        <div className="description">
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            suscipit quibusdam natus magni voluptate accusamus repellat quo
            officia! Veniam ad nam debitis ullam dolorem in sint, voluptate quo
            pariatur? Fugiat.
          </div>
        </div>
      </div>
      <div className="cardFounderPersonPage">
        {data.map((item) => (
          <div className="contentCardFounderPersonPage" key={item.id}>
            <Card className="customCard" style={{ width: "18rem" }}>
              <div className="square ">
                <Card.Img
                  className="imgCard"
                  variant="top"
                  src={avata}
                  onClick={() => handleClickCard(item)}
                />
              </div>
              <Card.Body className="bodyCard">
                <Card.Title className="posistion">{item.posistion}</Card.Title>
                <Card.Title className="name">{item.name}</Card.Title>
                <Card.Text className="quote">{item.quote}</Card.Text>
                <div className="icon">
                  <BsFacebook className="iconFacebook" />
                  <BsTwitter className="iconFacebook" />
                  <BsInstagram className="iconFacebook" />
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <ModalHandleClickCard
        data={infoTeacher}
        open={show}
        setshowmodal={handleClose}
        avata={avata}
      />
    </div>
  );
};

export default FounderPerson;