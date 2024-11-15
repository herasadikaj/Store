import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleListPage from './components/UI/pages/List';
import Form from './components/UI/pages/Add';
import { ArticlesProvider } from './components/Context/ArticlesContext';
import { CartProvider } from './components/Context/cartContext';  
import Cart from './components/UI/pages/Cart';

const App = () => {
    return (
        <ArticlesProvider>
            <CartProvider>  
                <Router>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: 250, padding: 20, flexGrow: 1 }}>
                            <Routes>
                                <Route path="/" element={<ArticleListPage selectedCategory={null} />} />
                                <Route path="/add-product" element={<Form />} />
                                <Route path="/cart" element={<Cart />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </CartProvider>
        </ArticlesProvider>
    );
};

export default App;
