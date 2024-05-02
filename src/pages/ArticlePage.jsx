import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentList from "../components/CommentList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

function ArticlePage() {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  // const BASE_URL = "http://localhost:8000";
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);


  const { user, isLoading } = useUser();
  
  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(
        `http://localhost:8000/api/article/${articleId}/getone`
      );
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    
    loadArticleInfo();
  }, []);
  

  const addUpvote = async () => {
    const response = await axios.put(
      `http://localhost:8000/api/article/${articleId}/upvote`
    );
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
          <h1 className="font-bold text-xl text-center m-2 p-2">{article.title}</h1>
      {article.content?.map((paragraph, i) => (
        <p key={i} className="text-justify leading-6 p-4">
          {paragraph}
        </p>
      ))}
      <div className="upvote-section flex justify-center ">
      {user ?<button className="p-2 px-10 bg-yellow-500 border border-black rounded-md" onClick={ addUpvote }>Upvote</button> 
      : <button className="p-2 px-10 bg-yellow-500 border border-black rounded-md">Login to upvote now</button> }
        <p className=" text-sm p-1 bg-yellow-200 text-center flex justify-center gap-10 items-center ">
          This article has {articleInfo?.upvotes} upvote(s)
        </p>
      </div>
      {user ?
      <AddCommentForm 
        articleName={ articleId } 
        onArticleUpdate={updatedArticle => setArticleInfo(updatedArticle)}/>
        :<button className="mt-4 p-2 px-10 bg-yellow-500 border border-black rounded-md" >Login to Add a Comment</button> }
      <CommentList comments={articleInfo?.comments} /> 
    
    </>
  );
}

export default ArticlePage;
