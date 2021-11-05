let str1 = "aabbcamaomsccdd";
let str2 = "commas";

function scramble(str1, str2) {
    let firstList = [];
    let secondList = [];
    if (str1.length !== str2.length) {
        console.log("different length:", str1, str2);
        for (let i = 0; i < str2.length; i++) {
            if (str1.includes(str2[i])) {
                firstList.push(true);
            } else {
                firstList.push(false);
            }
        }

        for (let j = 0; j < str1.length; j++) {
            if (str2.includes(str1[j])) {
                secondList.push(true);
            } else {
                secondList.push(false);
            }
        }

        console.log(firstList, secondList);

        if (firstList.includes(false) || secondList.includes(false)) {
            console.log("case 1 : ");
            return false;
        } else if (firstList.includes(true) || secondList.includes(false)) {
            console.log("case 2 : ");
            return true;
        } else if (firstList.includes(false) || secondList.includes(true)) {
            console.log("case 3 : ");
            return false;
        } else if (firstList.includes(true) || secondList.includes(true)) {
            console.log("case 4 : ");
            return true;
        }
    } else if (str1.length === str2.length) {
        console.log("equal length :", str1, str2);
        for (let i = 0; i < str2.length; i++) {
            if (str1.includes(str2[i])) {
                firstList.push(true);
            } else {
                firstList.push(false);
            }
        }

        for (let j = 0; j < str1.length; j++) {
            if (str2.includes(str1[j])) {
                secondList.push(true);
            } else {
                secondList.push(false);
            }
        }
        console.log(firstList, secondList);
        if (firstList.includes(false) & secondList.includes(false)) {
            console.log("case 1 : ");
            return false;
        } else if (firstList.includes(true) & secondList.includes(false)) {
            console.log("case 2 : ");
            return false;
        } else if (firstList.includes(false) & secondList.includes(true)) {
            console.log("case 3 : ");
            return false;
        } else if (firstList.includes(true) & secondList.includes(true)) {
            console.log("case 4 : ");
            return true;
        }
    }
}

console.log(scramble(str1, str2));

// function scramble(str1, str2) {
//     console.log(str1, str2);
//     let firstList = [];
//     let secondList = [];
//     for (let i = 0; i < str2.length; i++) {
//         if (str1.includes(str2[i])) {
//             firstList.push(true);
//         } else {
//             firstList.push(false);
//         }
//     }

//     for (let j = 0; j < str1.length; j++) {
//         if (str2.includes(str1[j])) {
//             secondList.push(true);
//         } else {
//             secondList.push(false);
//         }
//     }
//     console.log(firstList, secondList);
//     if (firstList.includes(false) || secondList.includes(false)) {
//         return false;
//     } else if (firstList.includes(true) || secondList.includes(false)) {
//         return false;
//     } else if (firstList.includes(false) || secondList.includes(true)) {
//         return false;
//     } else if (firstList.includes(true) || secondList.includes(true)) {
//         return true;
//     }
// }