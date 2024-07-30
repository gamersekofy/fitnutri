import React, { useState } from 'react';

function Search() {
    
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
 
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
      <button onClick={handleSearch}>Search</button>
      {results.length ? (
        <ul>
          {results.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Search;
