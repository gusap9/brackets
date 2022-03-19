module.exports = function check(str, bracketsConfig) {
    const braketsArray = bracketsConfig.map(cur => cur.join(''));
    let braketsString = str;
    while (true) {
        let input = braketsString;
        for (let i = 0; i < braketsArray.length; i++) {
            braketsString = braketsString.replace(braketsArray[i], '');
        }
        if (input === braketsString) break;
    }
    return !braketsString;
}