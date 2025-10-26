import { Link } from "react-router-dom";
import { blogMetadata } from "../data/Blogs";
import "./topics.css";

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
    <div className="article-card-container" style={{ marginBottom: "50px" }}>
      <Link to={`/Articles/${linkName}`}>
        <div
          className="article-card"
          style={{
            borderRadius: "8px",
          }}
        >
          <div
            className="article-card-photo-container"
            style={{ overflow: "hidden" }}
          >
            <img
              className="article-card-photo"
              src={photoName}
              alt={photoName}
              style={{
                width: "90vw",
                maxWidth: "500px",
                aspectRatio: "16/8",
                objectFit: "cover",
                borderTopRightRadius: "8px",
                borderTopLeftRadius: "8px",
                display: "block",
                transition: "transform 0.3s ease",
                zIndex: "10",
              }}
            />
          </div>
          <div
            className="title"
            style={{
              width: "90vw",
              maxWidth: "500px",
              aspectRatio: "16/2",
              textAlign: "center",
              backgroundColor: "white",
              borderBottomRightRadius: "8px",
              borderBottomLeftRadius: "8px",
              zIndex: "20",
            }}
          >
            {articleTitle}
          </div>
        </div>
      </Link>
    </div>
  );
};

export const Topics = () => {
  const blog = blogMetadata;

  const blogList = blog.map((value) => {
    return (
      <ArticleCard
        key={value.id}
        photoName={`${process.env.PUBLIC_URL}/article-photo/${value.id}.jpg`}
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
      <div
        style={{
          fontFamily: "WDXL Lubrifont JP N, sans-serif",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "24px",
          padding: "20px",
        }}
      >
        BLOGS
      </div>

      <div
        className="topic"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {blogList}
      </div>

      <Link
        className="view-more-button"
        to="/Articles"
        style={{
          padding: "10px",
          border: "1px black solid",
          borderRadius: "5px",
          fontFamily: "WDXL Lubrifont JP N, sans-serif",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "24px",
        }}
      >
        VIEW MORE
      </Link>
    </div>
  );
};
