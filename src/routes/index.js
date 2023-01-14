const handlers = require('../handlers');
const middlewares = require('../middlewares');

module.exports = (app) => {
    app.post(
        '/user',
        middlewares.hashPassword,
        handlers.createUser
    );

    app.patch('/addMoney', async (req, res) => {
        // res.json(handlers.createUser);
    });

    app.patch('/withdrawMoney', async (req, res) => {
        // res.json(handlers.createUser);
    });
};
