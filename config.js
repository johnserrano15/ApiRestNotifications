'use strict'

module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/notifications',
  SECRET_TOKEN: process.env.JWT || 'my-key-secrete',
}
