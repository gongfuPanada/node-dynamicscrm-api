/*
* Module's dependencies
*/
var Util    = require('./lib/util.js');

/**
 * SharePoint class
 * Handles invocations to SharePoint online services.
 * @param settings {object} required
 *  - host    : {string} required, containing the host name of the service. By instance: foo.sharepoint.com 
 *  - timeout : {number} optional session timeout in milliseconds. Default 15 minutes.
 *  - username: {string} optional user name
 *  - password: {string} required if username was specified.
 * @returns {SharePoint}
 * @api public
 */
var Sharepoint = function (settings) {

    // validates arguments
    if (!settings || typeof(settings)!=="object") throw new Error("'settings' argument must be a valid object instance.");

    // creates an instance of class that handles all requests
    var util = new Util(settings);

    /*
    * Authenticates a user and returns an authentication user
    * @param options {object} required.
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.authenticate = function(options, cb) {
        util.authenticate(options, cb)
    };

    /*
    * Executes a oData command.
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    *  - command : {string} required. oData expression. By instance "/entitySet('id')"
    *  - method  : {string} optional. HTTP request method to send. Default value is "GET"
    *  - data    : {any}    optional. HTTP Request's body 
    *  - etag    : {string} optional. ETag value for concurrency control.
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.oData = function(options, cb) {
        util.oData(options, cb);
    };

    /* 
    * Retrieves the list of entity sets.
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.entitySets = function(options, cb) {
        util.entitySets(options, cb);
    };

    /* 
    * Helper method to get an enitity by its id.
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    *  - resource: {string} required. Name of the entity set
    *  - id      : {any} required. Id of the entity.
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.get = function(options, cb) {
        util.get(options, cb);
    };

    /* 
    * Helper method to execute a query on an entity set. 
    * @param options {object} required.
    *  - auth       : {string} optional. Authentication token 
    *  - username   : {string} optional user name. If no username was passed, the one from settings will be used
    *  - password   : {string} required if username was specified.
    *  - resource   : {string} required. Name of the entity set
    *  - filter     : {string} optional oData $filter expression.
    *  - expand     : {string} optional oData $expand expression.
    *  - select     : {string} optional oData $select expression.
    *  - orderBy    : {string} optional oData $orderby expression.
    *  - top        : {number} optional oData $top expression.
    *  - skip       : {number} optional oData $skip expression.
    *  - inLineCount: {boolean} optional. Default value is false. 
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.query = function(options, cb) {
        util.query(options, cb);
    };

    /* 
    * Retrieves links entities between entities
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    *  - resource: {string} required. Name of the entity set of the source entity.
    *  - id      : {any} required. Id of the source entity.
    *  - entity  : {string} required. Name of the target entity type.
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.links = function(options, cb) {
        util.links(options, cb);
    };

    /* 
    * Retrieves the count of elements of an entity set
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    *  - resource: {string} required. Name of the entity set
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.count = function(options, cb) {
        util.count(options, cb);
    };

    /* 
    * Adds a new entity to the entity set
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    *  - resource: {string} required. Name of the entity set
    *  - data    : {object} required. Entity instance that will be added to the set.
    * @param cb {function} required. Callback function. 
    * @api public
    */
    this.create = function(options, cb) {
        util.create(options, cb);
    };

    /* 
    * Partial update of an existing entity
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    *  - resource: {string} required. Name of the entity set
    *  - id      : {any}    required. Id of the entity.
    *  - data    : {object} required. Entity instance with the new data.
    *  - etag    : {string} optional. ETag value for concurrency control.
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.replace = function(options, cb) {
        util.replace(options, cb);
    };

    /* 
    * Complete update of an existing entity
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    *  - resource: {string} required. Name of the entity set
    *  - id      : {any}    required. Id of the entity.
    *  - data    : {object} required. Entity instance with the new data.
    *  - etag    : {string} optional. ETag value for concurrency control.
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.update = function(options, cb) {
        util.update(options, cb);
    };

    /* 
    * Deletes an existing property
    * @param options {object} required.
    *  - auth    : {string} optional. Authentication token 
    *  - username: {string} optional user name. If no username was passed, the one from settings will be used
    *  - password: {string} required if username was specified.
    *  - resource: {string} required. Name of the entity set
    *  - id      : {any}    required. Id of the entity.
    *  - etag    : {string} optional. ETag value for concurrency control.
    * @param cb {function} required. Callback function.
    * @api public
    */
    this.remove = function(options, cb) {
        util.remove(options, cb);
    };

    // adds helper methods for each entity set.
    util.hook(this);
};

module.exports = Sharepoint;
