import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import Bookmark from '../components/Bookmark';
import Clock from '../components/Clock';
import IndexModule from '../components/IndexModule';
import Content from '../components/Content';
import { getContentfulData } from '../utils/api';

import spinner from '../img/splash.gif';

export default function Index({ data }) {
  const { workList } = data;
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);

    if (window.innerWidth <= 768) setIsMobile(true);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (loading)
    return (
      <>
        <div
          className='spinner_container'
          style={{
            height: 100 + 'vh',
            width: 100 + 'vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowX: 'hidden',
            overflowY: 'hidden',
          }}
        >
          <img src={spinner} width='50%'></img>
        </div>
      </>
    );

  return (
    <Layout>
      <div className='container'>
        <div className='index'>
          <IndexModule list={workList}></IndexModule>
        </div>
        <div className='content'>
          {workList.map((work, i) => (
            <Content
              key={work.index}
              id={i}
              content={work}
              isMobile={isMobile}
            />
          ))}
        </div>
        <div
          className='clock'
          onMouseDown={() => openBM()}
          onMouseLeave={() => closeBM()}
        >
          <Clock isMobile={isMobile}></Clock>
        </div>
        <div className='bookmark'>
          <Bookmark isVisible={isVisible}></Bookmark>
        </div>
      </div>
      <style jsx global>
        {`
          @font-face {
            font-family: 'Joly Trial Headline';
            src: url('/fonts/JolyTrial-RegularHeadline.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Joly Trial Headline';
            overflow-y: hidden;
          }

          .container {
            display: grid;
            max-width: 1900px;
            grid-template-columns: repeat(auto, 7) 167px 210px;
            grid-template-rows: 56px auto;
            row-gap: 15px;
            overflow-y: hidden;
          }

          .index {
            grid-column: 1 / 9;
            grid-row: 0 / 1;
            z-index: 1000;
            overflow-y: hidden;
          }

          .content {
            width: calc(100vw - 480px);
            max-width: 1440px;
            grid-row: 1 / 2;
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
          }

          @media (max-width: 1912px) {
            .clock {
              grid-column: 8 / 9;
            }

            .container {
              display: grid;
              grid-template-columns: 1fr 100px 167px;
              grid-template-rows: 60px auto;
              row-gap: 20px;
            }

            .content {
              width: calc(100vw - 250px);
              top: 85px;
              bottom: 0;
              position: fixed;
              overflow-y: scroll;
              overflow-x: hidden;
            }

            .bookmark {
              padding-left: 20px;
            }
          }

          @media (max-width: 768px) {
            .container {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 60px auto;
              row-gap: 5px;
              overflow-y: hidden;
              overflow-x: hidden;
            }

            .clock {
              margin-right: 20px;
              cursor: pointer;
              width: calc(100vw - 40px);
              display: flex;
              justify-content: flex-end;
              z-index: 100;
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
              top: 80px;
              bottom: 0;
              position: fixed;
              overflow-y: scroll;
              overflow-x: hidden;
              padding-top: 50px;
            }
          }
        `}
      </style>
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
