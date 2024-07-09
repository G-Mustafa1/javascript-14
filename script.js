//1. Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

document.write(`<br> <h1> Q1 Full Name </h1>`)
let program1 = prompt("Enter a first name");
let program2 = prompt("Enter a last name");
let program = program1 + "" +"" + program2;
document.write(`<h2> Full Name:   ${program} </h2> <hr>`);

//2. Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser

let favoriteMobile = prompt("Enter your favorite mobile phone model:")
let mobileLenth = favoriteMobile.length
document.write(`<br> <h1> Q2: Phone Model </h1>`);
document.write(` <h2>Your favorite mobile phone model is : ${favoriteMobile.toLowerCase()} and length is : ${mobileLenth} </h1>`)

//3. Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser .

let Pak = "pakistani";
let letter = "n";
let find = Pak.indexOf(letter);
document.write(`<br> <h1> Q3:  Find the index of letter “n” </h1> `);
document.write(`<h2> The index of letter "${letter}" <br> words of "${Pak}" <br> indexof number ${find} </h2> <hr>`);

//4. Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

let Pak1 = "Hello WorLd";
let letters = "L";
let finds = Pak1.indexOf(letters);
document.write(`<br> <h1> Q4:  Find the index of letter “l” </h1> `);
document.write(`<h2> The index of letter "${letters}" <br> words of "${Pak1}" <br> indexof number ${finds} </h2> <hr>`);

//5. Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser.

let Pak2 = "pakistan";
let num1 = 3;
let findes = Pak2.charAt(num1);
document.write(`<br> <h1> Q5:  Find the character at 3rd index </h1> `);
document.write(`<h2> The index of letter "${Pak2}" <br> number of "${num1}" <br> indexof word ${findes} </h2> <hr>`);

//6. Repeat Q1 using string concat() method.

let fullNames= program1.concat(" ", program2);
document.write(`<h1> Q6:  String Method</h1>`)
document.write(`<h2>Hello ${fullNames.concat(" ")} "!"</h2><hr>`);

//7. Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser

let hay = "Hyderabad";
let rep = hay.replace("Hyder" , "Islam")
document.write(`<br> <h1> Q7:  Replace the “Hyder” to “Islam” <h1>`)
document.write(`<h2> C;ity:  ${hay} <br> Replace: ${rep} </h2> <hr>`);

//8. Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and
//football together.”;

var message = "Ali and Sami are best friends. They play cricket and football together";
var replaceMessage = message.replace(/and/g , "&");
document.write(`<br> <h1> Q8: Replace the “and” to “&”  </h1>`);
document.write(`<h2> Message:   ${message} </h2>`);
document.write(`<h2> Replace Message:  ${replaceMessage} </h2> <hr>`)

//9. Write a program that converts a string “472” to a number
//472. Display the values & types in your browser.

document.write(`<br> <h1> Q9: Type of </h1>`);
let numString = "472";
document.write(`<h2> Value: ${numString} <br> Type: ${typeof(numString)}`);
let numNum = 472;
document.write(`<h2> Value: ${numNum} <br> Type: ${typeof(numNum)} <hr>`);

//10. Write a program that takes user input. Convert and
//show the input in capital letters.

document.write(`<br> <h1> Q10: Convert capital letter  </h1>`)
let userInputp = "peanuts"
document.write(`<h2> User input: ${userInputp} <br> Uper case: ${userInputp.toUpperCase()} <hr>`);

//11. Write a program that takes user input. Convert and
//show the input in title case.

document.write(`<br> <h1> Q11: Title case </h1>`)
let userInputj = "javascript";
let firstLetterUppercase = userInputj.charAt(0).toUpperCase();
let restLettersLowercase = userInputj.slice(1).toLowerCase();  
let result = firstLetterUppercase + restLettersLowercase;
document.write(`<h2> User input: ${userInputj} <br> Title case: ${result} </h2> <hr>`);

