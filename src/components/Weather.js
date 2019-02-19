import React from "react";
import moment from "moment";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const env = runtimeEnv();
const ICON_URL = env.REACT_APP_ICON_URL;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default props => {
  const {
    name,
    weather,
    dt,
    sys: { country },
    main: { temp }
  } = props;
  const { description, icon } = weather[0];
  const datetime = moment
    .unix(dt)
    .local()
    .format("HH:mm MMM DD");
  return (
    <>
      <h2>
        Weather in {name}, {country}
      </h2>
      <h3>
        <img
          src={`${ICON_URL}/${icon}.png`}
          alt={`Weather in ${name}, ${country}`}
          style={{ verticalAlign: "middle" }}
        />
        {Math.round(temp)} °C
      </h3>
      <p>{capitalizeFirstLetter(description)}</p>
      <span>{datetime}</span>
    </>
  );
};
