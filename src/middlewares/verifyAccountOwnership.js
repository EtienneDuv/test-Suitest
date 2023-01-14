const {verifyHash} = require('../services/utils');
const {dbQuery} = require('../services/database');
const {wrongPasswordError, accountDoesNotExistError} = require('../errors');

module.exports = async (req, res, next) => {
    const {accountId, password} = req.body;

    let response = await dbQuery(`
      SELECT password as hash
      FROM Accounts as a INNER JOIN Users as u
      ON a.userId = u.id
      WHERE a.id = '${accountId}'
    `);

    if (response.rowCount == 0) {
        return next(new accountDoesNotExistError);
    }

    const {hash} = response.rows[0];

    const validPassword = await verifyHash(password, hash);

    if (!validPassword) {
        return next(new wrongPasswordError);
    }

    next();
};
