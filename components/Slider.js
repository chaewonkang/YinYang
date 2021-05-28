import { useState, useRef, useEffect } from "react";
import RightArrow from "../img/arrow2x.png";
import LeftArrow from "../img/arrow2x_left.png";
import MobileRightArrow from "../img/mobileRight.png";
import MobileLeftArrow from "../img/mobileLeft.png";

export default function Slider({ items, id, isMobile }) {
  const TOTAL_SLIDES = items.imgList.length;
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide - 1}00%)`;
  }, [currentSlide]);

  return (
    <>
      <div className="slider_wrapper" id={`work_${id}`}>
        <div className="slider_container">
          <div className="slide" ref={slideRef}>
            {items.imgList.map((item, key) => (
              <img key={key} className="img" src={item.imgUrl.url} />
            ))}
          </div>
        </div>
        {isMobile ? (
          <div className="mobile_arrows_and_number_container">
            <div className="mobile_navigate_left_button" onClick={prevSlide}>
              {" "}
              <img src={MobileLeftArrow}></img>
            </div>
            <div className="mobile_navigate_right_button" onClick={nextSlide}>
              {" "}
              <img src={MobileRightArrow}></img>
            </div>
          </div>
        ) : (
          <div className="arrows_and_number_container">
            <div className="navigate_left_button" onClick={prevSlide}>
              <img src={LeftArrow} width="152px"></img>
            </div>
            <div className="navigate_right_button" onClick={nextSlide}>
              <img src={RightArrow} width="152px"></img>
            </div>
          </div>
        )}
      </div>
      <div className="content_info">
        <div className="content_info_text">
          <div className="title">{items.title},</div>
          <div className="where">{items.client},</div>
          <div className="when">{items.year}</div>
          <div className="category">[{items.category}]</div>
        </div>
        {TOTAL_SLIDES > 1 ? (
          <div className="pages">
            <span>
              {currentSlide} / {TOTAL_SLIDES}
            </span>
          </div>
        ) : null}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .slider_wrapper {
          position: relative;
          overflow-x: hidden;
          height: inherit;
          cursor: pointer;
          animation: 1s ease-out 0s 1 fadeIn;
        }

        .slider_container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          box-sizing: content-box;
        }

        .slide {
          position: relative;
          display: flex;
          width: 100%;
          jusitfy-content: center;
          align-items: center;
        }

        .img {
          display: flex;
          jusitfy-self: center;
          align-self: center;
          object-fit: cover;
          width: inherit;
        }

        .arrows_and_number_container {
          display: grid;
          width: 100%;
          grid-template-columns: 1fr 1fr;
          position: absolute;
          height: 100%;
          top: 0;
        }

        .navigate_left_button,
        .navigate_right_button {
          height: 100%;
          z-index: 1000;
          display: flex;
          align-items: center;
          z-index: 10000;
        }

        .navigate_left_button {
          justify-content: flex-start;
          left: 0;
          padding-left: 5%;
        }

        .navigate_right_button {
          justify-content: flex-end;
          right: 0;
          padding-right: 5%;
        }

        .navigate_left_button > img,
        .navigate_right_button > img {
          display: none;
          z-index: 10000;
        }

        .navigate_left_button :hover > img,
        .navigate_right_button:hover > img {
          display: block;
        }

        button {
          color: #000;
          width: 100px;
          height: 100%;
        }

        button: hover {
          transition: all 0.3s ease-in-out;
          color: #000;
        }

        .slider_container {
          display: flex;
        }

        .date {
          position: relative;
          right: 0;
          top: 0px;
          text-align: right;
        }

        .content_container {
          height: auto;
        }

        .content_info {
          display: grid;
          grid-template-columns: repeat(2, auto);
          margin-top: 5px;
        }

        .content_info_text {
          display: inline;
        }

        .title,
        .where,
        .when {
          display: inline;
          padding-right: 0.5em;
          font-size: 17px;
        }

        .category {
          display: inline;
          font-size: 11px;
        }

        .pages {
          text-align: right;
          font-size: 11px;
          position: relative;
          top: 2px;
        }

        @media screen and (max-width: 768px) {
          .title,
          .where,
          .when {
            font-size: 16px;
          }

          .category {
            display: block;
            margin-top: 0.2em;
          }

          .mobile_arrows_and_number_container {
            display: grid;
            width: 100%;
            grid-template-columns: 1fr 1fr;
            position: absolute;
            top: 0;
            overflow-x: hidden;
            overflow-y: hidden;
            height: 100%;
          }

          .mobile_navigate_left_button,
          .mobile_navigate_right_button {
            z-index: 10000;
            display: flex;
            align-items: center;
            width: 100px;
          }

          .navigate_left_button > img,
          .navigate_right_button > img {
            display: block;
            z-index: 10000;
            display: flex;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
