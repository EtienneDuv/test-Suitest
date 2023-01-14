const {dbQuery} = require('../services/database');

module.exports = async (req, res, next) => {
    let {accountId, money} = req.body;

    try {
        const response = await dbQuery(`
            UPDATE Accounts
            SET balance = balance - ${money}
            WHERE id = ${accountId};

            SELECT balance FROM Accounts
            WHERE id = ${accountId};
        `);

        const account = response[1].rows[0];

        res.json({
            withdrawn     : money,
            currentBalance: account.balance
        });
    } catch (err) {
        next(err);
    }
};
