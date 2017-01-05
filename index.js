var Client = require('node-kubernetes-client');

var client = new Client({
    host:  '104.154.158.88',
    protocol: 'https',
    version: 'v1',
    token: 'ya29.CnDIA4iazLa18Ta_ewxIXrL4LsAMR05EDQgwWqsFG_EeI6D_M1iOpCVx-Ak_IPbcaI2m043i2PrG1kUYfPoaKwPDAWdajdwmmvHcNA6JRSKfV-IgzOaJiuqBbpq0HQL-aYJ3qqJmDCoBOfQuRF3aPnvn',
    reqOptions: {
        username: 'admin',
        password: 'aIGGLKWPL0O8wzB5'
    }
});

console.log('nodes')

client.nodes.get(function (err, nodes) {
    nodes[0].items.forEach(function (item) {
        console.log(item.metadata.name)
    })
});

console.log('pods')

client.pods.get(function (err, pods) {
    pods[0].items.forEach(function (item) {
        console.log(item.metadata.name)
    })
});