'use strict';

var ram = require('random-access-memory');
var hyperdrive = require('hyperdrive');
var discovery = require('hyperdiscovery');

var archive = hyperdrive(
    ram,
    '5cd26163dfac6815364b3fdf424c411fda56e1e3ad98a035b5a33c106611a1ea'
);
archive.ready(function() {
    discovery(archive);
    var stream = archive.readFile('data.json', 'utf-8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
});
