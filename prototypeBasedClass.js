function Test( ) {
    this.prop = "prop1";
}

Test.prototype.method = function() {console.log('Test method');}

function Test2 () {
    this.prop2 = 'prop2';
}

Object.setPrototypeOf(Test2.prototype, Test);

Test2.prototype.method = function() {
    //this.method(); // calls itself
    Test.prototype.method();
    console.log('Test2 method');
}

let test2 = new Test2;
test2.method();