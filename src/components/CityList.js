import React from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {
  return (
    <li>
      <a href={`/detail/${props.id}`}>{props.value}</a>
    </li>
  );
}

function CityList(props) {
  const cityList = props.cityList;
  return (
    <ul>
      {cityList.map(city => (
        <ListItem key={city.id} value={city.name} id={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
