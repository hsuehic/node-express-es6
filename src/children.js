/**
 * Created by xuexiaowei on 16/9/8.
 */

var config = require('./config');
var zookeeper = require('node-zookeeper-client');

var client = zookeeper.createClient(config.zookeeper.url);
var path = config.zookeeper.path;

function listChildren(client, path) {
    console.log(path);
    client.getChildren(
        path,
        function (event) {
            console.log('Got watcher event: %s', event);
            listChildren(client, path);
        },
        function (error, children, stat) {
            if (error) {
                console.log(
                    'Failed to list children of %s due to: %s.',
                    path,
                    error
                );
                return;
            }
            //console.log('Children of %s are: %j.', path, children);
            children.forEach(function (item, index){
                var cpath = path + '/' + item ;
                cpath = cpath.replace('//','/');
                console.log(cpath);
                //listChildren(client,cpath);
            });
            //client.close();
        }
    );
}

client.once('connected', function () {
    console.log('Connected to ZooKeeper.');
    listChildren(client, path);
});

client.connect();