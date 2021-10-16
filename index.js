console.log("this content is from Mosh Haemdani's 1 hr JS video");
console.log("https://www.youtube.com/watch?v=W6NZfCO5SIk&t=881s");
console.log('hello world, This is JS-Basics');
console.log('Declare variables using let keyword, instead of var keyword');

    let firstName = 'sanjay' ;
    console.log( 'First name is :' + firstName );

    let lastName = 'lowanshi';
    console.log('Last name is :' + lastName );

    const birthYear = 1998; //for constant value use const.
    console.log('Birth Year  is :' + birthYear );

//Object Literal

    let person = {
        name  : 'Sanjay',
        city : 'Nashik'
    };
    //Dot notation.
    person.name = 'Loki';

    //Bracket notation.
    person['name'] = 'John';

    console.log(person.name);

//Introduction to Array
    let selectedColors = ['Red' , 'Blue'];
    console.log(selectedColors);
    selectedColors[2] = 'Green';
    console.log(selectedColors[0]);
    console.log(selectedColors);
    
//Intro to Functions
    function greet(visitor , city) {
        console.log('Hello ' + visitor + ' from ' + city )
    }
    //here visitor & city are parameters while writing function.
    //calling function
    greet('Sanjay','Nashik'); //here sanjay & nashik are arguments.not parameters.
    
    //calculating a value 
    function square(num) {
        return num * num ;
    }
    console.log(square(3));
    

    //the END
    