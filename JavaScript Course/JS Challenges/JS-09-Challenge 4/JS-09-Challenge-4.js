/* 
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase        ✅
firstName             ✅✅
someVariable          ✅✅✅
calculateAge          ✅✅✅✅
delayedDeparture      ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
//: text area
const textarea = document.querySelector('textarea');
//: break
// const br = document.querySelector('br');

//: button
//> On Button click -> manipulates the values in in 'textarea'
document.querySelector('button').addEventListener('click', function () {
  //: removes spaces and changes '\n' [newline] to comma [,]
  let filtered = textarea.value.replaceAll(' ', '').split('\n');
  camelCaser(filtered);
});
//: funcion to convert under_score -> camelCase
function camelCaser(arguments) {
  for (word of arguments) {
    const arr = word.toLowerCase().replace('_', ' ').split(' ');
    //: 1st way
    // let camelCased = arr[0] + arr[1].toUpperCase()[0] + arr[1].split(1);
    //: 2nd way
    let camelCased =
      arr[0] + arr[1].replace(arr[1][0], arr[1][0].toUpperCase());
    console.log(
      camelCased.padEnd(30, ' '),
      '✅'.repeat(arguments.indexOf(word) + 1)
    );
  }
}
