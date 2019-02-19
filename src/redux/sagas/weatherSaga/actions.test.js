import { getWeatherWatcher } from './actions';

describe('Weather action', () => {
  it('Should getDate properly', () => {
    const expectResult = {
      payload: 1,
      type: 'app/weather/GET_WEATHER__WATCHER'
    };
    expect(getWeatherWatcher(1)).toEqual(expectResult);
  });
});
