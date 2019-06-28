const chalk = require('chalk')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const log = console.log
const address = process.argv[2]

if (!address) {
  log(chalk.red('Please provide an anddress'))
} else {
  geocode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return log(chalk.red(error))
    }
  
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return log(chalk.red(error))
      }
  
      log(chalk.bgBlue(location))
      log(chalk.blue(forecastData))
    })
  })
}

