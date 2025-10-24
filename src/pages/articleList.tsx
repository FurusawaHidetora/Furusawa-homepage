import { blogMetadata } from "../data/Blogs";
import { ArticleCard } from "../section/topics";

export const ArticleList = () => {
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
    <div style={{ display: "flex", flexDirection: "column" }}>{blogList}</div>
  );
};
