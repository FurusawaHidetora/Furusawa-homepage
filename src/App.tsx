import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { ArticleList } from "./pages/articleList";
import { ArticleItem } from "./pages/articleItem";

function App() {
  return (
    <div
      className="background"
      style={{
        backgroundColor: "#f0f0f0",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "scroll",
          width: "100%",
          height: "100%",
        }}
      >
        <header
          className="App-header"
          style={{
            backgroundColor: "black",
            color: "white",
            width: "100%",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            position: "sticky",
            top: "0px",
            zIndex: "10",
          }}
        >
          <div style={{ marginLeft: "10px" }}>フルサワークス</div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<ArticleList />} />
          <Route path="/Articles/:blogId" element={<ArticleItem />} />
        </Routes>
        <footer>
          <p>&copy; 2025 フルサワークス</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
