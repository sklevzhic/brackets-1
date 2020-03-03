module.exports = function check(str, bracketsConfig) {
    while (str.length !== 0) {
        let isRemove = false;
        for (let i = 0; i < bracketsConfig.length; i++) {
            const template = bracketsConfig[+i].join('');
            if (~str.indexOf(template)) {
                str = str.replace(template, '');
                isRemove = true;
            }
        }
        if (!isRemove) {
            return false;
        }
    }
    return true;
}
