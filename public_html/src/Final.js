'use strict';

/**
 * Check an array matrix of 4x4 to return the largest number found.
 * @param {Array} arr 
 * 
 * @return {Number} largest
 */
function largestNumberOfFourArrays(arr) {
    //declare initial number to compare
    var largest = 0;
    var largestOrigin = [];
    //nested for loops to get numbers from 2d array
    for (var i = 0; i < arr.length; i++) {
        
        for (var j = 0; j < arr[i].length; j++) {
            
            if (arr[i][j] > largest) {
                largest = arr[i][j];
                largestOrigin = arr[i];
            }
            
        }
        
    }
    console.log(largestOrigin[0]);
    return largestOrigin[0];
}


/**
 * The function returns the string repeated the number of times specified.
 * @param {String} str 
 * @param {Number} times 
 * 
 * @return {String} strRepeated
 */
function stringRepeat(str, times) {
    //declare string to form repetitive string
    var string = "";
    
    //basic for loop to form a long string
    for (var i = 0; i < times; i++) {
        string += str;
    }


    return string;
}

/**
 * The function that will grab the value of an input field, create a div,
 * put the value into the div and append the div into the body of the HTML page.
 * @param {String} inputSelector 
 * @param {String} divID 
 * 
 * @return {VOID}
 */
function inputValueToNewDiv(inputSelector, divID) {
    //declare selected input field
    var input = document.querySelector(inputSelector);
    input.id = divID;
    
    input.innerHTML = 'testing';


}


/**
 * Create a function that will check the value of a field.  
 * If it is empty add the class "error" to the field
 * if it is not empty remove the class error from the field.
 * @param {String} inputSelector 
 * 
 * @return {VOID}
 */
function validateInputField(inputSelector) {
    //declare div to add/remove class to
    var input = document.querySelector(inputSelector);

    if (input.value.length === 0) {
        input.className = 'error';
        return false;
    } else {
        input.className = '';
        return true;
    }

}


/**
 * Create a function that when the selector is clicked on 
 * the style property color is changed to red
 * @param {String} selector 
 * 
 * @return {VOID}
 */
function colorClickRed(selector) {
    var selected = document.querySelector(selector);

    selected.addEventListener('click', changeColor());

    function changeColor() {
        selected.style.color = 'red';
    }
}


/**
 * Create a function that will take a JSON string, and return the value of a particular key
 * @param {String} json 
 * @param {String} key 
 * 
 * @return {*} any value
 */
function findKeyValue(json, key) {
    var parsedJson = JSON.parse(json);
    return parsedJson[key];

}


/**
 * Create a product item class that will allow me to create a new instance for a product.
 * 
 * It should have the following functions available to me from this class.
 * getQuantityLimit() - Return the quantity left
 * getQoute(quantity) - Return a qoute on how much it will cost to buy the product with the quantity and taxes.  
 *                      The amount should return a number with a fixed decimal point of 2. e.g. 234.9838490 should return 234.98
 * purchase(quantity) - This function will remove the quantity purchased from the quantity limit and have a return this;
 */


// ???????????????????????????????????????????????????

function ProductItem(item, quantityLimit, price, tax) {
    class item1 {

        getQuantityLimit() {

        }

        getQoute(quantity) {

        }
        purchase(quantity) {

        }
    }

}
