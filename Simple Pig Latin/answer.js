// Move the first letter of each word to the end of it, then add "ay"
// to the end of the word.Leave punctuation marks untouched.
// Example :
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

let a = "Pig latin is cool";
let b = "Hello world !";
let str = b;

// return a list from splitted str content.
function split(str) {
    return str.split(" ");
}

function pigIt(str) {
    let val = split(str);
    let newVal = [];
    for (let i = 0; i < val.length; i++) {
        newWord = [];
        for (let j = 0; j < val[i].length; j++) {
            if (j != 0) {
                newWord.push(val[i][j]);
            }
        }
        if (val[i][0] === "!" || val[i][0] === "?") {
            newVal.push(newWord.join("") + val[i][0]);
        } else {
            newVal.push(newWord.join("") + val[i][0] + "ay");
        }
    }
    return newVal.join(" ");
}

console.log(pigIt(str));