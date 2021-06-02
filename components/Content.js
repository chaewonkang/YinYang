import Slider from "./Slider";

const Content = ({ id, content, isMobile }) => {
  return (
    <>
      <div id={id} className="content_container">
        <Slider id={id} items={content} isMobile={isMobile}></Slider>
      </div>
      <style jsx>
        {`
          .content_container {
            margin-bottom: 5%;
            z-index: 100000000;
          }
        `}
      </style>
    </>
  );
};

export default Content;
