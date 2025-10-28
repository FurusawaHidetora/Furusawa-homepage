import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { ArticleList } from "./pages/articleList";
import { ArticleItem } from "./pages/articleItem";
import "./app.css";

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
            width: "100vw",
            backgroundColor: "black",
            color: "white",
            paddingTop: "10px",
            paddingBottom: "10px",
            display: "flex",
            alignItems: "center",
            position: "sticky",
            top: "0px",
            zIndex: "10",
            justifyContent: "space-between",
          }}
        >
          <div className="logo" style={{ marginLeft: "20px" }}>
            フルサーワ裏通信 正常にコミットできてるよ
          </div>
          <Link to="/" style={{ marginRight: "20px" }}>
            <img
              style={{ width: "28px" }}
              src={`${process.env.PUBLIC_URL}/icon/home1.svg`}
              alt="home-icon"
            />
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Articles" element={<ArticleList />} />
          <Route path="/Articles/:blogId" element={<ArticleItem />} />
        </Routes>
        <footer>
          <div
            style={{
              fontFamily: "WDXL Lubrifont JP N, sans-serif",
              fontWeight: "400",
              fontStyle: "normal",
              fontSize: "24px",
              paddingBottom: "50px",
            }}
          >
            &copy; 2025 フルサーワ裏通信
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
