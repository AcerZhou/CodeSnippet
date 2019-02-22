const getNonce = async (param) => {
    const dynamoDb = new AWS.DynamoDB.DocumentClient({
        convertEmptyValues: true
    });

    const params = {
        TableName: 'blah-table-name',
        IndexName: 'blah-index-name',
        KeyConditionExpression: 'field = :field',
        ExpressionAttributeValues: {
            ':field': param
        }
    }

    console.log(params)

    return dynamoDb.query(params).promise().then(data => data.Items);
};
