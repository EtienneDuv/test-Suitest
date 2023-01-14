module.exports = class AccountDoesNotExistError extends Error {
    constructor () {
        super('Account does not exist');
        this.code = 'ACCOUNT_DOES_NOT_EXIST';
        this.status = 404;
    }
};
