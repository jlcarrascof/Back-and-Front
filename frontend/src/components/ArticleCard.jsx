import React from 'react';

const ArticleCard = ({ title, urlToImage, author, url }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Banda superior */}
      <div className="p-4 bg-blue-500 text-white">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      {/* Centro */}
      <img src={urlToImage} alt={title} className="w-full h-48 object-cover" />
      {/* Banda inferior */}
      <div className="p-4 flex justify-between items-center">
        <span className="text-gray-700">Author: {author}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          More info...
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
