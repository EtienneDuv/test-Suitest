const handlers = require('../handlers');

module.exports = (app) => {
    app.post('/user', async (req, res) => {
        res.json(await handlers.createUser(req));
    });

    app.patch('/addMoney', async (req, res) => {
        // res.json(handlers.createUser);
    });

    app.patch('/withdrawMoney', async (req, res) => {
        // res.json(handlers.createUser);
    });
};