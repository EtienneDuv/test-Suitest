const {hash} = require('../services/utils');

module.exports = async (req, res, next) => {
    req.body.password = await hash(req.body.password);
    next();
};
