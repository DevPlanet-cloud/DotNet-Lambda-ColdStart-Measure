const AWS = require('aws-sdk');

const lambda = new AWS.Lambda();

exports.handler = async (event, context) => {
    // First invoke NodeJS lambda
    const unixEpochTime = Math.floor(new Date().getTime());
    
    const inputData = {
        inputParam: unixEpochTime
    };

    const params = {
        FunctionName: 'node-coldstart-measure',
        InvocationType: 'Event', // Use 'Event' for asynchronous invocation
        Payload: JSON.stringify(inputData)
    };

    const response = await lambda.invoke(params).promise();
    console.log('Invocation response:', response);
    console.log('NodeJS Lambda function invoked successfully');

    // Second invoke Python lambda
    const unixEpochTimePython = Math.floor(new Date().getTime());
    
    const inputDataPython = {
        invoke_epoch: unixEpochTimePython
    };

    const paramsPython = {
        FunctionName: 'python-coldstart-measure',
        InvocationType: 'Event', // Use 'Event' for asynchronous invocation
        Payload: JSON.stringify(inputDataPython)
    };

    const responsePython = await lambda.invoke(paramsPython).promise();
    console.log('Invocation response:', responsePython);
    console.log('Python Lambda function invoked successfully');

    // Lastly invoke Dotnet lambda
    const unixEpochTimeDotnet = Math.floor(new Date().getTime());
    const inputDataDotnet = unixEpochTimeDotnet.toString();

    const paramsDotnet = {
        FunctionName: 'dotnet-coldstart-measure',
        InvocationType: 'Event', // Use 'Event' for asynchronous invocation
        Payload: JSON.stringify(inputDataDotnet)
    };

    const responseDotnet = await lambda.invoke(paramsDotnet).promise();
    console.log('Invocation response:', responseDotnet);
    console.log('Dotnet Lambda function invoked successfully');
    
    return {
        statusCode: 200,
        body: 'All Lambdas function invoked successfully'
    };
};
