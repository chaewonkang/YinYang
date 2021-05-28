import SVG from "../utils/SVG";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const IndexModule = ({ id }) => {
  const idx = id.toString();
  const router = useRouter();
  const [bgBlack, setBgBlack] = useState(false);

  useEffect(() => {
    if (router.pathname.includes(idx)) setBgBlack(true);
    else return;
  }, [router.pathname]);

  return (
    <div className="module_container">
      <div className="index_module">
        {bgBlack ? (
          <SVG
            name="book"
            height="56.5"
            color=""
            viewBox="0 0 30 55"
            fill={"#000"}
            strokeWidth={"0.8px"}
          />
        ) : (
          <SVG
            name="book"
            height="56.5"
            color=""
            viewBox="0 0 30 55"
            fill={"#fff"}
            strokeWidth={"0.8px"}
          />
        )}
      </div>
      <div className="span">
        <span>{idx.length == 1 ? null : idx.slice(0, 1)}</span>
        <span>{idx.length == 1 ? idx.slice(0, 1) : idx.slice(1, 2)}</span>
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

        .module_container {
          position: relative;
          height: 50px;
          overflow-y: hidden;
          display: table;
          border-collapse: collapse;
          animation: 1s ease-out 0s 1 fadeIn;
        }

        .index_module {
          height: 50px;
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
          bottom: 10px;
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

const IndexContainer = ({ list }) => {
  return (
    <>
      <div className="index_container">
        {list.map((item, i) => (
          <a key={i} href={`#${i}`}>
            <IndexModule key={i} id={i}></IndexModule>
          </a>
        ))}
      </div>
      <style jsx>
        {`
          .index_container {
            display: grid;
            grid-template-columns: repeat(${list.length}, 30px);
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
