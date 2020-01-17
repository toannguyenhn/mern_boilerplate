
/**
 * Module dependencies.
 */

const path = require('path');

const development = require('./env/development');
const test = require('./env/test');
const production = require('./env/production');

const notifier = {
  service: 'postmark',
  APN: false,
  email: true, // true
  actions: ['comment'],
  tplPath: path.join(__dirname, '..', 'app/mailer/templates'),
  key: 'POSTMARK_KEY',
};

const defaults = {
  root: path.join(__dirname, '..'),
  notifier,
};

/**
 * Expose
 */

module.exports = {
  development: { ...development, ...defaults },
  test: { ...test, ...defaults },
  production: { ...production, ...defaults },
}[process.env.NODE_ENV || 'development'];
