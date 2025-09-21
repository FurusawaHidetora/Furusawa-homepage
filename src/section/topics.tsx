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
        <button onClick={() => (window.location.href = "random")}>
          <img
            src="/article/IMG_0992.jpg"
            alt="IMG_0992"
            style={{ width: "800px" }}
          />
        </button>
      </div>
      <div
        className="small-topic"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <button onClick={() => (window.location.href = "random")}>
          <img
            src="/article/IMG_0025.jpg"
            alt="IMG_0025"
            style={{ width: "400px" }}
          />
        </button>
        <button onClick={() => (window.location.href = "random")}>
          <img
            src="/article/IMG_9965.jpg"
            alt="IMG_9965"
            style={{ width: "400px" }}
          />
        </button>
      </div>

      <button onClick={() => (window.location.href = "WORKS")}>
        VIEW MORE
      </button>
    </div>
  );
};
