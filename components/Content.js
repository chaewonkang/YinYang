import Slider from "./Slider";

const Content = ({ id, content }) => {
  return (
    <>
      <div id={id} className="content_container">
        <Slider id={id} items={content}></Slider>
      </div>
      <style jsx>
        {`
          .content_container {
            margin-bottom: 5%;
          }
        `}
      </style>
    </>
  );
};

export default Content;
