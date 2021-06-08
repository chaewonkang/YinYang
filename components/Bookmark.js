import SVG from '../utils/SVG';
import bookMark from '../img/bookmark.png';

const Bookmark = ({ isVisible }) => (
  <>
    {isVisible ? (
      <div className='mobileBackground'>
        <img src={bookMark}></img>
        <div className='text'>
          <p>
            YinYang is a design studio based in Seoul. We work as graphic
            designer and frontend engineer. We are concerned with making image
            which can be read like text. Our focus is on visual identities,
            website design/development, exhibition design and book design. We
            are open to independent or commissioned works. Please write us to
            discuss!
          </p>
          <p>
            YinYang featured on… <br></br>GDFS <br></br>Typojanchi <br></br>
            Shanghai Art Book Fair <br></br>
            Award <br></br>Award <br></br>Award <br></br>
          </p>
          <p>You can also buy our eggs on yolk.kr</p>
          <p>
            <a href='mailto: yinyang.fig@gmail.com'>Write</a>
            <br></br>
            <a
              href='https://instagram.com/yinyang.fig'
              rel='noopenner noreferrer'
              target='_blank'
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    ) : (
      <div className='background'>
        <SVG
          className='svg'
          name='bookMark'
          height='620'
          color=''
          viewBox='0 0 167 544'
          fill={'#fff'}
          strokeWidth={'0.8px'}
        ></SVG>
        <div className='text'>
          <p>
            YinYang is a design studio based in Seoul. We work as graphic
            designer and frontend engineer. We are concerned with making image
            which can be read like text. Our focus is on visual identities,
            website design/development, exhibition design and book design. We
            are open to independent or commissioned works. Please write us to
            discuss!
          </p>
          <p>
            YinYang featured on… <br></br>GDFS <br></br>Typojanchi <br></br>
            Shanghai Art Book Fair <br></br>
            Award <br></br>Award <br></br>Award <br></br>
          </p>
          <p>You can also buy our eggs on yolk.kr</p>
          <p>
            <a href='mailto: yinyang.fig@gmail.com'>Write</a>
            <br></br>
            <a
              href='https://instagram.com/yinyang.fig'
              rel='noopenner noreferrer'
              target='_blank'
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
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

        p {
          font-size: 13px;
          word-break: keep-all;
          margin: 0;
          padding: 5px 15px 5px 5px;
          line-height: 15px;
          overflow: auto;
          animation: 2s ease-out 0s 1 fadeIn;
        }

        .background {
          margin-right: 20px;
          position: relative;
          height: 520;
          animation: 1s ease-out 0s 1 fadeIn;
        }

        .text {
          position: absolute;
          max-width: 200px;
          top: 0;
        }

        a {
          color: #000;
        }

        a:active,
        a:focus,
        a:visited {
          color: #000;
        }

        @media screen and (max-width: 768px) {
          .background {
            display: none;
          }

          .text {
            position: absolute;
            max-width: 90vw;
            top: 0;
          }

          .mobileBackground {
            position: fixed;
            top: 50;
            left: 20;
            z-index: 10;
            width: calc(100vw - 40px);
            animation: 1s ease-out 0s 1 fadeIn;
          }

          img {
            width: calc(100vw - 40px);
          }

          .mobileBackground .text {
            position: absolute;
            top: 0;
            overflow: auto;
            z-index: 10;
            animation: 1.5s ease-out 0s 1 fadeIn;
          }
        }
      `}
    </style>
  </>
);

export default Bookmark;
