import React from 'react';
import { shallow, mount } from 'enzyme';
import DetailPage from './';

function setup(setupProps) {
  const defaultProps = {};

  const props = { ...setupProps, ...defaultProps };
  const wrapperMount = mount(<DetailPage {...props} />);

  return { props, wrapperMount };
}

const mockFunction = jest.fn();

describe('Detail test', () => {
  it('Detail page renders without crashing', () => {
    const { wrapperMount } = setup({
      match: {
        params: { id: 1567681 }
      },
      getWeatherWatcher: mockFunction
    });
    expect(wrapperMount.exists()).toEqual(true);
  });
});
