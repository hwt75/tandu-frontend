import * as React from "react";
import "./modalHandleClickCard.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {RxDash} from "react-icons/rx"
import Modal from "react-bootstrap/Modal";
const ModalHandleClickCard = ({ data, open, setshowmodal, avata }) => {
  const handleClose = () => setshowmodal(false);
  return (
    <div>
      <Modal show={open} onHide={handleClose} dialogClassName="customModal">
        <Modal.Header closeButton>
          <Modal.Title>{data?.posistion}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bodyModal">
          <div className="topBodyModal">
            <div className="info">
              <img src={avata} alt="" className="imgTeacher" />
              <div className="infoTeacher">
                <h2 className="name">{data?.name}</h2>
                <div className="posistion">{data?.posistion}</div>
              </div>
            </div>
            {/* <div className="quote">{data?.quote}</div> */}
          </div>
          <div className="mainBodyModal">
            <div className="leftMainBodyModal">
              <div className="box">
                <h4 className="title">{data?.carrer?.title}</h4>
                <ul className="workExperience">
                  {data?.carrer?.description.map((item) => (
                    <li>{item.title}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rightMainBodyModal">
              <div className="box">
                <h4 className="title">{data?.study?.title}</h4>
                <ul className="Education">
                  {data?.study?.description.map((item) => (
                    <li className="li-css"><RxDash/><div className="li-title">{item.title}</div></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalHandleClickCard;
