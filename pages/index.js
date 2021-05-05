import Layout from "../components/Layout";
import Bookmark from "../components/Bookmark";
import Clock from "../components/Clock";
import IndexModule from "../components/IndexModule";
import Content from "../components/Content";
import ex1 from "../img/ex_1.jpg";
import ex2 from "../img/ex_2.jpg";
import ex3 from "../img/ex_3.jpg";
import ex4 from "../img/ex_4.jpg";
import ex5 from "../img/ex_5.jpg";
import ex6 from "../img/ex_6.jpg";

const items = [
  { photo: ex1 },
  { photo: ex2 },
  { photo: ex3 },
  { photo: ex4 },
  { photo: ex5 },
  { photo: ex6 },
];

const Index = () => (
  <Layout>
    <div className="container">
      <div className="index">
        <IndexModule></IndexModule>
      </div>
      <div className="content">
        <Content items={items}></Content>
        <Content items={items}></Content>
        <Content items={items}></Content>
        <Content items={items}></Content>
      </div>
      <div className="clock">
        <Clock></Clock>
      </div>
      <div className="bookmark">
        <Bookmark></Bookmark>
      </div>
    </div>
    <style jsx global>{`
      * {
        font-family: "Helvetica", sans-serif;
        margin: 0;
      }

      .container {
        display: grid;
        grid-template-columns: 1fr 100px 167px;
        grid-template-rows: 50px auto;
        row-gap: 20px;
        max-height: 90vh;
      }

      .index {
        grid-column: 1 / 9;
        grid-row: 1 / 2;
        z-index: 10;
      }

      .content {
        width: calc(100vw - 399px);
        top: 90px;
        bottom: 0;
        position: fixed;
        overflow-y: scroll;
        overflow-x: hidden;
      }

      .content::-webkit-scrollbar {
        display: none;
      }

      .clock {
        grid-column: 7 / 8;
        padding-left: 20px;
      }

      .bookmark {
        grid-column: 8 / 9;
        padding-left: 20px;
      }
    `}</style>
  </Layout>
);

export default Index;
