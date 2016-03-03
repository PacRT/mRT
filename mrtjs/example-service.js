var mrt = require('./').mrt();

mrt.add('role: math, cmd: sum', function (msg, respond) {
    var sum = msg.left + msg.right;
    respond(null, {answer: sum});
});

mrt.use('./plugins/mqtt-pub-plugin.js', {color: 'pink'});

mrt.client().act( {foo:'bar'}, console.log );

mrt.listen();
