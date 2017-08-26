/**
* Represent the Mas Product Showcase object class
* Will have specific function to load content, etc.
*
* Methods:
* - load_description() 	|		Returns JSON with data AND HTML description for the product
* -
*
* Properties
* - id 					|		Product ID
* - slide				|		jQuery DOM Object Carousel slide
* - actions				|		Associative Array of possible actions
*
*/


// Namespace
var Mas = Mas || {};

// Product showcase
/**
* @param Object datas Datas that will be injected in the user on creation
* @return this (chainable);
*/
Mas.User = function(datas) {

	if (datas) {
		this.set_data(datas);
	}

	// Action urls
	this.urls = {
		newsletter 	: 'action.mas.newsletter-subscription',
		login 		: 'action.mas.login'
	}

	// Upon login.
	this.logged = false;

	return this;
}


/**
* @param Object datas The datas we wanna inject in the user object
* @return Instance of this at all time (chainable)
*/
Mas.User.prototype.set_data = function(datas)
{
	// Undefined datas, return this
	if (!datas) {
		return this;
	}

	if (typeof datas != 'object') {
		return this;
	}

	for (var k in datas) {
		this[k] = datas[k];
	}

	return this;
}


Mas.User.prototype.get_data = function()
{
	var datas = {};
	for (var k in this) {
		if (typeof this[k] == 'function') {
			continue;
		}
		datas[k] = this[k];
	}
	return datas;
}


/**
* Newsletter subscription
* @param function callback Function past to the $.post(). Function deals with the JSON Response
* @return this (chainable)
*/
Mas.User.prototype.subscribe = function(callback)
{
	var url = this.urls.newsletter;

	var datas = this.get_data();

	$.post(url, datas, callback, 'json');
	return this;
}


/**
* Login function
* Sets the data to the "this" object after AJAX call
*
* @param String username The user's username
* @param String password The user's matching password
* @param function callback Passed after ajax call with the response and the user ( callback(response, _this) )
* @return null (no need to be chainable, asynchronous) 
*/
Mas.User.prototype.login = function(username, password, callback)
{
	if (!username || !password)
	{
		return this;
	}

	// URL
	var url = this.urls.login;

	// GET datas
	var datas = {
		username : username,
		password : password
	}

	var _this = this;

	// Ask the server
	$.get(url, datas, function(response) {

		if (typeof callback == 'function') {
			callback(response, user);
		}

		// If logged, set user informations in the 
		if (response.success) {
			_this.set_data(response.user);
			_this.logged = true;
		}

	}, 'json');

}