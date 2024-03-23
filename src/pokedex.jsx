import React, { useState, useEffect } from 'react';
import Pokemon from './pokemon';

function Pokedex() {
  const [list, setList] = useState([]);
  const [language, setLanguage] = useState('english');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9; // Number of items per page

  useEffect(() => {
    fetchData();
  }, [currentPage]); // Fetch data whenever currentPage changes

  const fetchData = async () => {
    try {
      const response = await fetch(`https://us-central1-it-sysarch32.cloudfunctions.net/pagination?page=${currentPage}`);
      const data = await response.json();
      setList(data.data);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pokedex">
      <div className="language-buttons">
        <button onClick={() => handleLanguageChange('english')}>English</button>
        <button onClick={() => handleLanguageChange('japanese')}>Japanese</button>
        <button onClick={() => handleLanguageChange('chinese')}>Chinese</button>
        <button onClick={() => handleLanguageChange('french')}>French</button>
      </div>
      <div className="pokemon-list">
        {list.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} language={language} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Back</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageClick(page)} disabled={currentPage === page}>
            {page}
          </button>
        ))}
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default Pokedex;