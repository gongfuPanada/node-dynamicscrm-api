var assert      = require('assert');
var Dynamics    = require('../index.js');
var path        = require("path");
var fs          = require('fs');



describe("Dynamics integration tests.", function(){
    var settings = {
        username : username,
        password : password,
        organizationid : organizationid,
        domain : domain
    }

    var dynamics = new Dynamics(settings);
    
    describe("Authentication,", function(){
        var lastFileId;
        var createdFileDate;
        var copiedFileId;

        it("Should return 'PhassPhrase error',", function(done){
			dynamics.Authenticate(settings, function(err, result){
                done();
            });
        });

	});
});
