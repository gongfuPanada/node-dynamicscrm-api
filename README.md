# MS Dynamics CRM client for Nodejs
This node module provides a set of methods to interact with MS Dynamics CRM Online services.
This is a pure SOAP proxy that supports LiveId authentication.

The module was created as part of [KidoZen](http://www.kidozen.com) project, as a connector for its Enterprise API feature.

## Installation

Use npm to install the module:

```
> npm install dynamicscrm-api
```

## API

Due to the asynchrounous nature of Nodejs, this module uses callbacks in requests. All callbacks have 2 arguments: `err` and `data`.

```
function callback (err, data) {
	// err contains an Error class instance, if any
	// data contains the resulting data
} 
``` 

### Constructor

The module exports a class and its constructor requires a configuration object with following properties

* `domain`: Required string. Provide domain name for the On-Premises org. 
* `organizationid`: Required string. Sign in to your CRM org and click Settings, Customization, Developer Resources. On Developer Resource page, find the organization unique name under Your Organization Information.
* `username`: Optional dynamics Online's user name.
* `password`: Optional user's password.
* `returnJson`: Optional, default value is "true". Transforms the CRM XML Service response to a clean JSON response without namespaces.
* `discoveryServiceAddress`: Optional. You should not change this value unless you are sure. default value is "https://dev.crm.dynamics.com/XRMServices/2011/Discovery.svc"

```
var dynamics = require("dynamicscrm-api");
var dynamics = new dynamics({ 
	domain: "mycompany", 
	organizationid: "e00000ee0e000e0e00ee0eeee0e0e0ee",
	timeout: 5*60*1000 	// Timeout of 5 minutes
});
```

### Methods
All public methods has the same signature. The signature has two arguments: `options` and `callback`.
* `options` must be an object instance containig all parameters for the method.
* `callback` must be a function.

#### Authenticate(options, callback)

This method should be used to authenticate user's credentials. A successed authentication will return an object instance containing the authentication tokens that will be required by other methods.

**Parameters:**
* `options`: A required object instance containing authentication's parameters:
	* `username`: String.
	* `password`: String.
* `callback`: A required function for callback.

```
dynamics.Authenticate({ username:"foo", password: "bar" }, function(err, result) {
	if (err) return console.error (err);
	console.log (result.auth);
});

#### Create(options, callback)

This method should be used to create new entities such as leads, contacts, etc.

#### Update(options, callback)

This method should be used to update an entity.

#### Delete(options, callback)

This method should be used to delete an entity.

#### Retrieve(options, callback)

This method should be used to retrieve a single entity.

#### RetrieveMultiple(options, callback)

This method should be used to retrieve multiple entities.

#### Associate(options, callback)

This method should be used to create a relation between entities.

#### Disassociate(options, callback)

This method should be used to remove a relation between entities.

