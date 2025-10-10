import { Link } from "react-router-dom";

export const ArticleCard = ({
  photoName,
  articleTitle,
}: {
  photoName: string;
  articleTitle: string;
}) => {
  return (
    <div
      className="article-card"
      style={{
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <img
        src={photoName}
        alt={photoName}
        style={{
          width: "400px",
          height: "250px",
          objectFit: "cover",
          borderTopRightRadius: "8px",
          borderTopLeftRadius: "8px",
        }}
      />
      <div
        className="title"
        style={{
          width: "400px",
          height: "50px",
          textAlign: "center",
          backgroundColor: "white",
          borderBottomRightRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}
      >
        {articleTitle}
      </div>
    </div>
  );
};

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
      {/* <div
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
            style={{ width: "800px", height: "500px", objectFit: "cover" }}
          />
        </div>
      </div> */}
      <div
        className="topic"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <ArticleCard
          photoName="/article/IMG_0992.jpg"
          articleTitle="[創作記]粘土こねてフィギュア作ってます"
        />
        <ArticleCard
          photoName="/article/IMG_0025.jpg"
          articleTitle="[創作記]粘土でサレットヘルムを作ってみた"
        />
        <ArticleCard
          photoName="/article/IMG_9965.jpg"
          articleTitle="[創作記]なんなんだこれは"
        />

        {/* <div>
          <img
            src="/article/IMG_0025.jpg"
            alt="IMG_0025"
            style={{ width: "400px", height: "250px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="/article/IMG_9965.jpg"
            alt="IMG_9965"
            style={{ width: "400px", height: "250px", objectFit: "cover" }}
          />
        </div> */}
      </div>

      <Link to="/Articles">VIEW MORE</Link>
    </div>
  );
};
