import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Bookmark from "../components/Bookmark";
import Clock from "../components/Clock";
import IndexModule from "../components/IndexModule";
import Content from "../components/Content";
import ex1 from "../img/ex_1.jpg";
import ex2 from "../img/ex_2.jpg";
import ex3 from "../img/ex_3.jpg";
import ex4 from "../img/ex_4.jpg";
import ex5 from "../img/ex_5.jpg";
import ex6 from "../img/ex_6.jpg";

const items = [
  { photo: ex1 },
  { photo: ex2 },
  { photo: ex3 },
  { photo: ex4 },
  { photo: ex5 },
  { photo: ex6 },
];

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) setIsMobile(true);
    else setIsMobile(false);
  };

  useEffect(() => {
    if (window.innerWidth <= 768) setIsMobile(true);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="index">
          <IndexModule></IndexModule>
        </div>
        <div className="content">
          <Content items={items}></Content>
          <Content items={items}></Content>
          <Content items={items}></Content>
          <Content items={items}></Content>
        </div>
        <div className="clock" onClick={() => setIsVisible(true)}>
          <Clock isMobile={isMobile}></Clock>
        </div>
        <div className="bookmark" isVisible={isVisible}>
          <Bookmark></Bookmark>
        </div>
      </div>
      <style jsx global>{`
        * {
          font-family: "Helvetica", sans-serif;
          margin: 0;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 100px 167px;
          grid-template-rows: 50px auto;
          row-gap: 20px;
          max-height: 90vh;
        }

        .index {
          grid-column: 1 / 9;
          grid-row: 1 / 2;
          z-index: 10;
        }

        .content {
          width: calc(100vw - 399px);
          top: 90px;
          bottom: 0;
          position: fixed;
          overflow-y: scroll;
          overflow-x: hidden;
        }

        .content::-webkit-scrollbar {
          display: none;
        }

        .clock {
          grid-column: 7 / 8;
          z-index: 100;
        }

        @media (max-width: 1192px) {
          .clock {
            grid-column: 8 / 9;
          }

          .container {
            display: grid;
            grid-template-columns: 1fr 100px 167px;
            grid-template-rows: 50px auto;
            row-gap: 20px;
            max-height: 90vh;
          }

          .content {
            width: calc(100vw - 227px);
            top: 90px;
            bottom: 0;
            position: fixed;
            overflow-y: scroll;
            overflow-x: hidden;
          }
        }

        @media (max-width: 768px) {
          .container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 50px auto;
            row-gap: 20px;
            max-height: 90vh;
          }

          .clock {
            margin-right: 20px;
            cursor: point;
          }

          .bookmark {
            display: none;
          }

          .content {
            width: calc(100vw - 40px);
            top: 100px;
            bottom: 0;
            position: fixed;
            overflow-y: scroll;
            overflow-x: hidden;
            padding-top: 50px;
          }
        }

        .bookmark {
          grid-column: 8 / 9;
          padding-left: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
