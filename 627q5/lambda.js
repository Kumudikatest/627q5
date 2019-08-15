let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_uVXTQInep",
        Limit: 100
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            //errot eeero
            throw error;
        }
        // your logic goes within this block //change
        //edit
    });

    callback(null, { "message": "Successfully executed" });
}