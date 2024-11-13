//console.log("Hello world"); // spausdina "Hello world"

/*var firstName = "Lukas"; // global "scope"

//-------- PRIMATIVES ---------------

//number
let number = 12;

console.log("kintomojo reiksme: " + number); //output number
console.log("kintomojo duomenu tipas: " + typeof(number)); // what datatype is "number    "

//number is float
let price = 12.45;

console.log(price);
console.log(typeof(price));

//boolean

let userStatus = true;

console.log(userStatus);
console.log(typeof(userStatus));


//string

let userName = "Hahayeahman123";

console.log(userName);
console.log(typeof(userName));

//------ NOT PRIMATIVES --------

//array

let students = ["Tadas","Lukas","Martynas"];

console.log(students);
console.log(typeof(students));

console.log(students[0].toUpperCase());

//object

let student = { // "id", "firstname" ir t.t. vadnami "properties", o kas po ju yra "values"
    id: 1,
    firstName: "Jonas",
    lastName: "Jonaitis",
    Email: "jonas@gmail.com",
    role: "Admin"
}
console.log(student);
console.log(typeof(student));
console.log(student.firstName);
console.log(Object.keys(student));
console.log(Object.values(student));

const pi = 3.14;

console.log(isNaN(userName));

let user1 = "Karolis";
let user2 = "Kristina";
let isNiceName = user1 == "Kristina" ? "Very nice name" : "Choose another name" ; //Ternery operator
console.log(isNiceName);


let vipNumber=12;
let otherNumber="12";
*/


// --mini savarankiskas--


//1. tikrina, ar amzius yra lyginis
let amzius = 13;
 if (amzius==0){
    console.log("Amzius yra lyginis");
 }else{
    console.log("Amzius nera lyginis");
 }

//2. boolean
let isWarm = true;
if (isWarm==true){
    console.log("Eikime i lauka");
}else{
    console.log("Geresnis pasirinkimas - likit namuose");
}

//3. Favourite game checker

let favouriteGame = "Minecraft";

if (favouriteGame=="Minecraft"){
    console.log("Tai puikus zaidimas!");
}else{
    console.log("Ar bandei zaisti Minecraft?");
}

//4. Masyvo elementu dydzio tikrinimas

let numbers=[1,2,3];
// spausdinam antra skaiciu
console.log(numbers[1]);

if(numbers[0]>=numbers[2]){
    console.log("pirmas skaicius didesnis");
}else{
    console.log("Treciasis skaicius didesnis arba lygus");
}

//5. Filmo trukmes tikrintojas

let movieInfo = {
    name: "Pirates of the Caribbean",
    length: 152 
}

if (movieInfo.length>120){
    console.log("Tai ilgas filmas");
}else{
    console.log("tai trumpas filmas");
}

//6. 

let hasTicket= true;
let isSeatAvailable= true;

if (hasTicket==isSeatAvailable){
    console.log("Galite uzimti vieta");
}else{
    console.log("Negalite uzimti vietos");
}

//7.

let friends = ["Arnas", "Jogaila", "Lukas"];

if (friends[2]=="Lukas"){
    console.log("Lukas yra tavo draugas!");
}else{
    console.log("Kas toks trecias draugas?");
}

//8.

let personInfo={
    name:"Jokubas",
    favouriteFruit: "Obuolys"
}

if(personInfo.favouriteFruit=="Obuolys"){
    console.log("Sveika mityba!");
}else{
    console.log("Visada yra vietos obuolui!");
}

//9.

let firstNumber=4;
let secondNumber=4;
if(firstNumber>secondNumber){
    console.log("Pirmas skaicius didesnis");
}else if(firstNumber<secondNumber){
    console.log("Pirmas skaicius mazesnis");
}else if(firstNumber==secondNumber){
    console.log("Skaiciai lygus");
}

//10.

let humanInfo=[
    {
        name:"Albert",
        age:20
    }
    ,
    {
        name:"Hubert",
        age:18
    }
    ,
    {
        name:"Dave",
        age:50
    }
]

if(humanInfo[0].age>=18){
    console.log("Suauges");
}else{
    console.log("Vaikas");
}