import { useState, useEffect } from "react";
import * as dom from "./Dom";
import { real } from "./Mechanism";
import SVG from "../utils/SVG";

export default class Clock = ({ isMobile }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div className="clock_area">
      {isMobile ? (
        <div>
          <SVG
            className="clock_bg"
            name="clock"
            height="40"
            color=""
            viewBox="0 0 152 91"
            g={true}
            transform={"translate(-1016.7 -141.722)"}
            fill={"#fff"}
            strokeWidth={"2px"}
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
          </div>
        </div>
      ) : (
        <>
          <SVG
            className="clock_bg"
            name="clock"
            height="91"
            color=""
            viewBox="0 0 152 91"
            g={true}
            transform={"translate(-1016.7 -141.722)"}
            fill={"none"}
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
          </div>
        </>
      )}
      <style jsx>
        {`
          .clock_area {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .clock {
            width: 152px;
            height: 152px;
            border-radius: 50%;
            position: absolute;
            top: 55%;
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
            top: 21%;
            left: 50%;
            transform-origin: bottom;
          }

          .min_hand {
            position: absolute;
            width: 1px;
            height: 50px;
            background: black;
            top: 14%;
            left: 50%;
            transform-origin: bottom;
          }

          .sec_hand {
            position: absolute;
            width: 1px;
            height: 80px;
            background: black;
            top: -5.5%;
            left: 50%;
            transform-origin: bottom;
          }

          @media (max-width: 768px) {
            .clock {
              width: 152px;
              height: 152px;
              border-radius: 50%;
              position: absolute;
              top: 55%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 24px;
              color: #444;
              text-align: center;
            }

            .hour_hand {
              height: 20px;
              top: 36%;
              left: 50%;
            }

            .min_hand {
              height: 32px;
              top: 28%;
              left: 50%;
              transform-origin: bottom;
            }

            .sec_hand {
              position: absolute;
              width: 1px;
              height: 40px;
              background: black;
              top: 23%;
              left: 50%;
              transform-origin: bottom;
            }
          }

          .clock span {
            position: absolute;
            font-family: "Source Sans Pro", sans-serif;
            font-size: 10px;
          }
        `}
      </style>
    </div>
  );
};
