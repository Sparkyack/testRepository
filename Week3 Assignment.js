//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

//let ages = [3, 9, 23, 64, 2, 8, 28, 93];                 //this makes an array called ages
//console.log("array of ages:",ages);                      //line 5 is printing ages array to console

/*a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
(do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console*/

//let first = ages[0];                                                   //this is giving index 0 a new variable name
//console.log(first);                                                    //prints out the first element in an array

//let last = ages[ages.length -1];
//console.log(last - first);


//b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

//ages.push(40);
//let first = ages[0];
//let last = ages[ages.length -1];
//console.log(last - first);


//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console 

//let sum = 0;
//console.log(sum);

//for (let i = 0; i < ages.length; i++){
 //   console.log("this is my index", i, "beginging of loop", sum);      //this show my index for loop

 //    sum += ages[i];
//    console.log("this shows my index of array", ages[i], "This is the end of the loop",sum);
//}

//console.log("this is not in/after the loop", sum);
//let average = sum / ages.length;

//console.log("This will show the average age of age array",average);



//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

//let names = ["sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];           //created an array called names 

//a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.

//let lengths = names.map(function(element){
//    return element.length;                                             //this is the formula to get name lengths out of an array 
//});
//console.log(lengths);                                                  //this prints out how many letters are in each name

//let sum = lengths.reduce(function(accumulator, currentValue) {         //this function adds all the elemnt numbers in ann array
//    return accumulator + currentValue;
//});
//console.log(sum);                                                      //this prints the sum of all the elements in the names array
//let average = sum / names.length;                                      //this will show the average number in the array names
//console.log(average);                                                  //this will print the average element number in the array names

//b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console
 
//let nameSpaces = names.join(" ");                                      //This makes a new array with spaces between each element
// for (i = 0; i < names; i++){                                          //This is the loop to run thru each element in the names loop
// }console.log(nameSpaces);                                             //This prints out the new string array with spaces



//3.	How do you access the last element of any array?

//let lastElement = names[names.length - 1];                             //This makes an new varable to call on the last element in an array
//console.log(lastElement);                                              //This prints last element to the console



//4.	How do you access the first element of any array?

//let firstElement = names[0];                                           //This is making a new varable to call on the first element in an array
//console.log(firstElement);                                             //This prints the first element in an array to the console



//*5.	Create a new array called nameLengths. 

//let names = ["Kelly", "Sam", "Kate"];                                  //Created new array named names

//Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

//let nameLength = names.map(function(element) {                         //this is making a new array for the name lenths in array names 
//    return element.length;
//});
//console.log(nameLength);



//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

//let sum = 0;
//for (let i = 0; i < nameLength.length; i++){                           //this adds all the elements in the array to come up with a sum
//    sum += nameLength[i];
//}     

//console.log(sum);                                                      //This prints the reults to the console



//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

//function repeatStringNumberOfTimes(word,n){                            //this created a function called repeatStringNumberOfTimes
//return word.repeat([n]);                                               //this told the function what to return as a value
//}

//console.log(repeatStringNumberOfTimes("Hello", 3));                    //this prints the varables to the console



//8.	Write a function that takes two parameters, firstName and lastName, 
//and returns a full name (the full name should be the first and the last name separated by a space).

//function createFullName(firstName, lastName){                          //This created a function called createFullName
//    console.log (firstName + " " + lastName);                          //This created a "what should full name do when called"
//} createFullName("Tom", "Brady");                                      //This printed out the return




//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100

//let numbers = [20, 5, 35, 40, 13];                                     //Created a random array of numbers
//    console.log(numbers);                                              //printed to console to confirm

//let sum = numbers.reduce(function(accumulator, currentValue) {         //created a sum of all totals in array
//    return accumulator + currentValue;

//}); console.log(sum);                                                  //printed sum to console                                

//if(sum > 100){                                                         //This "if" statement decides if the array total is bigger or smaller than 100
//    console.log(true);                                                 //this prints the true result to the console
//}



//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array

//let numberOfPlayers = [2, 5, 45, 21, 45, 14, 13];                      //created an array of numbers of players in each game

