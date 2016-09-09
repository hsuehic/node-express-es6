/**
 * Created by xuexiaowei on 16/9/8.
 */

var config = require('./config');

var zookeeper = require('node-zookeeper-client');

var client = zookeeper.createClient(config.zookeeper.url);
var path = config.zookeeper.path;

client.once('connected', function () {
    console.log('Connected to the server.');

    client.create(path, function (error) {
        if (error) {
            console.log('Failed to create node: %s due to: %s.', path, error);
        } else {
            console.log('Node: %s is successfully created.', path);
        }

        client.close();
    });
});

client.connect();