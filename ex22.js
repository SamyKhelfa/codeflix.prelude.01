function splice(str='', start, deleteCountopt = str.length - start, toAddopt='') {
    let result = ''
    const isStartNegative = start < 0

    for (let i = 0; i < str.length; i++) {
        if (!isStartNegative && i >= deleteCountopt) {
            result += str[i];
        }


        if (isStartNegative && i < (str.length + start)) {
            console.log(i, str.length + start, (str.length + start) + deleteCountopt)
            result += str[i];
        }
    }

    if (isStartNegative) {
        return result + toAddopt
    } else {
        return toAddopt + result
    }
}

console.log(splice('Tony Tony Ch0pper', 0, 10))
// => Ch0pper
console.log(splice('Tony Ch0pper', 0, 4, 'Tony Tony'))
// => Tony Tony Ch0pper
console.log(splice('Tony Tony Usopp', -5, 5, 'Ch0pper'))
// => Tony Tony Ch0pper