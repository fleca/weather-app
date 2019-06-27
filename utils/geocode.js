const request = require('request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiZmxlY2EiLCJhIjoiY2p4Y2xybXA4MDRyZTNzbWtleDZzbGR1OCJ9.kyqNI54V4bOoKcxJ9doqCw&limit=1`

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!', undefined) //undefined is optional since if nothing is provided javascript will send undefined as the second argument
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try again with a different query') //will send undefined as response as well
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geocode