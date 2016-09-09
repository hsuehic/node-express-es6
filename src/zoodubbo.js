/**
 * Created by xuexiaowei on 16/9/8.
 */

var config = require('./config');


var ZD = require('zoodubbo');
var zd = new ZD({
    // config the addresses of zookeeper
    conn: '120.26.80.23:2181'
});

// connect to zookeeper
zd.connect();

zd.client.on('connected',function (stat) {

    // get a invoker with a service path
    var invoker = zd.getInvoker('com.dtdream.vanyar.user.service.UserReadService',{version: '1.0.0'});
    console.log('connected!');
    console.log(invoker);

    // excute a method with parameters
    var method = 'getUserDetailInfo';
    var arg1={$class:'long',$:1};
    var argArray = [arg1];
    invoker.excute(method, argArray, function (err, data) {
        if (err) {
            console.log('error:');
            console.log(err);
        }else {
            console.log('data:');
            console.log(data);
        }
        zd.close();
    });
});