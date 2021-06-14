import SVG from '../utils/SVG';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const IndexModule = ({ id, text }) => {
  const idx = id.toString();
  const router = useRouter();
  const [bgBlack, setBgBlack] = useState(false);

  useEffect(() => {
    if (router.pathname.includes(idx)) setBgBlack(true);
    else return;
  }, [router.pathname]);

  return (
    <div className='module_container'>
      <div className='index_module'>
        {text ? (
          <SVG
            name='book'
            height='52'
            color=''
            viewBox='0 0 30 52'
            fill={'#fff'}
            strokeWidth={'0.8px'}
          />
        ) : (
          <SVG
            name='book'
            height='52'
            color=''
            viewBox='0 0 30 52'
            fill={'#fff'}
            strokeWidth={'0.8px'}
          />
        )}
      </div>
      {text ? (
        <div className='span'>
          <span>{text.length == 1 ? null : text.slice(0, 1)}</span>
          <span>{text.length == 1 ? text.slice(0, 1) : text.slice(1, 2)}</span>
        </div>
      ) : (
        <div className='span'>
          <span>{idx.length == 1 ? null : idx.slice(0, 1)}</span>
          <span>{idx.length == 1 ? idx.slice(0, 1) : idx.slice(1, 2)}</span>
        </div>
      )}

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

        .module_container {
          position: relative;
          height: 53px;
          overflow-y: hidden;
          display: table;
          border-collapse: collapse;
          animation: 1s ease-out 0s 1 fadeIn;
        }

        .index_module {
          height: 52px;
          position: relative;
          overflow-x: hidden;
          overflow-y: hidden;
          padding-bottom: 5px;
          animation: 1s ease-out 0s 1 fadeIn;
        }

        .span {
          z-index: 2;
          position: absolute;
          bottom: 5px;
          width: 100%;
          animation: 1s ease-out 0s 1 fadeIn;
        }

        span:nth-child(1) {
          position: absolute;
          bottom: 11px;
          right: 15px;
        }

        span:nth-child(2) {
          position: absolute;
          bottom: 2px;
          right: 5px;
        }
      `}</style>
    </div>
  );
};

const IndexContainer = ({ list, words }) => {
  return (
    <>
      <div className='index_container'>
        {list.map((item, i) => (
          <a key={i + 1} href={`#${i}`}>
            <IndexModule key={i + 1} id={i + 1}></IndexModule>
          </a>
        ))}
        {words.map((item, i) => (
          <a key={i}>
            <IndexModule key={i + 1} id={i} text={item}></IndexModule>
          </a>
        ))}
      </div>
      <style jsx>
        {`
          .index_container {
            display: grid;
            grid-template-columns: repeat(${list.length * 3}, 27px);
            overflow-x: auto;
            height: 56.5px;
            overflow-y: hidden;
          }

          .index_container::-webkit-scrollbar {
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
        `}
      </style>
    </>
  );
};

export default IndexContainer;
