const request = require('request')

const url = 'https://api.darksky.net/forecast/955761bedb39ea039a8693464a687d44/37.8267,-122.4233?exclude=minutely,hourly,alerts,flags&units=si'

request({ url: url, json: true }, (error, response) => {
  const currentlyData = response.body.currently

  console.log(`${response.body.daily.data[0].summary}\nIt is currently ${currentlyData.temperature}°C out. There is a ${currentlyData.precipProbability}% chance of rain.`)
})