import React from 'react';
import { Card as MCard, CardContent, CardMedia, Typography } from '@mui/material';
import { Article } from '../../../Context/articles';

interface CardProps {
  article: Article;
}

const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <MCard sx={{ maxWidth: 345, margin: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="300"
        width="250"
        image={article.image}
        alt={article.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {article.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          {article.description}
        </Typography>
        <Typography variant="h6" color="primary">
          {article.price}
        </Typography>
      </CardContent>
    </MCard>
  );
};

export default Card;
