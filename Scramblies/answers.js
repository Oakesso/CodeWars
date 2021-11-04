let str1 = "cedewaraaossoqqyt";
let str2 = "codewars";

function scramble(str1, str2) {
    let trueList = [];
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            trueList.push(true);
        } else {
            trueList.push(false);
        }
        for (let j = 0; j < str2.length; j++) {
            if (trueList[j] != true) {
                return false;
            } else {
                return true;
            }
        }
    }
}

scramble(str1, str2);