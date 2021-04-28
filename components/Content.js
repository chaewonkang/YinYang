import Slider from "./Slider";

const Content = () => {
  return (
    <>
      <div className="content_container">
        <Slider></Slider>
        <div className="content_info">
          <div className="content_info_text">
            <div className="title">Axe and Dummyheads,</div>
            <div className="where">Insa Art Space,</div>
            <div className="when">2020</div>
            <div className="category">
              [Exhibition Identity, Printed Matter]
            </div>
          </div>
          <div className="pages">1 / 10</div>
        </div>
      </div>
      <style jsx>
        {`
          .content_container {
            height: calc(100vh - 110px);
            height: calc(100vh - 110px);
          }

          .content_info {
            display: grid;
            grid-template-columns: repeat(2, auto);
            margin-top: 5px;
          }

          .content_info_text {
            display: inline;
          }

          .title,
          .where,
          .when {
            display: inline;
            padding-right: 0.5em;
            font-size: 17px;
          }

          .category {
            display: inline;
            font-size: 11px;
          }

          .pages {
            text-align: right;
          }
        `}
      </style>
    </>
  );
};

export default Content;
