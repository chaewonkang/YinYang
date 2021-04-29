import { useState, useEffect } from "react";
import SVG from "../utils/SVG";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div className="clock_area">
      <SVG
        className="clock_bg"
        name="clock"
        height="91"
        color=""
        viewBox="0 0 152 91"
        g={true}
        transform={"translate(-1016.7 -141.722)"}
      />
      <div className="clock">
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`,
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`,
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`,
          }}
        />
        {/* <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span> */}
      </div>
      <style jsx>
        {`
          .clock_area {
            position: relative;
          }
          .clock {
            width: 152px;
            height: 152px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 24px;
            color: #444;
            text-align: center;
          }

          .clock_bg {
            position: absolute;
          }

          .hour_hand {
            position: absolute;
            width: 1px;
            height: 40px;
            background: black;
            top: 20.5%;
            left: 53%;
            transform-origin: bottom;
          }

          .min_hand {
            position: absolute;
            width: 1px;
            height: 50px;
            background: black;
            top: 14%;
            left: 53%;
            transform-origin: bottom;
          }

          .sec_hand {
            position: absolute;
            width: 1px;
            height: 80px;
            background: black;
            top: -5%;
            left: 53%;
            transform-origin: bottom;
          }

          .clock span {
            position: absolute;
            font-family: "Source Sans Pro", sans-serif;
            font-size: 10px;
          }

          .twelve {
            top: 0;
            left: 50%;
          }

          .one {
            top: 15%;
            right: 30%;
          }

          .two {
            top: 30%;
            right: 15%;
          }

          .three {
            top: 50%;
            right: 0;
          }

          .four {
            top: 70%;
            right: 15%;
          }

          .five {
            top: 85%;
            right: 30%;
          }

          .six {
            bottom: 0;
            left: 50%;
          }

          .seven {
            left: 30%;
            top: 85%;
          }

          .eight {
            left: 15%;
            top: 70%;
          }

          .nine {
            left: 0;
            top: 50%;
          }

          .ten {
            top: 30%;
            left: 15%;
          }

          .eleven {
            top: 15%;
            left: 30%;
          }
        `}
      </style>
    </div>
  );
};

export default Clock;
