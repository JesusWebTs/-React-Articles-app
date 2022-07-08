import React, { useEffect, useState } from "react";
import { articlesApi } from "../services";

function useArticles() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {    
    getArticles();
    return () => {};
  }, [filter]);

  const getArticles = () => {
    setArticles([]);
    if (filter === "Todos")
      articlesApi.getAllArticles().then((el) => {
        setArticles(el);
      });
    else {
      articlesApi.getArticleFiltered({ type: filter }).then((el) => {
        setArticles(el);
      });
    }
  };

  return { articles, filter, setFilter };
}

export default useArticles;
