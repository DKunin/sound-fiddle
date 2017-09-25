var Dat = require('dat-js')
// var concat = require('concat-stream')

// var dat = Dat()
// dat.add('5cd26163dfac6815364b3fdf424c411fda56e1e3ad98a035b5a33c106611a1ea', function (repo) {
//   var readStream = repo.archive.createFileReadStream('data.json')
//   concat(readStream, function (data) {
//     console.log(data)
//   })
// })

// var Dat = require('dat-js')

var clone = Dat()
clone.add('5cd26163dfac6815364b3fdf424c411fda56e1e3ad98a035b5a33c106611a1ea', function (repo) {
  repo.archive.readFile('data.json', function (err, data) {
    console.log(data.toString()) // prints 'world'
  })
})