import { Link } from "react-router-dom";

export const Topics = () => {
  return (
    <div
      className="topics"
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>TOPICS</div>
      <div
        className="big-topic"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <img
            src="/article/IMG_0992.jpg"
            alt="IMG_0992"
            style={{ width: "800px" }}
          />
        </div>
      </div>
      <div
        className="small-topic"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div>
          <img
            src="/article/IMG_0025.jpg"
            alt="IMG_0025"
            style={{ width: "400px" }}
          />
        </div>
        <div>
          <img
            src="/article/IMG_9965.jpg"
            alt="IMG_9965"
            style={{ width: "400px" }}
          />
        </div>
      </div>

      <Link to="/Articles">VIEW MORE</Link>
    </div>
  );
};
