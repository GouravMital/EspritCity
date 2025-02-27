import axios from 'axios';

const API_KEY = '1a4ad0e487969d95f0b9363aa9cb10cb';
const BASE_URL = 'https://gnews.io/api/v4';

export interface NewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}

export interface NewsResponse {
  totalArticles: number;
  articles: NewsArticle[];
}

export const searchNews = async (query: string): Promise<NewsResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        q: query,
        lang: 'en',
        country: 'us',
        max: 10,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch news data');
  }
};