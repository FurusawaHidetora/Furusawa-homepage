import React from "react";
import { newsData, NewsItem } from "../data/news";

export const News = () => {
  return (
    <div>
      <div>更新履歴</div>
      {/* newsData配列をループ処理してリストを生成 */}
      {newsData.map((item: NewsItem) => (
        <div key={item.id}>
          {item.date}: {item.title}
        </div>
      ))}
    </div>
  );
};
