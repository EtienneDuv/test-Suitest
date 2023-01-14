const {dbQuery} = require('../services/database');

module.exports = async (req, res, next) => {
    let {name, email, password} = req.body;

    try {
        // CREATE USER
        await dbQuery(`
          INSERT INTO Users (name, email, password) values
          ('${name}', '${email}', '${password}');
        `);
        let response = await dbQuery(`SELECT id FROM Users WHERE email = '${email}'`);
        const createdUser = response.rows[0];

        // CREATE ACCOUNT
        await dbQuery(`
          INSERT INTO Accounts (userId, money) 
          values ('${createdUser.id}', 0);
        `);
        response = await dbQuery(`SELECT id FROM Accounts WHERE userId = '${createdUser.id}'`);
        const createdAccount = response.rows[0];

        res.json({accountId: createdAccount.id});
    } catch (err) {
        next(err);
    }
};
