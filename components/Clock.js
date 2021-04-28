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
    <>
      <SVG name="clock" height="56" color="" viewBox="0 0 30 55" />
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
        <span className="twelve"></span>
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
        <span className="five"></span>
        <span className="six"></span>
        <span className="seven"></span>
        <span className="eight"></span>
        <span className="nine"></span>
        <span className="ten"></span>
        <span className="eleven"></span>
      </div>
      <style jsx>
        {`
          .clock {
            width: 300px;
            height: 300px;
            border-radius: 50%;
            position: relative;
            top: 10%;
            left: 60%;
            transform: translate(-50%, -50%);
            font-size: 24px;
            color: #444;
            text-align: center;
          }

          .hour_hand {
            position: absolute;
            width: 1px;
            height: 60px;
            background: #222;
            top: 29.1%;
            left: 49.6%;
            transform-origin: bottom;
          }

          .min_hand {
            position: absolute;
            width: 1px;
            height: 80px;
            background: black;
            top: 22.8%;
            left: 50%;
            transform-origin: bottom;
          }

          .sec_hand {
            position: absolute;
            width: 1px;
            height: 118px;
            background: black;
            top: 10%;
            left: 50%;
            transform-origin: bottom;
          }

          .clock span {
            position: absolute;
            font-family: "Source Sans Pro", sans-serif;
            font-weight: 700;
          }

          .twelve {
            top: 10px;
            left: 46%;
          }

          .one {
            top: 10%;
            right: 26%;
          }

          .eleven {
            top: 10%;
            left: 26%;
          }

          .two {
            top: 25%;
            right: 10%;
          }

          .three {
            right: 10px;
            top: 46%;
          }

          .four {
            right: 30px;
            top: 67%;
          }

          .five {
            right: 78px;
            top: 80%;
          }

          .six {
            bottom: 10px;
            left: 50%;
          }

          .seven {
            left: 80px;
            top: 82%;
          }

          .eight {
            left: 30px;
            top: 67%;
          }

          .nine {
            left: 10px;
            top: 46%;
          }

          .ten {
            top: 25%;
            left: 10%;
          }
        `}
      </style>
    </>
  );
};

export default Clock;
