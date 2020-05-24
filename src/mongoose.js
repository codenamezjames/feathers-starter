const mongoose = require('mongoose')
const logger = require('./logger')

module.exports = function (app) {
  console.log('--------------------')
  console.log(app.get('mongodb'), process.env.NODE_ENV)
  console.log('--------------------')
  mongoose
    .connect(app.get('mongodb'), {
      useCreateIndex: true,
      useNewUrlParser: true
    })
    .catch(err => {
      logger.error(err)
      process.exit(1)
    })

  mongoose.Promise = global.Promise

  app.set('mongooseClient', mongoose)
}
