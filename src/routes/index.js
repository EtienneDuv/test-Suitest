const handlers = require('../handlers');
const middlewares = require('../middlewares');
const {body} = require('../validation');

module.exports = (app) => {
    app.post(
        '/user',
        middlewares.validate({body: body.createUser}),
        middlewares.hashPassword,
        handlers.createUser,
    );

    app.post(
        '/addMoney',
        middlewares.validate({body: body.updateAccount}),
        middlewares.verifyAccountOwnership,
        handlers.addMoney
    );

    app.post(
        '/withdrawMoney',
        middlewares.validate({body: body.updateAccount}),
        middlewares.verifyAccountOwnership,
        handlers.withdrawMoney
    );
};
