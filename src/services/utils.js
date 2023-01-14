const bcrypt = require('bcrypt');

module.exports = {
    /**
     * @param {string} password - plain text
     * @return {Promise} -
     */
    hash: password => bcrypt.hash(password, 10),

    /**
     * @param {string} password - plain text
     * @param {string} hash - stored hash of the password
     * @return {Promise} -
     */
    verifyHash: (password, hash) => bcrypt.compare(password, hash)
};
