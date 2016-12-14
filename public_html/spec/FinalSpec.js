
function inputSandbox(className, val) {
    var el;

    beforeEach(function () {
        el = document.createElement('input');
        el.classList.add(className);
        el.value = val;
        el.id = 'inputSandbox';
        document.body.appendChild(el);
    });


    afterEach(function () {
        document.body.removeChild(el);
        el = null;
    });

}

function sandboxElement(tag) {
    var el;

    beforeEach(function () {
        el = document.createElement(tag);
        el.id = 'sandboxElement';
        document.body.appendChild(el);
    });


    afterEach(function () {
        document.body.removeChild(el);
        el = null;
    });

}


describe("Function largestNumberOfFourArrays", function () {

    it('should find the number 10', function () {
        var test = [[1, 2, 3, 4], [4, 5, 6, 7], [8, 9, 0, 1], [10, 9, 8, 7]];
        var result = largestNumberOfFourArrays(test);
        expect(result).toEqual(10);
    });

    it('should find the number 100', function () {
        var test = [[10, 20, 30, 40], [100, 50, 60, 70], [80, 90, 0, 10], [4, 90, 80, 70]];
        var result = largestNumberOfFourArrays(test);
        expect(result).toEqual(100);
    });


});

//all set ------------------------------------
describe("Function stringRepeat", function () {

    it('should repeat "hello" five times to become hellohellohellohellohello', function () {
        var result = stringRepeat('hello', 5);
        expect(result).toEqual('hellohellohellohellohello');
    });

    it('should repeat "world" three times to become worldworldworld', function () {
        var result = stringRepeat('world', 3);
        expect(result).toEqual('worldworldworld');
    });


});
//all set ------------------------------------



describe("Function inputValueToNewDiv", function () {

    inputSandbox('newDiv', 'testing');

    it('should get the value testing and append a div with id "newDivID" with the text "testing"', function () {
        inputValueToNewDiv('input.newDiv', 'newDivID');
        var newDiv = document.querySelector('#newDivID');
        expect(newDiv.innerHTML).toEqual('testing');
        document.body.removeChild(newDiv);
    });

});

//all set ------------------------------------
describe("Function validateInputField Valid", function () {

    inputSandbox('error', 'testing');

    it('should remove the "error" class with a valid input', function () {
        validateInputField('input.error');
        var input = document.querySelector('#inputSandbox');
        expect(input.classList.contains('error')).toEqual(false);
    });

});

describe("Function validateInputField Invalid", function () {

    inputSandbox('inVal', '');

    it('should add the "error" class with a valid input', function () {
        validateInputField('input.inVal');
        var input = document.querySelector('#inputSandbox');
        expect(input.classList.contains('error')).toEqual(true);
    });

});
//all set ------------------------------------

describe("Function colorClickRed", function () {

    sandboxElement('div');

    it('should change the color red to the selector only when clicked on', function () {
        colorClickRed('#sandboxElement');
        var div = document.querySelector('#sandboxElement');
        expect(div.style.color).toEqual('');
        var event = new Event('click');
        div.dispatchEvent(event);
        expect(div.style.color).toEqual('red');
    });

});

//all set ------------------------------------
describe("Function findKeyValue", function () {

    var json = '{"id":1,"name":"A green door","price":12.50,"tags":["home","green"]}';

    it('should return "12.50" for the price key from a JSON string', function () {
        var result = findKeyValue(json, 'price');
        expect(result).toEqual(12.50);
    });

    it('should return "["home","green"]" for the tags key from a JSON string', function () {
        var result = findKeyValue(json, 'tags');
        expect(result).toEqual(["home", "green"]);
    });
});
//all set ------------------------------------

describe("Function ProductItem", function () {

    var item1 = new ProductItem('item1', 10, 12.99, 8.40);

    it('should return "10" for the quantity limit', function () {

        expect(item1.getQuantityLimit()).toEqual(10);
    });

    it('should return "545.88" when qouting five items', function () {

        var result = item1.getQoute(5);
        expect(result).toEqual('545.58');
    });
    
     it('should return "7" after purchasing three items', function () {

        expect(item1.purchase(3).getQuantityLimit()).toEqual(7);
    });
    
    it('should return "5" after purchasing two more items', function () {

        expect(item1.purchase(2).getQuantityLimit()).toEqual(5);
    });
});


