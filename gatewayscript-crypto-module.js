var crypto = require('crypto');
var key = new Buffer("a73e3406e7dcc5fc168d9ae9954ec6e0d85e4444");

var hmac = crypto.createHmac('sha256', key);
var input = "This is plaintext to hash";
var result = hmac.update(input).digest('base64');

session.output.write(result);

/*
Salida: APURryIxqDpz4u9F1DHVEMVJVcl+vk+BzDol83YFTVE=
*/