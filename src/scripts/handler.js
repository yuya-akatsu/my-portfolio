exports.handler = async (event) => {
    // ここにLambda関数のコードを書く

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Hello World!' }),
    };
};