import "./App.css";
import { About } from "./section/about";
import { News } from "./section/news";
import { Topics } from "./section/topics";

function App() {
  return (
    <div className="App">
      <header className="App-header">フルサワークス</header>
      <Topics />
      <About />
      <News />
      <footer>
        <p>&copy; 2025 フルサワークス</p>
      </footer>
    </div>
  );
}

export default App;
