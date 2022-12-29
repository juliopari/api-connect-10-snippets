var username = 'juliopari';
var password = '987654321';

var username_password = username + ':' + password;
var username_password_buffer = new Buffer(username_password);
var header_authorization_value = username_password_buffer.toString('base64');

session.output.write(header_authorization_value);

/*
Output: anVsaW9wYXJpOjk4NzY1NDMyMQ==
*/