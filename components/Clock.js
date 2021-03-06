import { useState, useEffect } from 'react';
import SVG from '../utils/SVG';

const Clock = ({ isMobile }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    window.setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className='clock_area'>
      {isMobile ? (
        <div>
          <SVG
            className='clock_bg'
            name='clock'
            height='40'
            color='none'
            viewBox='0 0 152 91'
            g={true}
            transform={'translate(-1016.7 -141.722)'}
            fill={'#ff00ff'}
            strokeWidth={'2px'}
          />
          <div className='clock'>
            <div
              className='hour_hand'
              style={{
                transform: `rotateZ(${time.getHours() * 30}deg)`,
              }}
            />
            <div
              className='min_hand'
              style={{
                transform: `rotateZ(${time.getMinutes() * 6}deg)`,
              }}
            />
            <div
              className='sec_hand'
              style={{
                transform: `rotateZ(${time.getSeconds() * 6}deg)`,
              }}
            />
          </div>
        </div>
      ) : (
        <>
          <SVG
            className='clock_bg'
            name='clock'
            height='100'
            color=''
            viewBox='0 0 152 91'
            g={true}
            transform={'translate(-1016.7 -141.722)'}
            fill={'#fff'}
          />
          <div className='clock'>
            <div
              className='hour_hand'
              style={{
                transform: `rotateZ(${time.getHours() * 30}deg)`,
              }}
            />
            <div
              className='min_hand'
              style={{
                transform: `rotateZ(${time.getMinutes() * 6}deg)`,
              }}
            />
            <div
              className='sec_hand'
              style={{
                transform: `rotateZ(${time.getSeconds() * 6}deg)`,
              }}
            />
          </div>
        </>
      )}
      <style jsx>
        {`
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

          .clock_area {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            animation: 1s ease-out 0s 1 fadeIn;
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
            animation: 1s ease-out 0s 1 fadeIn;
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
            animation: 1s ease-out 0s 1 fadeIn;
          }

          .min_hand {
            position: absolute;
            width: 1px;
            height: 50px;
            background: black;
            top: 14.5%;
            left: 50%;
            transform-origin: bottom;
            animation: 1s ease-out 0s 1 fadeIn;
          }

          .sec_hand {
            position: absolute;
            width: 1px;
            height: 80px;
            background: black;
            top: -5.5%;
            left: 50%;
            transform-origin: bottom;
            animation: 1s ease-out 0s 1 fadeIn;
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
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Clock;
