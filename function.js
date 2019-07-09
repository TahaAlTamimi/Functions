/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."
Ex: tellFortune('ball player', 'spain', 'Shaq', 3);
=> "You will be a ball player in spain, and married to Shaq with 3 kids."
*/
function tellFortune(numberOfChildren, partnerName, geometricLocation, jobTitle){
     	return("You will be a "+jobTitle+" in "+geometricLocation+", and married to "+partnerName + " with "+numberOfChildren+" kids.")
     }
     console.log(tellFortune(3,"deyaa","Amman","programmer"));
/*


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(yourPuppyAge){
	yourPuppyAge=yourPuppyAge*7;

	return ("Your doggie is "+yourPuppyAge+" years old in dog years!") ;

}
console.log(calculateDogAge(5));

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"
Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amoutPerDay){
	var maxAge=100;
	var totalRestLife=(amoutPerDay*365)*(maxAge-age);
	return ("You will need "+totalRestLife+" to last you until the ripe old age of  "+maxAge);


}
console.log (calculateSupply (22,50));

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name
Ex: greet("Jouza")
=> "Hello Jouza"
*/
function great(name){
	return ("hello " +name);

}
console.log(great("tamimi"));


5
// what is the error:
// function double(cat) {
//   return 2 * x;
// } 
// x undefined
// function double(7) {
//   return 2 * 7;
// }
// 7 not variable
// function double('7') {
//   return 2 * 'x';
// }
// '7' not variable 
// 2 *'x' -> Nan (Not a number)




6
//fix these functions:
function double1(x) {
  return 2 * x ;
}
function double2 (x){
return 2 * x;
}
function double3 (x) {
  return 2 * x;

}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number
Ex: cube(4)
=> 64
*/
function cube(number){
var cube = Math.pow(number,3);
return cube;
}
console.log(cube(5));






/*
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers
Ex: multiply(3,4)
=> 12
*/ 
function multiply(number1, number2){
var result = number1 * number2;
return result;
}
console.log(multiply(3, 4));


/*
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"
Ex: canIGetADrivingLicense(21)
=> "yes you can"
Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"
*/

function canIGetADrivingLicense(age){
	if(age >= 20){
		return "yes you can";
	}
	else{
		var year = 20 -age;
		return ("please come back after "+year+" years to get one");
	}
}
console.log(canIGetADrivingLicense(23));
console.log(canIGetADrivingLicense(18));





/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.
**hint: how we can know string length   Ex: : "tree".length   => 4
Ex: sameLength("tree","clue")
=> true
Ex: sameLength("tree","car")
=> false
*/


function sameLength(string1,string2){
	
	var lengthString1=string1.length;
	var lengthString2=string2.length;
	if(lengthString1===lengthString2){
		return true;}
		else{
		return false;
		}

	
}
console.log( sameLength("tree","clue"));
console.log( sameLength("tree","car"));
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers
Ex: largerNubmer(5,6)
=> 6
Ex: largerNubmer(5,3)
=> 5
*/
function largeNumber(num1,num2){
	var large=Math.max(num1,num2);
return large;

}
console.log(largeNumber(9,10));
console.log(largeNumber(11,10));



/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number
Ex: smallerNubmer(8,6,7)
=> 6
Ex: smallerNubmer(5,99,34)
=> 5
*/
function smallerNumber(num1,num2,num3){
	var small=Math.min(num1,num2,num3);
return small;

}
console.log(smallerNumber(9,10,5));
console.log(smallerNumber(11,10,20));


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string
Ex: shorterString("air","school","car","by","github")
=> by
*/
function shorterString(str1,str2,str3,str4,str5){
	 var shorter1=str1.length;
	 var shorter2=str2.length;
	 var shorter3=str3.length;
	 var shorter4=str4.length;
	 var shorter5=str5.length;
	 // var shorterStr=Math.min(shorter1,shorter2,shorter3,shorter4,shorter5);
	if((shorter1<shorter2) && (shorter1<shorter3) && (shorter1<shorter4) && (shorter1<shorter5)){
			return str1;

	}
	else if((shorter2<shorter1) && (shorter2<shorter3) && (shorter2<shorter4) && (shorter2<shorter5)){
			return str2;

	}
	else if((shorter3<shorter2) && (shorter3<shorter1) && (shorter3<shorter4) && (shorter3<shorter5)){
			return str3;

	}
	else if((shorter4<shorter2) && (shorter4<shorter3) && (shorter4<shorter1) && (shorter4<shorter5)){
			return str4;

	}
	else if((shorter5<shorter2) && (shorter5<shorter3) && (shorter5<shorter4) && (shorter5<shorter1)){
			return str5;}
	}		
