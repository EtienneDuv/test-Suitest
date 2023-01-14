const {Validator} = require('express-json-validator-middleware');

/**
 * Create a new instance of the `express-json-validator-middleware`
 * `Validator` class and pass in Ajv options if needed.
 *
 * @see https://github.com/ajv-validator/ajv/blob/master/docs/api.md#options
 */
const validator = new Validator();

module.exports = validator.validate;