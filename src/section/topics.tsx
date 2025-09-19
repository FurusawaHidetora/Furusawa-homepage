export const Topics = () => {
  return (
    <div className="topics">
      <div>
        <div className="big-topic">
          <button onClick={() => (window.location.href = "random")}>
            <img src="random" alt="random" />
          </button>
        </div>
        <div className="small-topic">
          <button onClick={() => (window.location.href = "random")}>
            <img src="random" alt="random" />
          </button>
          <button onClick={() => (window.location.href = "random")}>
            <img src="random" alt="random" />
          </button>
        </div>
      </div>
      <button onClick={() => (window.location.href = "WORKS")}>
        VIEW MORE
      </button>
    </div>
  );
};
