const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/955761bedb39ea039a8693464a687d44/${latitude},${longitude}?exclude=minutely,hourly,alerts,flags&units=si`
  
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!')
    } else if (body.error) {
      callback('Unable to find location')
    } else {
      const currentlyData = body.currently
  
      callback(undefined, `${body.daily.data[0].summary}\nIt is currently ${currentlyData.temperature}°C out. There is a ${currentlyData.precipProbability}% chance of rain.`)
    }
  })
}

module.exports = forecast