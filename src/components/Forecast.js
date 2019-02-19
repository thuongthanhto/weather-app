import React from "react";
import moment from "moment";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();
const ICON_URL = env.REACT_APP_ICON_URL;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default props => {
  console.log(props);
  const {
    list,
    city: { name, country }
  } = props;

  return (
    <>
      <h2>
        Weather forecast in {name}, {country}
      </h2>
      <ul>
        {list.map(forecast => {
          const {
            dt,
            weather,
            main: { temp, temp_max, temp_min }
          } = forecast;
          return (
            <li>
              <img
                src={`${ICON_URL}/${weather[0].icon}.png`}
                alt={`Weather forecast in ${name}, ${country}`}
              />
              <p>
                {moment
                  .unix(dt)
                  .local()
                  .format("MMM DD HH:mm")}
              </p>
              <p>Temp: {temp}</p>
              <p>Max: {temp_max}</p>
              <p>Min: {temp_min}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
