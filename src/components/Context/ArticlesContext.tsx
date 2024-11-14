import React, { createContext, useContext, useState } from "react";

// Defining the Article interface
export interface Article {
  id: number;
  type: "T-shirt" | "Shoes" | "Jeans";
  name: string;
  price: string;
  image: string;
  description: string;
}

// Dummy data

export const articles: Article[] = [
  // T-shirts
  { id: 1, type: "T-shirt", name: "Nirvana T-shirt", price: "40$", image: "https://www.kidvicious.co.uk/cdn/shop/products/Nirvana_Adult_T_Shirt_Smiley_Face.jpg?v=1674228049", description: "Vintage-inspired Nirvana T-shirt featuring the iconic smiley face logo." },
  { id: 2, type: "T-shirt", name: "Graphic Tee", price: "25$", image: "https://cdn.shopify.com/s/files/1/0261/5266/5168/files/BW-5234-60-8226_navy_540x.jpg?v=1727269694", description: "Trendy graphic T-shirt made from soft cotton, ideal for casual wear." },
  { id: 3, type: "T-shirt", name: "Plain White T-shirt", price: "15$", image: "https://www.kingsize.com.au/user/images/28053.jpg?t=2107291150", description: "Classic plain white T-shirt, a must-have staple in any wardrobe." },
  { id: 4, type: "T-shirt", name: "Striped T-shirt", price: "30$", image: "https://isto.pt/cdn/shop/files/Striped_T-Shirt_White_Green_1_3b5baf7a-e4dd-4e72-8159-11d31761cff5.webp?v=1684843424", description: "Stylish striped T-shirt made with breathable material for comfort." },

  // Shoes
  { id: 5, type: "Shoes", name: "Vans", price: "80$", image: "https://images.vans.com/is/image/VansEU/VN000EYEBWW-HERO?wid=640&hei=800&fmt=jpeg&qlt=85,1&op_sharpen=1&resMode=sharp2&op_usm=1,1,6,0", description: "Classic Vans skate shoes with a durable canvas and rubber sole." },
  { id: 6, type: "Shoes", name: "Running Sneakers", price: "90$", image: "https://pyxis.nymag.com/v1/imgs/a6d/fc0/4da4be21d1741718404660586a5b6a6f3e.jpg", description: "Lightweight running sneakers designed for comfort and speed." },
  { id: 7, type: "Shoes", name: "Leather Boots", price: "120$", image: "https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K400575-001_LF.jpg", description: "Premium leather boots with a rugged design, perfect for outdoors." },
  { id: 8, type: "Shoes", name: "Casual Loafers", price: "70$", image: "https://www.calza.com.pk/cdn/shop/files/1_455e4eca-5f46-49a1-8af8-7c8f8a0ad522.jpg?v=1703584085", description: "Comfortable casual loafers for everyday wear, with a slip-on design." },

  // Jeans
  { id: 9, type: "Jeans", name: "Slim Fit Jeans", price: "60$", image: "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77040595_TC.jpg?imwidth=2048&imdensity=1&ts=1715253390801", description: "Stylish slim-fit jeans made with stretchy fabric for a snug fit." },
  { id: 10, type: "Jeans", name: "Straight Cut Jeans", price: "50$", image: "https://www.replayjeans.com/dk/media/catalog/product/M/9/M9Z1_000_800-727_011_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:", description: "Classic straight-cut jeans that offer comfort and a timeless style." },
  { id: 11, type: "Jeans", name: "Ripped Jeans", price: "55$", image: "https://i5.walmartimages.com/asr/af9e98b0-1155-4d18-b10a-c3482607c015.cd5f75671315dd01ebb367f07e2971cd.jpeg", description: "Trendy ripped jeans with a distressed look, perfect for casual wear." },
  { id: 12, type: "Jeans", name: "High-Waisted Jeans", price: "65$", image: "https://pyxis.nymag.com/v1/imgs/c68/c33/c38ae8241c09ae91d0dd5a8d264d15768c-ribcage-skinny.rsquare.w600.png", description: "Comfortable high-waisted jeans, great for pairing with crop tops." }
];

// Creating Context for Articles
const ArticlesContext = createContext(null);

// Creating Provider
export const ArticlesProvider = ({ children }) => {
  const [articlesList, setArticlesList] = useState(articles);

  // Function to add a new article
  const addArticle = (newArticle) => {
    setArticlesList((prevArticles) => [...prevArticles, newArticle]);
  };

  // Function to edit an existing article
  const editArticle = (updatedArticle) => {
    setArticlesList((prevArticles) =>
      prevArticles.map((article) =>
        article.id === updatedArticle.id ? updatedArticle : article
      )
    );
  };

  // Function to delete an article
  const deleteArticle = (id) => {
    setArticlesList((prevArticles) => prevArticles.filter((article) => article.id !== id));
  };

  return (
    <ArticlesContext.Provider value={{ articlesList, addArticle, editArticle, deleteArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
};

// Custom hook to use Articles Context
export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticles must be used within an ArticlesProvider");
  }
  return context;
};
