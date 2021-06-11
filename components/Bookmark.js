import SVG from '../utils/SVG';
import bookMark from '../img/bookmark.png';

const Bookmark = ({ isVisible }) => (
  <>
    {isVisible ? (
      <div className='mobileBackground'>
        <img src={bookMark}></img>
        <div className='text'>
          <p>
            YinYang is a graphic design studio founded in Seoul on September of
            2020. Our team comprises of graphic designers, Seunghyun and Yubin,
            and a web designer/developer, Chaewon in YinYang, who have studied
            Visual Communication Design at Hongik University. We specialize in
            making an image to be read like text. Specifically, we work on
            visual identities, 3D modeling, website development, exhibition
            design and, book design. We are also open to independent and/or
            commissioned works. For any inquiries, please contact:
            yinyang.fig@gmail.com
          </p>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
          <p>
            Our works were featured in<br></br>
            It’s Nice That<br></br>
            GDFS 2017<br></br>
            GDFS 2018<br></br>
            Shanghai Art Book Fair 2018<br></br>
            Taipei Art Book Fair 2018<br></br>
            and more<br></br>
          </p>
          <p>
            Our clients include<br></br>
            Insa Art Space<br></br>
            Korea National University of Arts<br></br>
            Hongik University College of Fine Arts<br></br>
            Hongik University Visual Communication Design<br></br>
            Netflix Korea<br></br>
            Art Center White Block<br></br>
            Elephant Space<br></br>
            Magazine Them<br></br>
            Tirorisoft<br></br>
            and more<br></br>
          </p>
          <p>
            (You can also buy our eggs on y-o-l-k.com)<br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
        </div>
      </div>
    ) : (
      <div className='background'>
        <SVG
          className='svg'
          name='bookMark'
          height='585'
          color=''
          viewBox='0 0 167 544'
          fill={'#fff'}
          strokeWidth={'0.8px'}
        ></SVG>
        <div className='text'>
          <p>
            YinYang is a graphic design studio founded in Seoul on September of
            2020. Our team comprises of graphic designers, Seunghyun and Yubin,
            and a web designer/developer, Chaewon in YinYang, who have studied
            Visual Communication Design at Hongik University. We specialize in
            making an image to be read like text. Specifically, we work on
            visual identities, 3D modeling, website development, exhibition
            design and, book design. We are also open to independent and/or
            commissioned works. For any inquiries, please contact:
            yinyang.fig@gmail.com
            <br></br>
          </p>
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
          <div className='appleBox'></div>
          <p>
            Our works were featured in<br></br>
            It’s Nice That<br></br>
            GDFS 2017<br></br>
            GDFS 2018<br></br>
            Shanghai Art Book Fair 2018<br></br>
            Taipei Art Book Fair 2018<br></br>
            and more<br></br>
          </p>
          <p>
            Our clients include<br></br>
            Insa Art Space<br></br>
            Korea National University of Arts<br></br>
            Hongik University College of Fine Arts<br></br>
            Hongik University Visual Communication Design<br></br>
            Netflix Korea<br></br>
            Art Center White Block<br></br>
            Elephant Space<br></br>
            Magazine Them<br></br>
            Tirorisoft<br></br>
            and more<br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
          <p>You can also buy our eggs on y-o-l-k.com</p>
          <div className='appleBox2'></div>
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

        .appleBox {
          height: 185px;
        }

        .appleBox2 {
          height: 115px;
        }

        p {
          width: 167px;
          font-size: 13px;
          word-break: keep-all;
          margin: 0;
          padding: 5px 0px 5px 5px;
          line-height: 15px;
          overflow: auto;
          animation: 2s ease-out 0s 1 fadeIn;
        }

        .background {
          position: relative;
          animation: 1s ease-out 0s 1 fadeIn;
          overflow: auto;
        }

        .text {
          padding-top: 0.15em;
          position: absolute;
          max-width: 195px;
          height: 530px;
          overflow: auto;
          top: 0;
        }

        .text::-webkit-scrollbar {
          display: none;
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
            width: 88vw;
            width: calc(100vw - 40px);
            max-width: calc(100vw - 40px);
            top: 0;
            height: 40vh;
            overflow: auto;
          }

          p {
            width: calc(100vw - 40px);
            max-width: calc(100vw - 40px);
            font-size: 13px;
            word-break: keep-all;
            margin: 0;
            padding: 5px 15px 5px 5px;
            line-height: 15px;
            overflow: auto;
            animation: 2s ease-out 0s 1 fadeIn;
          }

          .mobileBackground {
            position: fixed;
            top: 50;
            left: 20;
            display: flex;
            jusitfy-content: flex-end;
            z-index: 10;
            width: calc(100vw - 40px);
            max-width: calc(100vw - 40px);
            animation: 1s ease-out 0s 1 fadeIn;
          }

          img {
            width: calc(100vw - 40px);
            max-width: calc(100vw - 40px);
          }

          .mobileBackground .text {
            position: absolute;
            overflow-x: hidden;
            overflow-y: scroll;
            min-height: 260px;
            height: 40vh;
            max-height: 763px;
            top: 0;
            overflow: auto;
            z-index: 1000000000;
            animation: 1.5s ease-out 0s 1 fadeIn;
          }
        }
      `}
    </style>
  </>
);

export default Bookmark;
