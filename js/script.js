// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Bain Liao
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the Weather.
 * The "async" is there because it will take time for the internet to return the value
 */
async function getTemperature() {
  // the "try" is here because the internet may not be working
  // it is like an "if ... else" statement"
  try {
    const resultJSON = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
    )
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const weatherDescription = jsonData.weather[0].description
    const weatherIconId = jsonData.weather[0].icon
    const weatherIconUrl = "https://openweathermap.org/img/wn/" + weatherIconId + "@2x.png"
    const currentWeatherInKelvin = jsonData.main.temp
    const currentWeatherInCelcius = currentWeatherInKelvin - 273.15

    // output
    document.getElementById("temperature").innerHTML =
      "<p> The current temperature is " +
      currentWeatherInCelcius.toFixed(0) +
      "°C. </p> </br> <p> The current weather is " +
      weatherDescription +
      ". </br> <img src =" +
      weatherIconUrl +
      " alt='Weather Icon'>"
  } catch (error) {
    // If an error has occured
    document.getElementById("current-weather").innerHTML = "The weather is not available at this time. Please try again later." 
    console.log("Error")
  }
}