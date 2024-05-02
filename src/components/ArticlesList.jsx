import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import articles from '../pages/article-content.js';


function ArticlesList({ article }) {
  return (
    <>
    {articles.map((article) => (
        <Link key={article.name} className="flex flex-col justify-center items-center mb-5 max-w-md"
          to={`/articles/${article.name}`}>
          <h3 className="text-xl font-bold p-2">{article.title}</h3>
          <p className="text-justify max-w-md border-b-4 border-black pb-3">
            {article.content[0].substring(0, 150)}
          </p>
        </Link>
      ))}
    </>
  )
}

export default ArticlesList