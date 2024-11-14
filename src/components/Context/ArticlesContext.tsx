/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState } from 'react';

interface Article {
  id: string;
  type: string;
  title: string;
  description: string;
}

interface ArticlesContextType {
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within an ArticlesProvider');
  }
  return context;
};

export const ArticlesProvider: React.FC = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const addArticle = (newArticle: Article) => {
    setArticles(prevArticles => [...prevArticles, newArticle]);
  };

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};
