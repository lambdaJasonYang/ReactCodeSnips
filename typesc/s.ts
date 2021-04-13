let message : any = "Hello World";
let messageA = "Hello World"; //same
//var message in vanilla JS

console.log(message);

//string type
let StringA : string;
StringA = "hello";
//number type
let numA : number;
numA = 4;
//boolean type
let boolA : boolean;
boolA = false;

//list functor
let arrStr : string[] = ['a','b','c'];
arrStr[0] = 'e';
arrStr.push('e');

//Coproduct
let coproductA : string | number;
coproductA = 4;
console.log(coproductA);
coproductA = "hi";
console.log(coproductA);

//list functor applied to coproduct
let listcoproduct : (string | number)[] = [1,"a",3];
console.log(listcoproduct);

//Product type
let dog = {
    name: "fido",
    age: 10
}
console.log(dog);

//type alias
type AnotherType = string | number;
let SomeObj : AnotherType;
SomeObj = 3;
SomeObj = "a";

//function
let mult = (x:number, y:number):number =>{
    return x * y;
}
console.log(mult(2,4));

let sum: (x:number, y:number) => number; //predeclare type

sum = (p:number,q: number) => {
    return p + q;
}
console.log(sum(2,4));

//generics or templates in C++
let somethn= <T>(x : T): T[] => {
    return [x,x];
}
console.log(somethn<string>("somethn"));
//another form
function somethn2<T>(x : T) : T[] {
    return [x,x];
}
console.log(somethn2<string>("somethn2"))

//Unit type function
const hey = () => {
    console.log("hey");
}
//Interface
interface CarInterface {
    model: string;
    year: number;
}

let somecar: CarInterface = {
    model : "Honda",
    year : 1996
}
//Class
class electricCar implements CarInterface {
    model : string;
    year : number;
    private msg : string;
    constructor(x: string, y : number, z : string){
        this.model = x;
        this.year = y; 
        this.msg = z;
    }
    outp = ():string => {
        return this.msg;
    }
}

let tesla = new electricCar("model E",2012,"Honk Honk")
console.log(tesla.outp());

//Typescript with HTML
//---------------------------------------------------------------------------mini project [START]
//hook html inputform to javascript, ! tells compiler it will not be empty
const inputform = document.querySelector('form')!;
console.log(inputform);

//get textbox text by the id
const modelxinput = document.querySelector('#modelid') as HTMLInputElement;
console.log(modelxinput); //<input type="text" name="modelx" id="modelid">
console.log(modelxinput.value); //outputs the textbox text

//change innerHTML of "someclass" class which is inside <div>
const someclassA = document.querySelector('.someclass') as HTMLDivElement;

inputform.addEventListener("submit", (msg) => {
    msg.preventDefault();
    someclassA.innerText = modelxinput.value;
    inputform.reset();
})

//---------------------------------------------------------------------------mini project [END]