/**
 * Adjusting Font Size
 */

var initStatus = false;

// Defining the default font-size
var defaultSize = 14;
var currentSize = 14;

// Defining the $els
var $el;
var $demo;
var $current;

/**
 * adjustSize
 * This method adjusts the font size in the demo area
 */
var adjustSize = function(adjustment) {
    if(!adjustment || typeof adjustment !== 'string' || !$demo || !$current) {
        return false;
    }

    // Changing the currentSize based on the adjustment
    if(adjustment === 'increase-font-size') {
        currentSize++;
    } else {
        currentSize--;
    }

    // Adjust the font size
    $demo.css('fontSize', currentSize);
    $current.html(currentSize);

    // Return the currentSize
    return currentSize;

};

/**
 * render
 * This method adds the click event to the $el object
 */
var render = function() {
    if(!$el) {
        return false;
    }

    $el.on('click', '.option', function() {
        adjustSize($(this)[0].id);
    });

};

/**
 * initialize
 */
var initialize = function() {

    if(initStatus) {
        return false;
    }
    initStatus = true;

    // Setup the $elements
    $el = $('#adjust-font-size');
    $demo = $('#adjust-text-demo');
    $current = $('#current-font-size');

    // Render the module
    render();

};

// Initailize
initialize();

/**
 * getCurrentSize
 * Public method to check the current font size
 */
var getCurrentSize = function() {
    return currentSize;
};

// Exporting the module
module.exports = {
    currentSize: getCurrentSize
};