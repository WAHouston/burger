var orm = require("./orm")
var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res)
        })
    },
    insertOne: function(value, cb) {
        orm.insertOne(function(res) {
            cb(res)
        })
    },
    updateOne: function(id, cb) {
        orm.updateOne(function(res) {
            cb(res)
        })
    }
}
module.exports = burger