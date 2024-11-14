import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleListPage from './components/UI/Layout/pages/List';
import Sidebar from './components/UI/Layout/Navbar';
import Form from './components/UI/Layout/pages/Add';
import { ArticlesProvider } from './components/Context/ArticlesContext';  

const App = () => {
    return (
        <ArticlesProvider>  
            <Router>
                <div style={{ display: 'flex' }}>
                    <Sidebar onCategorySelect={(category) => console.log(category)} />
                    <div style={{ marginLeft: 250, padding: 20, flexGrow: 1 }}>
                        <Routes>
                            <Route path="/" element={<ArticleListPage selectedCategory={null} />} />
                            <Route path="/add-product" element={<Form />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </ArticlesProvider>
    );
};

export default App;