console.log(shorterString("air","school","car","by","github"));

	
	// elseif(str2.length<str1.length&&str3.length && str4.length && str5.length){
	// 		return str2;

	// }
	// elseif(str3.length<str1.length&&str2.length && str4.length && str5.length){
	// 		return str3;

	// }
	// elseif(str4.length<str1.length&&str2.length && str3.length && str5.length){
	// 		return str4;

	// }
	// elseif(str5.length<str1.length&&str2.length && str3.length && str4.length){
	// 		return str5;}


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string
Ex: shorterString("air","school","car","github")
=> school
*/
function larString(str1,str2,str3,str4){
	 var shorter1=str1.length;
	 var shorter2=str2.length;
	 var shorter3=str3.length;
	 var shorter4=str4.length;
	 
	 // var shorterStr=Math.min(shorter1,shorter2,shorter3,shorter4,shorter5);
	if((shorter1>shorter2) && (shorter1>shorter3) && (shorter1>shorter4) ){
			return str1;

	}
	else if((shorter2>shorter1) && (shorter2>shorter3) && (shorter2>shorter4) ){
			return str2;

	}
	else if((shorter3>shorter2) && (shorter3>shorter1) && (shorter3>shorter4) ){
			return str3;

	}
	else if((shorter4>shorter2) && (shorter4>shorter3) && (shorter4>shorter1) ){
			return str4;

	}
	
	}		
console.log(larString("air","school","car","by"));


/*15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd
Ex: isEven(1)
=> false
Ex: isEven(2)
=> true
*/
function isEven(num){
	 n = Number(num);
	if (n === 0 || n % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(-4));
console.log(isEven(10));
console.log(isEven(-11));
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even
Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/
function isOdd(num){
	 n = Number(num);
	if ( n % 2 !== 0) {
		return true;
	}
	else {
		return false;
	}
}

console.log(isOdd(5));
console.log(isOdd(4));
console.log(isOdd(-4));
console.log(isOdd(10));
console.log(isOdd(-11));

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed
Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/
function positive( num){
	var n=Number(num);
	var result = Math.abs(n);
return result;
}
console.log(positive(4));
console.log(positive(-5));

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.
Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName){
	return (firstName + lastName);

}
console.log(fullName("Mohammad ","tamimi"));


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.
Ex: average(1,2,3,4,5)
=> 3
Ex: average(5,7,9,3,5)
=> 5.8
*/

function average(num1,num2,num3,num4,num5){
	var avg=(num1+num2+num3+num4+num5)/5;
		return avg;

}
console.log(average(1,2,3,4,5))




/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN
Ex: randomNumber()
=> 0.2278
Ex: randomNumber()
=> 0.475
*/
function randomNumber(){
	var random=Math.random();
	return random;

}
console.log(randomNumber());





/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN
Ex: randomBetweenNumbers(1,8)
=> 7.5412
Ex: randomBetweenNumbers(3,100)
=> 23
*/

function randomBetweenNumbers(min,max){
	
	var random=Math.random() * (max - min) + min; 
	return random;

}
console.log(randomBetweenNumbers(5,2));







/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49
Ex: scoreInUniversty(96)
=> "A"
Ex: randomBetweenNumbers(3)
=> "F"
*/
 function scoreInUniversty(number){

 	var n = Number(number);

 	if (number>=95 && number <= 100){
 		return "A";
 	}
 	else if(number>=85 && number <= 94){
        return "B";
 	}
 	else if(number>=70 && number <= 84){
 		return "C";
 	}
 	else if(number>=50 && number <=69){
 		return "D";
 	}
 	else if(number>=0 && number <= 49){
 		return "F";
 	}
 	else{
 		return "negative number";
 	}



 }

 console.log(scoreInUniversty(77));
  console.log(scoreInUniversty(-50));
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
*/
var count= 0;
function counter(){

	count = count +1;
	return count;
}
console.log(counter());
console.log(counter());
console.log(counter());

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: counter()
=> 3
Ex: resetCounter()
=> 3 and the counter reset now
Ex: counter()
=> 1
Ex: counter()
=> 2
Ex: resetCounter()
=> 2 and the counter reset now
Ex: counter()
=> 1
*/

function restCounter(){
console.log(count +" and the counter reset now");
count=0;

}
restCounter();
console.log(counter());
console.log(counter());
console.log(counter());


