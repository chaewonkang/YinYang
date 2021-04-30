import SVG from "../utils/SVG";

const IndexModule = ({ id }) => {
  return (
    <div className="module_container">
      <SVG name="book" height="56" color="" viewBox="0 0 30 55" />
      <div className="span">
        <span>{id.length == 1 ? null : id.slice(0, 1)}</span>
        <span>{id.length == 1 ? id.slice(0, 1) : id.slice(1, 2)}</span>
      </div>
      <style jsx>{`
        .module_container {
          position: relative;
          height: 56px;
        }
        .span {
          z-index: 2;
          position: absolute;
          bottom: 5px;
          width: 100%;
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

const IndexContainer = () => {
  const items = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
    { id: "19" },
    { id: "20" },
    { id: "21" },
    { id: "22" },
    { id: "23" },
    { id: "24" },
    { id: "25" },
    { id: "26" },
    { id: "27" },
    { id: "28" },
    { id: "29" },
    { id: "30" },
    { id: "31" },
    { id: "32" },
    { id: "33" },
    { id: "34" },
    { id: "35" },
    { id: "36" },
    { id: "37" },
    { id: "38" },
    { id: "39" },
    { id: "40" },
    { id: "41" },
    { id: "29" },
    { id: "30" },
    { id: "31" },
    { id: "32" },
    { id: "33" },
    { id: "34" },
    { id: "35" },
    { id: "36" },
    { id: "37" },
    { id: "38" },
    { id: "39" },
    { id: "40" },
    { id: "41" },
  ];

  return (
    <>
      <div className="index_container">
        {items.map((item, key) => (
          <IndexModule key={key} id={item.id}></IndexModule>
        ))}
      </div>
      <style jsx>
        {`
          .index_container {
            display: grid;
            grid-template-columns: repeat(${items.length}, 30px);
            overflow: auto;
            height: 55px;
          }

          .index_container::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default IndexContainer;
