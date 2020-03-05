module.exports = function check(str, bracketsConfig) {
    let array = [];
    let k = str.length / 2;

    while (k >= 0) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            array = bracketsConfig[i][0].concat(bracketsConfig[i][1]);
            while (str.indexOf(array) != -1) {
                str = str.replace(array, "");
            }
        }
        k--;
    }
    return !str.length;
};