//12. Write a program that converts the variable num tostring.
//var num = 35.36 ;Remove the dot to display “3536” display in your browser.
document.write(`<br> <h1> Q12: Converts the variable num tostring </h1>`);
let num = 35.36 ;
let numString1 = num.toString();  
let numDot = numString1.replace("." , "");
document.write(`<h2> Number: ${num} <br> String: ${numDot} </h2> <hr>`);

//13. Write a program to take user input and store username
//in a variable. If the username contains any special symbol
//among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .
document.write(`<br> <h1> Q13: If the username contains any special symbol </h1>`);
let userName = prompt("Please enter your username:");
let specialSambol = ["@",".",",","!"];
let invildUsername = true;
for (let i = 0; i < specialSambol.length; i++) {
   if(userName.includes(specialSambol[i])){
      invildUsername = false
      break;
   } 
}
if(!invildUsername){
   alert("Username contains special symbols. Please enter a valid username.")
   userName = prompt("Please enter your username:");
   document.write(`<h2> Username: ${userName} </h2> <hr>`);
}
document.write(`<h2> Username: ${userName} </h2> <hr>`);

//14. You have an arrayA = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array. After searching, prompt the user whether the given
//item is found in the list or not.
//Note: Perform case insensitive search. Whether the user
//enters cookie, Cookie, COOKIE or coOkIE, program
//should inform about its availability. Example:

document.write(`<br> <h1> Q14: Search by user input </h1>`);

let userProm = prompt("Please enter the item you want to search for: \n Avalaible: \n cake \n apple pie \n cookie \n chips \n patties");
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
userProm = userProm.toLowerCase()
if(A.includes(userProm)){
   document.write(`<h2> The ${userProm} is found </h2> <hr>`);
}
else{
   document.write(`<h2> The ${userProm} is not found </h2> <hr>`);
}

//15. Write a program to take password as an input fromuser. The password must qualify these requirements:
//a. It should contain alphabets and numbersb. It should not start with a number
//c. It must at least 6 characters longIf the password does not meet above requirements,
//prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII
//table at the end of this document.
document.write(`<br> <h1> Q15: Write a program to take password </h1>`);

// let password = prompt("Enter a password");
while (true) {
   let password = prompt("Enter a password");
   if(password.length < 6){
      alert("Password is not valid. Please try again.")
   }
   else if(isNaN(password[0])){
      alert("Password is not valid. Please try again.")
   }
   else if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      alert("Password should contain at least one letter and one number.");
  } 
  else{
     alert("Password is valid")
     document.write(`<h2> Your password is ${password} </h2> <hr>`)
     break;
  }
}

//16. Write a program to convert the following string to anarray using string split method.
//var university = “University of Karachi”;Display the elements of array in your browser.
document.write(`<br> <h1> Q16: convert the following string to anarray </h1>`);

let university = "University of Karachi";
let KarachiUniversity = university.split();
document.write(`<h2> String: ${university} </h2>`);
document.write(`<h2> Arry: ${KarachiUniversity} </h2> `);
for (let i = 0; i < KarachiUniversity.length; i++) {
   document.write(`<h2> Element: ${i+1} ${KarachiUniversity} </h2> <hr>`);
}

//17. Write a program to display the last character of a user
//input.
document.write(`<br> <h1> Q17: Write a program to display the last character </h1>`);

let pakistan = "pakistan"
let pakistan1 = pakistan.length-1
let pak = pakistan.charAt(pakistan1)
document.write(`<h2>User Input: ${pakistan}</h2>`);
document.write(`<h2>Last character: ${pak}</h2><hr>`);

//18. You have a string “The quick brown fox jumps over thelazy dog”. Write a program to count number of
//occurrences of word “the” in given string.
document.write(`<br> <h1> Q18: Write a program to count number  </h1>`);

let str = "The quick brown fox jumps over the lazy dog";
let Word = "the";
let count = 0;
let Words = str.split(" ");
for (let i = 0; i < Words.length; i++) {
   if(Words[i].toLowerCase() === Word){
      count++
      // console.log()
   }
   
}
document.write(`<h2> The Word: ${Word} <br> occurs: ${count}  times in the string.   </h2> <hr>`);