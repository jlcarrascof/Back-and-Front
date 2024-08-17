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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article._id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
