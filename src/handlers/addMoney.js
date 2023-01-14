const {dbQuery} = require('../services/database');

module.exports = async (req, res, next) => {
    let {accountId, amount} = req.body;

    try {
        const response = await dbQuery(`
            UPDATE Accounts
            SET balance = balance + ${amount}
            WHERE id = ${accountId};

            SELECT balance FROM Accounts
            WHERE id = ${accountId};
        `);

        const account = response[1].rows[0];

        res.json({
            added         : amount,
            currentBalance: account.balance
        });
    } catch (err) {
        next(err);
    }
};
