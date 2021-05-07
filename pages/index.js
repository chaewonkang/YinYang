import Layout from "../components/Layout";
import Bookmark from "../components/Bookmark";
import Clock from "../components/Clock";
import IndexModule from "../components/IndexModule";
import Content from "../components/Content";
import ex1 from "../img/ex_1.jpg";
import ex2 from "../img/ex_2.jpg";
import ex3 from "../img/ex_3.jpg";

const items = [{ photo: ex1 }, { photo: ex2 }, { photo: ex3 }];

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
        grid-template-columns: repeat(5, 1fr) 100px 167px;
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
        grid-column: 1 / 7;
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
