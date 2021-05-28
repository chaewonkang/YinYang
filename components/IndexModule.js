import SVG from "../utils/SVG";

const IndexModule = ({ id }) => {
  const idx = id.toString();
  return (
    <div className="module_container">
      <div className="index_module">
        <SVG
          name="book"
          height="56"
          color=""
          viewBox="0 0 30 55"
          fill={"#fff"}
          strokeWidth={"0.8px"}
        />
      </div>
      <div className="span">
        <span>{idx.length == 1 ? null : idx.slice(0, 1)}</span>
        <span>{idx.length == 1 ? idx.slice(0, 1) : idx.slice(1, 2)}</span>
      </div>
      <style jsx>{`
        .module_container {
          position: relative;
          height: 56px;
          overflow-y: hidden;
        }
        .span {
          z-index: 2;
          position: absolute;
          bottom: 5px;
          width: 100%;
        }

        .index_module {
          potision: relative;
          margin-left: -1px;
          overflow-x: hidden;
          overflow-y: hidden;
        }

        .index_module:nth-child(1) {
          potision: relative;
          margin-left: 0px;
        }

        span:nth-child(1) {
          position: absolute;
          bottom: 10px;
          right: 15px;
        }

        span:nth-child(2) {
          position: absolute;
          bottom: 2px;
          right: 5px;
        }
      `}</style>
    </div>
  );
};

const IndexContainer = ({ list }) => {
  return (
    <>
      <div className="index_container">
        {list.map((item, i) => (
          <a key={i} href={`#work_${i}`}>
            <IndexModule key={i} id={i}></IndexModule>
          </a>
        ))}
      </div>
      <style jsx>
        {`
          .index_container {
            display: grid;
            grid-template-columns: repeat(${list.length}, 30px);
            overflow-x: auto;
            height: 55px;
          }

          .index_container::-webkit-scrollbar {
            display: none;
          }

          a {
            color: #000;
          }

          a:active,
          a:focus,
          a:visited {
            color: #000;
          }
        `}
      </style>
    </>
  );
};

export default IndexContainer;
