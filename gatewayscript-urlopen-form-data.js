var apim = require('apim');
var bodyAsBlob = apim.getvariable("request.body");
var headAsBlob = apim.getvariable("request.headers.content-type");

var bodyAsString = bodyAsBlob.toString();
var headAsString = headAsBlob.toString();

var urlopen = require ('urlopen');

// define the urlopen options
var options = {
    target: 'http://backend.com/oauth/token',
    // if target is https, supply a sslClientProfile
    // target: 'https://127.0.0.1:42409/echo',
    // sslClientProfile: 'alice-sslClient',
    method: 'post',
    headers: { 'Authorization' : 'Basic anVhbjpwZXJleg==' },
    contentType: headAsString,
    timeout: 60,
    data: bodyAsString,
};

// open connection to target and send data over
urlopen.open (options, function (error, response) {
    if (error) {
        // an error occurred during request sending or response header parsing
        session.output.write ("urlopen connect error: " + JSON.stringify(error));
    } else {
        // read response data
        // get the response status code
        var responseStatusCode = response.statusCode;
        if (responseStatusCode == 200) {
            response.readAsBuffer(function(error, responseData) {
                if (error) {
                    // error while reading response or transferring data to Buffer
                    session.output.write("readAsBuffer error: " + JSON.stringify(error));
                } else {
                    session.output.write(responseData);
                } 
            });
        } else {
            session.output.write ("urlopen target return statusCode " + responseStatusCode);
        }
    }
}); // end of urlopen.open()
apim.output('application/json');
