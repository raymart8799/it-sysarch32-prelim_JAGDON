import React from 'react';

const typeColors = {
  'Grass': '#78c850',
  'Fire': '#f08030',
  'Water': '#6890f0',
  'Bug': '#a8b820',
  'Normal': '#a8a878',
  'Poison': '#a040a0',
  'Flying': '#a890f0',
  'Electric': '#f8d030',
  'Ground': '#e0c068',
  'Fairy': '#ee99ac',
  'Fighting': '#c03028',
  'Psychic': '#f85888',
  'Rock': '#b8a038',
  'Steel': '#b8b8d0',
  'Ice': '#98d8d8',
  'Ghost': '#705898',
  'Dragon': '#7038f8',
};

function Pokemon ({ pokemon, language }) {
  const displayName = pokemon.name[language];

  return (
    <div className="pokemon">
      <img src={pokemon.image} alt={displayName} />
      <p>ID: {pokemon.id}</p>
      <p>Name: {displayName}</p>
      <div className="type-container">
        {pokemon.type.map((type, index) => (
          <span key={index} className="type" style={{ backgroundColor: typeColors[type] }}>{type}</span>
        ))}
      </div>
      <div className="stats-container">
        <div className="stats-column">
          <p>HP: {pokemon.base.HP}</p>
          <p>Attack: {pokemon.base.Attack}</p>
          <p>Defense: {pokemon.base.Defense}</p>
        </div>
        <div className="stats-column">
          <p>Speed: {pokemon.base.Speed}</p>
          <p>Sp. Attack: {pokemon.base['Sp. Attack']}</p>
          <p>Sp. Defense: {pokemon.base['Sp. Defense']}</p>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;