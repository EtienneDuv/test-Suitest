module.exports = class WrongPasswordError extends Error {
    constructor () {
        super('Wrong password');
        this.code = 'WRONG_PASSWORD_ERROR';
        this.status = 401;
    }
};
