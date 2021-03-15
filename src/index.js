module.exports = function reverse (n) {
    if (n >= 0) {
        n = String(n).split('').reverse().join('')
    } else {
        n *= -1;
        n = String(n).split('').reverse().join('')
    }

    return n  
}
