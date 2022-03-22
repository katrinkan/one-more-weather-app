import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate />
        </li>
        <li>
          <Box sx={{ textTransform: "capitalize" }}>
            {props.data.description}
          </Box>
        </li>
      </ul>
      <Grid container>
        <Grid item={6} fullWidth>
          <Box sx={{ flexDirection: "row" }}>
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°C</span>
          </Box>
        </Grid>
        <Grid item={4}>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
