import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import Bookmark from "../components/Bookmark";
import Clock from "../components/Clock";
import IndexModule from "../components/IndexModule";
import Content from "../components/Content";
import { getContentfulData } from "../utils/api";

export default function Index({ data }) {
  const { workList } = data;
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) setIsMobile(true);
    else setIsMobile(false);
  };

  const openBM = () => {
    if (window.innerWidth <= 768) setIsVisible(true);
    else return;
  };

  const closeBM = () => {
    if (window.innerWidth <= 768) setIsVisible(false);
    else return;
  };

  useEffect(() => {
    if (window.innerWidth <= 768) setIsMobile(true);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) return <div>nothing</div>;
  if (!isMobile)
    return (
      <Layout>
        <div className="container">
          <div className="index">
            <IndexModule list={workList}></IndexModule>
          </div>
          <div className="content">
            {workList.map((work, i) => (
              <Content key={work.index} id={i} content={work} />
            ))}
          </div>
          <div
            className="clock"
            onMouseDown={() => openBM()}
            onMouseLeave={() => closeBM()}
          >
            <Clock isMobile={isMobile}></Clock>
          </div>
          <div className="bookmark">
            <Bookmark isVisible={isVisible}></Bookmark>
          </div>
        </div>
        <style jsx global>{`
          @font-face {
            font-family: "customFont";
            font-style: italic;
            font-weight: 400;
            src: url("/fonts/JolyRegular.woff") format("woff");
          }

          html,
          body {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            font-family: "customFont";
            overflow-y: hidden;
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

          .bookmark {
            grid-column: 8 / 9;
            padding-left: 20px;
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
              grid-template-rows: 60px auto;
              row-gap: 10px;
              max-height: 90vh;
              overflow-y: hidden;
              overflow-x: hidden;
            }

            .clock {
              margin-right: 20px;
              cursor: pointer;
              width: calc(100vw - 40px);
              display: flex;
              justify-content: flex-end;
              z-index: 10000;
            }

            .bookmark {
              width: calc(100vw - 40px);
              display: flex;
              justify-content: flex-end;
              grid-column: 8 / 9;
              padding-left: 0;
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
        `}</style>
      </Layout>
    );
}

export async function getStaticProps() {
  const { workList } = await getContentfulData();

  return {
    props: {
      data: {
        workList,
      },
    },
  };
}
