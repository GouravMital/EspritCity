import React from 'react';
import { NewsArticle } from '../utils/api';

interface NewsResultProps {
  articles: NewsArticle[];
}

export const NewsResult: React.FC<NewsResultProps> = ({ articles }) => {
  if (!articles.length) {
    return (
      <div className="text-gray-600">
        No related news articles found.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <div key={index} className="border rounded-lg p-4 bg-white">
          <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
          <p className="text-gray-600 mb-2">{article.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{article.source.name}</span>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};