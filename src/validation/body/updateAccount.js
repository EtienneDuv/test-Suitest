module.exports = {
    type      : 'object',
    required  : ['accountId', 'amount', 'password'],
    properties: {
        // doesn't work for some reason
        // accountId: {type: 'number'},
        // amount   : {type: 'number'},
        password: {
            type   : 'string',
            // at least: 8 characters, one capital letter, one number, one special character
            pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        },
    },
};
