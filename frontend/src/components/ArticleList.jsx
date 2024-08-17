import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/articles')
      .then(response => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching articles');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <ul className="space-y-4">
        {articles.map(article => (
          <li key={article._id} className="bg-white p-4 rounded-lg shadow-md">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
