import React from "react";
import { newsData, NewsItem } from "../data/news";

export const News = () => {
  return (
    <div style={{ paddingBottom: "20px" }}>
      <div
        style={{
          fontFamily: "WDXL Lubrifont JP N, sans-serif",
          fontWeight: "400",
          fontStyle: "normal",
          fontSize: "24px",
          paddingBottom: "10px",
        }}
      >
        NEWS
      </div>
      <div style={{ height: "200px", overflow: "scroll" }}>
        {/* newsData配列をループ処理してリストを生成 */}
        {newsData.map((item: NewsItem) => (
          <div key={item.id}>
            {item.date}: {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
