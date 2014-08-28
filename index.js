var Table = require("./lib/table").Table

var table = new Table()

table.createIndex("username")
table.createIndex("status")

for (var i = 0; i < 100000; i++) {
    table.insert({
        "username": "user" + i,
        "name": "The User #" + i,
        "status": i % 1000 === 0 ? 'active' : 'canceled'
    })
}

var record = table.findById(1)
console.log(record)

console.time("findBy username")
var records = table.findBy('username', "user10000")
console.timeEnd("findBy username")
console.log(records)

console.time("findBy status")
var records = table.findBy('status', "active")
console.timeEnd("findBy status")
console.log('Found', records.length, 'records')