//let sum = numberOfPlayers.reduce (function(accumulator, currentValue){ //created function to provide a sum for numberOfPlayers  
//    return accumulator + currentValue;
//});
//console.log(sum);                                                      //printed sum of numberOf Players to the console

//let averageNumberOfPlayers = (sum / numberOfPlayers.length);           //created new varable that is the averageNumberOfPlayers (sum devided by total numbers in array)
//console.log(averageNumberOfPlayers);                                   //print averageNumberOfPlayers to the console



/*11.	Write a function that takes two arrays of numbers and returns true if the average of the elements 
in the first array is greater than the average of the elements in the second array*/

//let numberOfPeople = [7, 21, 11, 45, 15, 54];                           //Array number 1

//let peopleWaching = [7, 9, 24, 56, 40, 11]                             //Array number 2

//let sum = numberOfPeople.reduce (function(accumulator, currentValue){  //created new varable that is the sum of array 1
//    return accumulator + currentValue;
//});

//    console.log(sum);                                                  //prints sum of array 1 to concole

//let averagerNumberOfPeople = (sum /numberOfPeople.length);             //this gives the average of array 1
//    console.log(averagerNumberOfPeople);                               //this prints the average of array 1 to the console


//let sum2 = peopleWaching.reduce(function(accumulator,currentValue){    //created new varable that is the sum of array 2
//    return accumulator + currentValue;
//});

 //   console.log(sum2);                                                 //this prints the sum of array 2 to console

//let averagePeopleWatching = (sum2 / peopleWaching.length);             //this gives the average number of array 2
//    console.log(averagePeopleWatching);                                //this prints the average number of array 2 to the console

//if(averagerNumberOfPeople > averagePeopleWatching){                    //this else statement says if array 1 average is > array 2 avverage print true
//    console.log(true);                                                 //prints true if true
//}



//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, 
//and returns true if it is hot outside and if moneyInPocket is greater than 10.50

//function willBuyDrink(isHotOutside, moneyInPocket){                    //this craeted a function to see if we will buy a drink
//if(isHotOutside >= 90 && moneyInPocket > 10.50){                       //if staement created with boolean logic
//    console.log(true);                                                 //if "if" staement is true it will return "true"
//    }else {console.log("I dont need a drink today")};                  //this else statement is added to print out message if not true
//}

//willBuyDrink(95,30);                                                   //this is the created function (with the added changable varables)


//13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//let gameOneFouls = [5, 1, 4, 6, 2, 2, 1];                                          //This created an array for game 1 team fouls

//let gameTwoFouls = [1, 4, 6, 1, 8, 6, 4];                                          //This created an array for game 2 team fouls
//let gameOneTotalFouls = gameOneFouls.reduce(function(accumulator,currentValue){    //this created a function that represents total fouls of game 1
//    return accumulator + currentValue;                                             //this returns gameOneFouls added together
//})
//    console.log(gameOneTotalFouls);                                                //this prints gameOneTotalFouls to the console

//let gameOneAverageFouls = (gameOneTotalFouls / gameOneFouls.length);               //This function creates the average number of fouls in game 1
//    console.log(gameOneAverageFouls);                                              //this prints average number of fouls in game 1 to the console

//let gameTwoTotalFouls = gameTwoFouls.reduce(function(accumulator, currentValue){   //this created a function to use for total number of fouls in game 2
//    return accumulator + currentValue;                                             //this returned gameTwoFouls added together
//})
//    console.log(gameTwoTotalFouls);                                                //this prints the total number of fould in game 2 to console

//let gameTwoAverageFouls = (gameTwoTotalFouls / gameTwoFouls.length);               //this created a function for averge number of fouls in game 2
//    console.log(gameTwoAverageFouls);                                              //this prints the average number of fouls in game 2 to the console

//if(gameOneAverageFouls > gameTwoAverageFouls){                                     //this if statement says if game 1 is lower average than game to print
//    console.log("We are getting better at not fouling");                           // "We are getting beeter qat not fouling"
//    }else {console.log("We have a lot of work to do. We need to quit fouling")};   //this prints all else to the console
                                                                                     //example: if gameTwoAverageFouls is greater than gameOneAverageFouls
                                                                                     //it will print "We have a lot of work to do" to the console

                                                                                