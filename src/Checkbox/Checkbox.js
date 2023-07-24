import React from "react";
import "./Checkbox.css";
import rightarrow from "../assets/rightarrow.png";

function Checkbox() {
  const checkArr = [
    {
      name: "Creative & design",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/design_icon.png",
      color: "rgb(255, 21, 138)",
      isSelected: false,
    },
    {
      name: "Software development",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/dev_icon.png",
      color: "rgb(0, 200, 117)",
      isSelected: false,
    },
    {
      name: "Marketing",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/marketing_icon.png",
      color: "rgb(240, 64, 149)",
      isSelected: false,
    },
    {
      name: "Project management",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/pmo_icon.png",
      color: "rgb(255, 153, 0)",
      isSelected: false,
    },
    {
      name: "Sales & CRM",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/crm_icon.png",
      color: "rgb(0, 210, 210)",
      isSelected: false,
    },
    {
      name: "Task management",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/task_icon.png",
      color: "rgb(87, 155, 252)",
      isSelected: false,
    },
    {
      name: "HR",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/hr_icon.png",
      color: "rgb(255, 117, 117)",
      isSelected: false,
    },
    {
      name: "Operations",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/operations_icon.png",
      color: "rgb(78, 204, 198)",
      isSelected: false,
    },
    {
      name: "More workflows",
      imgUrl:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/icons/workflows_icon.png",
      color: "rgb(97, 97, 255)",
      isSelected: false,
    },
  ];

  const hoverInnerDiv = {
    content: "",
    background: "white",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: "8px",
    border: "0.5px solid rgb(78, 204, 198)",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "120px",
    width: "122px",
    cursor: "pointer",
  };

  return (
    <>
      <div className="checkbox">
        <div className="checkbox-selections">
          {checkArr &&
            checkArr.map((item) => {
              return (
                <div
                  className="inner-div"
                  style={{ border: `0.5px solid ${item.color}` }}
                >
                  <div>
                    <img src={item.imgUrl} alt={item.name} />
                  </div>
                  <div className="content-checkbox">
                    <span>{item?.name}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="submit-btn">
        <button className="start-btn-checkbox">
          <span>Get Started</span>
          <img src={rightarrow} alt="rightarrow" />
        </button>
      </div>
      <div className="subtext-bottom">
        <p>No credit card needed &nbsp; ✦ &nbsp; Unlimited time on Free plan</p>
      </div>
      <div className="tabs-image">
        <img
          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/NaamaGros/HP_tests/HP_asset_white_bg.png"
          alt="tabs-images"
        />
      </div>
      <div className="trusted-by">
        <h2>Trusted by 180,000+ customers worldwide</h2>
      </div>
    </>
  );
}

export default Checkbox;
