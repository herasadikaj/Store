/* eslint-disable @typescript-eslint/no-unused-vars */
// ArticleListPage.tsx
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { articles } from '../../../Context/articles'; // Ensure the path is correct
import Card from './Card';
import Layout from '../Layout';
interface ArticleListPageProps {
    selectedCategory: string | null;
}

const ArticleListPage: React.FC<ArticleListPageProps> = ({ selectedCategory }) => {
    const filteredArticles = selectedCategory
        ? articles.filter(article => article.type === selectedCategory)
        : articles;

    return (
        <Box sx={{ padding: 3 }}>
            <Layout onCategorySelect={function (category: string): void {
                throw new Error('Function not implemented.');
            } }>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
            </Typography>

            {filteredArticles.length === 0 ? (
                <Typography variant="h6" color="textSecondary">
                    No products available for the selected category.
                </Typography>
            ) : (
                <Grid container spacing={2}>
                    {filteredArticles.map(article => (
                        <Grid item key={article.id} xs={12} sm={6} md={4} lg={3}>
                            <Card article={article} />
                        </Grid>
                    ))}
                </Grid>
            )}
            </Layout>
        </Box>
    );
};

export default ArticleListPage;
