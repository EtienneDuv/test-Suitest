const {dbQuery} = require('../services/database');

module.exports = async (req, res, next) => {
    let {name, email, password} = req.body;

    try {
        // CREATE USER
        let response = await dbQuery(`
          INSERT INTO Users (name, email, password) values
          ('${name}', '${email}', '${password}');

          SELECT id FROM Users WHERE email = '${email}';
        `);
        const createdUser = response[1].rows[0];

        // CREATE ACCOUNT
        response = await dbQuery(`
          INSERT INTO Accounts (userId, balance) 
          values ('${createdUser.id}', 0);

          SELECT id FROM Accounts WHERE userId = '${createdUser.id}';
        `);
        const createdAccount = response[1].rows[0];

        res.json({accountId: createdAccount.id});
    } catch (err) {
        next(err);
    }
};
