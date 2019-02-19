import React from 'react';
import { shallow, mount } from 'enzyme';
import CityList from './CityList';

function setup(setupProps) {
  const defaultProps = { cityList: [{ id: 1, value: 'Phu Yen' }] };

  const props = { ...setupProps, ...defaultProps };
  const wrapperMount = mount(<CityList {...props} />);

  return { props, wrapperMount };
}

describe('CityList test', () => {
  it('CityList renders without crashing', () => {
    const { wrapperMount } = setup();

    expect(wrapperMount.exists()).toEqual(true);
  });
});
