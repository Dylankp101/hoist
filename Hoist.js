//1

//How it looks in the Console
console.log(hello);                                   
var hello = 'world'; 

//How the Interpreter see it
var hello
console.log(hello);                                   
hello = 'world';






//2

//How it looks in the Console
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

//How the Interpreter see it
var needle;
needle = 'haystack';
test();
var needle;
function test(){
    needle = 'magnet';
    console.log(needle);
}





//3

//How it looks in the Console
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//How the Interpreter see it
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
var brendan;
brendan = 'super cool';

console.log(brendan);





//4

//How it looks in the Console
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//How the Interpreter see it
var food;
function eat(){
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();






//5

//How it looks in the Console
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//How the Interpreter see it
var mean;
mean();
console.log(food);
mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);









//6

//How it looks in the Console
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//How the Interpreter see it
var genre;
console.log(genre);
genre = "disco";
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);









//7

//How it looks in the Console
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//How the Interpreter see it
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);







//8

//How it looks in the Console
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//How the Interpreter see it
