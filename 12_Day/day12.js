//Regular Expressions//
/* A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways. */

//To declare a string we use a single quote, double quote, a backtick//
//To declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y.//


//RegExp Parameters//
//A regular expression takes two parameters. One required search pattern and an optional flag.//


//Pattern//
//A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.//


//Flags//
/* Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline */








//Creating a pattern with RegExp Constructor//
//Declaring regular expression without global flag and case insensitive flag.//
let pattern = 'love'
let RegEx = new RegExp(pattern)
console.log(RegEx)

//Declaring regular expression with global flag and case insensitive flag.//
let pattern2 = `love`
let flag = `gi`
let regEx2 = new RegExp(pattern2, flag)
console.log(regEx2)

//Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor//
let RegEx3 = new RegExp('love', 'gi') 
console.log(RegEx3)



//Creating a pattern without RegExp Constructor//
///Declaring regular expression with global flag and case insensitive flag.//
let regEx= /love/gi









//RegExpp Object Methods//
//Testing for a match: test():Tests for a match in a string. It returns true or false.//
let mylove = 'I love JavaScript'
let pattern4 = /love/
let result = pattern4.test(mylove)
console.log(result)


//Array containing all of the match//
/* match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group. */
let mysecondlove = 'I love JavaScript but I love Java more'
let pattern5 = /love/
let result2 = mysecondlove.match(pattern5)
console.log(result2)

let mythirdlove = 'I love basketball'
let pattern6 = /love/g
let result3 = mythirdlove.match(pattern6)
console.log(result3)


//Search//
//search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.//
let myfourthlove = 'I love winter'
let pattern7 = /love/g
let result4 = myfourthlove.search(pattern7)
console.log(result4)



//Replacing a substring//
//replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.//
let fullsent = 'The most beautiful language in the world is python because it is essentially English.'
let replace1 = fullsent.replace(/python/, 'JavaScript')
console.log(replace1) //if we use /g we replace every word we want to replace//





//NOTES//
/*
[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can occur many times.
+: one or more times
r'[a]+' means at least once or more times
?: zero or one times
r'[a]?' means zero times or once
\b: word bounder, matches with the beginning or ending of a word
{3}: Exactly 3 characters
{3,}: At least 3 characters
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group
*/



//Square Bracket//
//Let's use square bracket to include lower and upper case//
let pattern8 = '[Aa]pple'
let fullsent2 = 'Apple and banana are fruits. An apple a day keeps the doctor way has been replaced by a banana a day keeps the doctor far far away. '
let matches = fullsent2.match(pattern8)
console.log(matches)

let pattern9 = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
let fullsent3 = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
let matches2 = fullsent3.match(pattern9)
console.log(matches2)  



//Escape character(\) in RegExp//
let pattern10 = /\d/g  // d is a special character which means digits
let txt = 'This regular expression example was made in January 12,  2020.'
let matches3 = txt. match(pattern10)
console.log(matches3)
