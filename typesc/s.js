var message = "Hello World";
var messageA = "Hello World"; //same
//var message in vanilla JS
console.log(message);
//string type
var StringA;
StringA = "hello";
//number type
var numA;
numA = 4;
//boolean type
var boolA;
boolA = false;
//list functor
var arrStr = ['a', 'b', 'c'];
arrStr[0] = 'e';
arrStr.push('e');
//Coproduct
var coproductA;
coproductA = 4;
console.log(coproductA);
coproductA = "hi";
console.log(coproductA);
//list functor applied to coproduct
var listcoproduct = [1, "a", 3];
console.log(listcoproduct);
//Product type
var dog = {
    name: "fido",
    age: 10
};
console.log(dog);
var SomeObj;
SomeObj = 3;
SomeObj = "a";
//function
var mult = function (x, y) {
    return x * y;
};
console.log(mult(2, 4));
var sum; //predeclare type
sum = function (p, q) {
    return p + q;
};
console.log(sum(2, 4));
//generics or templates in C++
var somethn = function (x) {
    return [x, x];
};
console.log(somethn("somethn"));
//another form
function somethn2(x) {
    return [x, x];
}
console.log(somethn2("somethn2"));
//Unit type function
var hey = function () {
    console.log("hey");
};
var somecar = {
    model: "Honda",
    year: 1996
};
//Class
var electricCar = /** @class */ (function () {
    function electricCar(x, y, z) {
        var _this = this;
        this.outp = function () {
            return _this.msg;
        };
        this.model = x;
        this.year = y;
        this.msg = z;
    }
    return electricCar;
}());
var tesla = new electricCar("model E", 2012, "Honk Honk");
console.log(tesla.outp());
//Typescript with HTML
//---------------------------------------------------------------------------mini project [START]
//hook html inputform to javascript, ! tells compiler it will not be empty
var inputform = document.querySelector('form');
console.log(inputform);
//get textbox text by the id
var modelxinput = document.querySelector('#modelid');
console.log(modelxinput); //<input type="text" name="modelx" id="modelid">
console.log(modelxinput.value); //outputs the textbox text
//change innerHTML of "someclass" class which is inside <div>
var someclassA = document.querySelector('.someclass');
inputform.addEventListener("submit", function (msg) {
    msg.preventDefault();
    someclassA.innerText = modelxinput.value;
    inputform.reset();
});
//---------------------------------------------------------------------------mini project [END]
