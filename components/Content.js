import Slider from './Slider';

const Content = ({ id, content, isMobile }) => {
  return (
    <>
      <div id={id} className='content_container'>
        <Slider id={id} items={content} isMobile={isMobile}></Slider>
      </div>
      <style jsx>
        {`
          .content_container {
            z-index: 100000000;
            margin-bottom: 5%;
            display: table;
          }
        `}
      </style>
    </>
  );
};

export default Content;
