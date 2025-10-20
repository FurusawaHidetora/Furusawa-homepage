import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown"; // 👈 インポート
import remarkGfm from "remark-gfm"; // 👈 インポート
import { blogMetadata } from "../data/Blogs"; // メタデータ

export const ArticleItem = () => {
  const { blogId } = useParams();
  const [postContent, setPostContent] = useState(""); // Markdownテキストを保持
  const [loading, setLoading] = useState(true);

  // 1. URLから該当記事のメタデータを取得
  const metadata = blogMetadata.find((p) => p.id === blogId);

  useEffect(() => {
    if (!metadata) {
      setLoading(false);
      return; // 記事が見つからなかった場合
    }

    setLoading(true);

    // 2. 記事のMarkdownファイルを非同期で取得
    // CRAの環境では、publicフォルダやsrc外のファイルにはfetchでアクセスできます。
    // (通常はsrc内のファイルは直接importしますが、今回はファイルの内容全体が欲しいのでfetchを使います)
    fetch(metadata.markdownPath)
      .then((res) => {
        if (!res.ok) throw new Error("Markdownファイルの取得に失敗");
        return res.text(); // データをJSONではなくテキストとして取得
      })
      .then((markdownText) => {
        setPostContent(markdownText);
        setLoading(false);
      })
      .catch((err) => {
        console.error("記事の読み込みエラー:", err);
        setLoading(false);
      });
  }, [blogId, metadata]); // postIdが変わったら再実行

  if (loading) {
    return <div>Markdownファイルを読み込み中...</div>;
  }

  if (!metadata) {
    return <div>記事が見つかりません。ID: {blogId}</div>;
  }

  return (
    <div>
      <h1>{metadata.title}</h1>
      <p>公開日: {metadata.date}</p>

      {/* 3. ReactMarkdownコンポーネントにテキストを渡し、HTMLとして表示 */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{postContent}</ReactMarkdown>

      <Link to="/articles">リストに戻る</Link>
    </div>
  );
};
