import SVG from "../utils/SVG";

const Bookmark = () => (
  <>
    {" "}
    <div className="background">
      <SVG
        className="svg"
        name="bookMark"
        height="524"
        color=""
        viewBox="0 0 167 524"
      ></SVG>
      <div className="text">
        <p>
          YinYang is a design studio based in Seoul. We work as graphic designer
          and frontend engineer. We are concerned with making image which can be
          read like text. Our focus is on visual identities, website
          design/development, exhibition design and book design. We are open to
          independent or commissioned works. Please write us to discuss!
        </p>
        <p>
          YinYang featured on… <br></br>GDFS <br></br>Typojanchi <br></br>
          Shanghai Art Book Fair <br></br>
          Award <br></br>Award <br></br>Award <br></br>
        </p>
        <p>You can also buy our eggs on yolk.kr</p>
        <p>
          Write<br></br>Instagram
        </p>
      </div>
    </div>
    <style jsx>
      {`
        p {
          font-size: 13px;
          word-break: keep-all;
          margin: 0;
          padding: 5px 15px 5px 5px;
          line-height: 15px;
          font-family: "Helvetica", sans-serif;
          overflow: auto;
        }

        .background {
          margin-right: 20px;
          position: relative;
          height: 520;
          overflow: ;
        }

        .svg {
          position: absolute;
        }

        .text {
          position: absolute;
          top: 0;
        }
      `}
    </style>
  </>
);

export default Bookmark;
