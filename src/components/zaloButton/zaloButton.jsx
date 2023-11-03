import * as React from "react";
import "./zaloButton.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const ZaloButton = () => {
  return (
    <div>
      <div class="icon-box-img" style={{ width: 30 }}>
        <div class="icon">
          <div class="icon-inner">
            <img
              width="25"
              height="25"
              src="https://mypham2.trustweb.vn/wp-content/uploads/2018/03/icon-phone-1.png"
              class="attachment-medium size-medium"
              alt=""
              decoding="async"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ZaloButton;
