import Slider from "./Slider";

const Content = ({ items, id }) => {
  return (
    <>
      <div id={id} className="content_container">
        <Slider id={id} items={items}></Slider>
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
