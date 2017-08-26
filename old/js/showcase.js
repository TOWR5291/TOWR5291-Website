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
var FTC5291 = FTC5291 || {};

FTC5291.ShowcaseCollection = {

}

// Product showcase
/**
* @param id ID of the product
*/
FTC5291.Showcase = function(id) {

	// Reset product collection datas
	Garbage.unload_previous(id);

	// Check existing.
	if (typeof FTC5291.ShowcaseCollection[ id ] != 'undefined') {
		return FTC5291.ShowcaseCollection[ id ];
	}

	// Id of the product
	this.id = id;

	// Slide for further use (if necessary)
	this.slide = $('#js-showcase-'+id);

	// Actions
	this.actions = {
		load_description : 'action.ftc5291.showcase-description'
	}

	// Product content class
	this.product_content_class = 'js-add-member-content';

	// Product content obj
	this.product_content = $('.'+this.product_content_class);

	// Loading?
	this.loading = false;
	this.loaded = false;

	// Store
	FTC5291.ShowcaseCollection[ id ] = this;
}

/**
* Gets the product description via AJAX
* @param callback function to do whatever you want with the response
* @return nothin.
*/
FTC5291.Showcase.prototype.load_description = function(callback)
{
	// Scope
	var _this = this;

	// Datas
	var datas = {
		id : _this.id
	}

	// Scope
	var callback = callback;

	// Clear html
	_this.product_content.html('');

	// Loading
	_this.loading = true;

	// Add preloader animation
	$.get(_this.actions.load_description, datas, function(response) {

		if (typeof callback == 'function') {
			callback(response);
		}

		if (response.success) {

			// Remember you DID load that.
			_this.loaded = true;
			_this.loading = false;

			// Add new content
			_this.product_content.html(response.html);

			// Animate
			_this.product_content.find('.quarter').each(function(i, e) {
				$(this).delay(i*100).fadeIn();
			})

			$('a.js-pdf').each(function(i,e) {
				$(this).attr('href', response.pdf);
			});

		}

	}, 'json');

}

// Remove current product and all unnecessary listeners
FTC5291.Showcase.prototype.destroy = function()
{
	this.id = null;
	this.loading = null;
	this.loaded = null;
	this.product_content = null;
	this.actions = null;
}

/**
* Garbage collector, easy pick
*/
FTC5291.GarbageCollector = Mas.GarbageCollector || function() { };


/**
* Removes all product from the collection
*/
FTC5291.GarbageCollector.prototype.clean = function()
{
	var collection = Mas.ShowcaseCollection;

	for (var id in collection) {
		collection[ id ].destroy();
		collection[ id ] = null;
	}

	FTC5291.ShowcaseCollection = {};
}

/**
* Unload all products, setting "loaded" and "loading" to FALSE
* @param obj_id if specified, unloads all product BUT the one with the matching ID
*/
FTC5291.GarbageCollector.prototype.unload_previous = function(obj_id)
{
	var collection = FTC5291.ShowcaseCollection;

	for (var id in collection) {
		if (id != obj_id) {
			collection[ id ].loaded = false;
			collection[ id ].loading = false;
		}
	}

}

var Garbage = new FTC5291.GarbageCollector;