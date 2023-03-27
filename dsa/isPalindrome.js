const isPalindrom = (num) => {
    let reverse = Number(num.toString().trim().split('').reverse().join(""))

    if (num === reverse) {
        return true
    } else {
        return false
    }

}

let result = isPalindrom(11);
console.log("result::-", result)