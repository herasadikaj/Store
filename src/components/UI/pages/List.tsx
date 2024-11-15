import React, { useState } from "react";
import { useArticles } from "../../Context/ArticlesContext";
import Layout from "../Layout/Layout";
import Card from "./Card";

const ProductList: React.FC = () => {
  const { articlesList, deleteArticle, editArticle } = useArticles();
  const [editMode, setEditMode] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<any>(null);

  const handleDelete = (id: number) => {
    deleteArticle(id); 
  };

  const handleEdit = (article: any) => {
    setEditMode(true);
    setCurrentArticle(article); 
  };

  const handleSave = (updatedArticle: any) => {
    editArticle(updatedArticle); 
    setEditMode(false);
    setCurrentArticle(null); 
  };

  return (
    <Layout onCategorySelect={(category: string) => { console.log('Category selected:', category); }}>
      <div>
        <h2>Product List</h2>
        <div className="product-grid">
          {articlesList.map((article) => (
            <Card 
              key={article.id} 
              article={article} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          ))}
        </div>

        {editMode && currentArticle && (
          <div className="edit-form">
            <h3>Edit Article</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                value={currentArticle.name}
                onChange={(e) => setCurrentArticle({ ...currentArticle, name: e.target.value })}
              />
              <input
                type="text"
                value={currentArticle.price}
                onChange={(e) => setCurrentArticle({ ...currentArticle, price: e.target.value })}
              />
              <textarea
                value={currentArticle.description}
                onChange={(e) => setCurrentArticle({ ...currentArticle, description: e.target.value })}
              />
              <button type="submit" onClick={() => handleSave(currentArticle)}>Save</button>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductList;
