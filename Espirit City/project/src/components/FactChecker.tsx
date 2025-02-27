import React, { useState } from 'react';
import { searchNews, NewsArticle } from '../utils/api';
import { NewsResult } from './NewsResult';

export const FactChecker = () => {
  const [text, setText] = useState('');
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkFacts = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await searchNews(text);
      setArticles(response.articles);
    } catch (err) {
      setError('Failed to check facts. Please try again later.');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-4">Article </h2>
        <div className="space-y-4">
          <div>
            <textarea
              placeholder="Enter a statement or topic to Read Articles on..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={checkFacts}
            disabled={loading || !text.trim()}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Hunting...' : 'Hunt articles'}
          </button>
          
          {error && (
            <div className="p-4 bg-red-50 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          {!loading && !error && articles.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Related News Articles:</h3>
              <NewsResult articles={articles} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};