function add(a,b){
    return a+b;
}

const mul=(a,b)=>{//arrow functions
    return a*b;
}

console.log(add(2,3));
console.log(mul(2,3));

// Using an object to store properties and methods
// 'this' keyword refers to the object itself
const object={
    name:'Sowmiya',
    age:18,
    msg:function(){
        // let name=object.name; can use this command instead of object
        // let age=object.age;
        // Using template literals for string interpolation
        return `Hello ${this.name} you are ${this.age} years old`;
    }
}
console.log(object.name);
console.log(object.age);
console.log(object.msg());

const numbers=[10,20,-40,20,-30,50,11];
const mappednumbers=numbers.map((num)=>num*3);//map returns the values in an array after applying the function to each element
// Using arrow function to multiply each element by 3
//we use functions inside map to apply a function to each element of the array
console.log(mappednumbers);

//we use filter to filter the elements of an array based on a condition
const positiveNumbers=numbers.filter((num)=>num>0);
console.log(positiveNumbers);

const odd=numbers.filter((num)=>num%2!=0);
console.log(odd);

//reduce is used to reduce the array to a single value
const sum=numbers.reduce((sum,num)=>sum+num,0);//0 is the initial value
console.log(sum);

const products=[
    {name:'phone',price:20000},
    {name:'laptop',price:50000},
    {name:'tablet',price:30000},
    {name:'watch',price:10000}  
]

const totalprice=products.reduce((total,n)=>total+n.price,0);
console.log(totalprice);

const expensive=products.filter((product)=>product.price>25000);
console.log(expensive);

//destructing for objects destructing is a way to extract properties from an object or elements from an array
//destructuring assignment allows unpacking values from arrays or properties from objects into distinct variables
const user={name:'Sowmiya',password:'12345678'}
const {name, password} = user//destructuring assignment to extract properties from an object
console.log(password);

// normal destructing
const arr=[1,2,3,4,5];
const [a,b,c,d,e]=arr;//destructuring assignment to extract elements from an array
console.log(e);

//spread operator
const arr1=[1,2,3];//this array can be used anywhere by adding three dots along with the array name
const arr2=[4,5,6]; 
const arr3=[...arr1,...arr2];//spread operator to combine two arrays
console.log(arr3);

//spread with destructuring
const array=[1,2,3,4,5,6];
const [first,second,third,...spread]=array;//destructuring assignment to extract first three elements and rest into a new array using spread operator
console.log(spread);//spread contains the rest of the elements in the array

//rest operator can be used to passs any number of arguments to a function
//it collects all remaining arguments into an array
function add4(...args){
    return args;
}

console.log(add4(1,2,3,4,5));//rest operator to collect all arguments into an array

//callback functions are functions that are passed as arguments to other functions
function function1(){
    console.log('Function 1 executed');
}
function function2(callback){
    callback();
    console.log('Function 2 executed');
}
function2(function1);//passing function1 as a callback to function2

//with arrow functions
function function3(name,callback){
    callback();
    return `Hello ${name} from outside callback`;
}
console.log(function3('Sowmiya',()=>console.log('Arrow function executed')));//passing an arrow function as a callback to function3

//asynchronous programming
async function fetchData(){
    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/users');
        const data=await response.json();
       // console.log(data);
       console.log(data.map(user=>user.name));//mapping the data to get the names of the users
    }
    catch(error){
        console.error(error);
    }
}
fetchData();//calling the asynchronous function to fetch data from an API








