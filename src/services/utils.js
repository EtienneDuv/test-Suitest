const bcrypt = require('bcrypt');
// const saltRounds = 10;

module.exports = {
    hash      : password => bcrypt.hash(password, 10),
    verifyHash: (password, hash) => bcrypt.compare(password, hash)
};
