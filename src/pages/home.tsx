import { About } from "../section/about";
import { News } from "../section/news";
import { Topics } from "../section/topics";

export const Home = () => {
  return (
    <div className="Home">
      <div style={{ height: "100px" }} />
      <Topics />
      <div style={{ height: "150px" }} />
      <About />
      <div style={{ height: "150px" }} />
      <News />
    </div>
  );
};
