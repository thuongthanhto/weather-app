import React, { Component } from 'react';
import cityList from './city.json';
import CityList from '../../components/CityList';
import { Container } from './styled.js';

class HomePage extends Component {
  render() {
    return (
      <Container>
        <h1>Please click city for view detail weather</h1>
        <CityList cityList={cityList} />
      </Container>
    );
  }
}

export default HomePage;
