/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Article {
  id: number;
  type: "T-shirt" | "Shoes" | "Jeans";
  name: string;
  price: string;
  image: string;
  description: string;
}

export const articles: Article[] = [
  
];

interface ArticlesContextType {
  articlesList: Article[];
  addArticle: (newArticle: Article) => void;
  editArticle: (updatedArticle: Article) => void;
  deleteArticle: (id: number) => void;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

interface ArticlesProviderProps {
  children: ReactNode;
}

export const ArticlesProvider: React.FC<ArticlesProviderProps> = ({ children }) => {
  const savedArticles = JSON.parse(localStorage.getItem("articlesList") || "[]");

  const [articlesList, setArticlesList] = useState<Article[]>(savedArticles.length > 0 ? savedArticles : articles);

  useEffect(() => {
    localStorage.setItem("articlesList", JSON.stringify(articlesList));
  }, [articlesList]);

  const addArticle = (newArticle: Article) => {
    setArticlesList((prevArticles) => [...prevArticles, newArticle]);
  };

  const editArticle = (updatedArticle: Article) => {
    setArticlesList((prevArticles) =>
      prevArticles.map((article) =>
        article.id === updatedArticle.id ? updatedArticle : article
      )
    );
  };

  const deleteArticle = (id: number) => {
    setArticlesList((prevArticles) => prevArticles.filter((article) => article.id !== id));
  };

  return (
    <ArticlesContext.Provider value={{ articlesList, addArticle, editArticle, deleteArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticles must be used within an ArticlesProvider");
  }
  return context;
};
