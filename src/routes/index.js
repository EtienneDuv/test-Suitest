const handlers = require('../handlers');
const middlewares = require('../middlewares');

module.exports = (app) => {
    app.post(
        '/user',
        middlewares.hashPassword,
        handlers.createUser
    );

    app.post(
        '/addMoney',
        middlewares.verifyAccountOwnership,
        handlers.addMoney
    );

    app.post(
        '/withdrawMoney',
        middlewares.verifyAccountOwnership,
        handlers.withdrawMoney
    );
};
