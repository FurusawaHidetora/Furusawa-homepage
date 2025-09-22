import { About } from "../section/about";
import { News } from "../section/news";
import { Topics } from "../section/topics";

export const Home = () => {
  return (
    <div className="Home">
      <Topics />
      <About />
      <News />
    </div>
  );
};
