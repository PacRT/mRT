var client = require('./').mrt().client();

// Calling a regular service
client.act('role: math, cmd: sum, left: 1, right: 2', function (err, result) {
    if (err) return console.error(err);
    console.log(result);
});


//Calling a plugin service
client.act( {foo:'bar'}, function(err, result, diagonstic) {
    if (err) return console.error(err);
    console.log(result);
    console.log('Diagnostic: ', diagonstic)
});