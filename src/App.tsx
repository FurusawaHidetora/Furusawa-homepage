import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { ArticleList } from "./pages/articleList";
import { ArticleItem } from "./pages/articleItem";

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
        <div style={{ marginLeft: "10px" }}>フルサワークス</div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Articles" element={<ArticleList />} />
        <Route path="/Articles/Content" element={<ArticleItem />} />
      </Routes>
      <footer>
        <p>&copy; 2025 フルサワークス</p>
      </footer>
    </div>
  );
}

export default App;
