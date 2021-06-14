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
  const [readyToClosed, setReadyToClosed] = useState(false);
  const [loading, setLoading] = useState(true);

  var wordsArr = [
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '70',
    '71',
    '72',
    '73',
  ];

  const handleResize = () => {
    if (window.innerWidth <= 768) setIsMobile(true);
    else setIsMobile(false);
  };

  const openBM = () => {
    if (window.innerWidth <= 768) {
      setIsVisible(true);
      setReadyToClosed(true);
    } else return;
  };

  const closeBM = () => {
    if (window.innerWidth <= 768) {
      setIsVisible(false);
      setReadyToClosed(false);
    } else return;
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);

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
          {isMobile ? (
            <img src={spinner} width='50%'></img>
          ) : (
            <img src={spinner} width='25%'></img>
          )}
        </div>
      </>
    );

  return (
    <Layout>
      <div className='container'>
        <div className='index'>
          <IndexModule list={workList} words={wordsArr}></IndexModule>
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
          onMouseDown={readyToClosed ? () => closeBM() : () => openBM()}
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
            grid-template-columns: auto 180px 200px;
            grid-template-rows: 56px auto;
            row-gap: 15px;
            overflow-y: hidden;
          }

          .index {
            grid-column: 1 / 4;
            grid-row: 0 / 1;
            z-index: 1000;
            overflow-y: hidden;
          }

          .content {
            width: calc(100vw - 422px);
            max-width: 1500px;
            grid-row: 1 / 2;
            top: 88px;
            bottom: 0;
            position: fixed;
            overflow-y: scroll;
            overflow-x: hidden;
          }

          .content::-webkit-scrollbar {
            display: none;
          }

          .clock {
            grid-column: 2 / 3;
            z-index: 100;
            margin-right: 20px;
          }

          .bookmark {
            grid-column: 3 / 4;
            display: flex;
            justify-content: flex-end;
            margin-right: 20px;
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
              grid-column: 1 / 3;
              padding-left: 0;
            }

            .content {
              width: calc(100vw - 40px);
              max-width: calc(100vw - 40px);
              top: 34px;
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
