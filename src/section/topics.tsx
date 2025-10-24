import { Link } from "react-router-dom";
import { blogMetadata } from "../data/Blogs";

export const ArticleCard = ({
  photoName,
  articleTitle,
  linkName,
}: {
  photoName: string;
  articleTitle: string;
  linkName: string;
}) => {
  return (
    <Link to={`/Articles/${linkName}`}>
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
            width: "90vw",
            aspectRatio: "16/9",
            objectFit: "cover",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            display: "block",
          }}
        />
        <div
          className="title"
          style={{
            width: "90vw",
            aspectRatio: "16/3",
            textAlign: "center",
            backgroundColor: "white",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        >
          {articleTitle}
        </div>
      </div>
    </Link>
  );
};

export const Topics = () => {
  const blog = blogMetadata;

  const blogList = blog.map((value) => {
    return (
      <ArticleCard
        key={value.id}
        photoName={`/article-photo/${value.id}.jpg`}
        articleTitle={value.title}
        linkName={value.id}
      />
    );
  });

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
      <div style={{ padding: "20px" }}>BLOGS</div>

      <div
        className="topic"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {blogList}
      </div>

      <Link to="/Articles" style={{ padding: "20px" }}>
        VIEW MORE
      </Link>
    </div>
  );
};
