import React from "react";
import articles from "./article-content";
// import { Link } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";

function ArticleListPage() {
  return (
    <>
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-center font-bold text-2xl mb-3">Articles</h1>
      <ArticlesList articles={articles} />
      </div>
    </>
  );
}

export default ArticleListPage;
