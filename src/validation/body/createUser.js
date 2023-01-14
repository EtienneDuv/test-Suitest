module.exports = {
    type      : 'object',
    required  : ['name', 'email', 'password'],
    properties: {
        name : {type: 'string'},
        email: {
            type   : 'string',
            pattern: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'
        },
        password: {
            type   : 'string',
            // at least: 8 characters, one capital letter, one number, one special character
            pattern: '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'
        },
    },
};