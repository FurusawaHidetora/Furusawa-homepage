import { About } from "./section/about";
import { News } from "./section/news";
import { Topics } from "./section/topics";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <header
        className="App-header"
        style={{
          backgroundColor: "black",
          color: "white",
          width: "100%",
          height: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", left: "10px" }}>フルサワークス</div>
      </header>
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
