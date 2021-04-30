import Slider from "./Slider";

const Content = ({ items }) => {
  return (
    <>
      <div className="content_container">
        <Slider items={items}></Slider>
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
