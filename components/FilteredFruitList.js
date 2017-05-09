import React from 'react';
import { Component } from 'react';

const FilteredFruitList = ( {fruit, filter} ) => {
  const list = !filter ? fruit :
    fruit.filter(i => i.fruit_type == filter);

  return (
    <ul className="fruit-list">
      {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [], 
  filter: null
}

export default FilteredFruitList;
