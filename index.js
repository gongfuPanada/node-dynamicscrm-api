/*
* Module's dependencies
*/
var Util    = require('./lib/util.js');

var Dynamics = function (settings) {

    // validates arguments
    if (!settings || typeof(settings)!=="object") throw new Error("'settings' argument must be a valid object instance.");

    // creates an instance of class that handles all requests
    var util = new Util(settings);

    this.Authenticate = function(options, cb) {
        util.Authenticate(options, cb)
    };

    // 
    this.Create = function(options, cb) {
        util.Create(options, cb);
    };

    this.Update = function(options, cb) {
        util.Update(options, cb);
    };

    this.Retrieve = function(options, cb) {
        util.Retrieve(options, cb);
    };

    this.RetrieveMultiple = function(options, cb) {
        util.RetrieveMultiple(options, cb);
    };

    this.Associate = function(options, cb) {
        util.Associate(options, cb);
    };

    this.Disassociate = function(options, cb) {
        util.Disassociate(options, cb);
    };

    this.Execute = function(options, cb) {
        util.Execute(options, cb);
    };

    this.Delete = function(options, cb) {
        util.Delete(options, cb);
    };
};

module.exports = Dynamics;
