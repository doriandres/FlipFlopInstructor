/**
 * Retrieves a boolean array containing the binary expression
 * @param {number} number Number to convert
 * @returns {boolean[]} binary expression
 */
function getBinary(number) {
    return number.toString(2).split('').map(n => !!parseInt(n));
}
/**
 * Creates the instructions array for the Flip Flop T 
 * @param {number} currentVal 
 * @param {number} desiredVal
 * @returns {boolean[]} Intructions Array
 */
function getFlipFlopInstructions(type, currentVal, desiredVal) {
    currentVal = getBinary(currentVal);
    desiredVal = getBinary(desiredVal);
    if (currentVal.length !== desiredVal.length) {
        let diff;
        let lessVal;
        if (currentVal.length > desiredVal.length) {
            lessVal = desiredVal;
            diff = currentVal.length - desiredVal.length;
        } else if (currentVal.length < desiredVal.length) {
            lessVal = currentVal;
            diff = desiredVal.length - currentVal.length;
        }
        while (diff--) {
            lessVal.unshift(false);
        }
    }
    let length = currentVal.length;
    let instructions = [];
    switch (type) {
        case 't':
            while (length--) {
                let index = length;
                instructions.unshift(desiredVal[index] ? !currentVal[index] : currentVal[index]);
            }
            break;
        case 'd':
            while (length--) {
                let index = length;
                instructions.unshift(desiredVal[index]);
            }
            break;
    }
    return instructions;
}