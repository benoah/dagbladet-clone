import React, { useEffect, useState } from "react";
import ArticleInfo from "./ArticleInfo";
import ArticleInfoCol2 from "./ArticleInfoCol2 ";

export default function NewsBody() {
  const [articles, setArticles] = useState([]);
  const [articleCol2, setArticleCol2] = useState([]);
  const [editUrl, setEditUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://storage.googleapis.com/aller-structure-task/test_data.json"
      );
      const data = await res.json();
      const articles = data[0][0].columns;
      const articleCol2 = data[0][1].columns;
      console.log("articleCol2", articleCol2);
      setArticles(articles);
      setArticleCol2(articleCol2);
    };
    fetchData();
  }, [setArticles]);

  const setEditArticleMode = (url) => {
    setEditUrl(url);
  };

  const cancelEditMode = () => {
    setEditUrl(null);
  };
  return (
    <div className="container">
      <div className="row">
        {articles.map((article) => (
          <ArticleInfo
            {...article}
            key={article.url}
            editUrl={editUrl}
            edit={setEditArticleMode}
            cancel={cancelEditMode}
            article={article}
          />
        ))}
      </div>
      <div className="row">
        {articleCol2.map((col2) => (
          <ArticleInfoCol2
            {...col2}
            key={col2.url}
            editUrl={editUrl}
            edit={setEditArticleMode}
            cancel={cancelEditMode}
            col2={col2}
          />
        ))}
      </div>
    </div>
  );
}
