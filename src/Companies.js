import React from "react";
import Slider from "react-slick";
import "./Companies.css";
import amazon from "./assets/amazon.svg";
import booking from "./assets/booking.svg";
import google from "./assets/google.svg";
import microsoft from "./assets/microsoft.svg";
import paypal from "./assets/paypal.svg";
import spotify from "./assets/spotify.svg";
import tesla from "./assets/tesla.svg";

const Companies = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="companies-section">
      <h6 className="text-center fw-bold mb-5 title-companies">
        Huntly candidates have been hired by:
      </h6>
      <Slider {...settings} className="companies-slider">
        <div>
          <img src={amazon} alt="Amazon" className="company-logo" />
        </div>
        <div>
          <img src={paypal} alt="PayPal" className="company-logo" />
        </div>
        <div>
          <img src={microsoft} alt="Microsoft" className="company-logo" />
        </div>
        <div>
          <img src={booking} alt="Booking" className="company-logo" />
        </div>
        <div>
          <img src={google} alt="Google" className="company-logo" />
        </div>
        <div>
          <img src={spotify} alt="Spotify" className="company-logo" />
        </div>
        <div>
          <img src={tesla} alt="Tesla" className="company-logo" />
        </div>
      </Slider>
    </div>
  );
};

export default Companies;
