const OnePlusSol = (props) => {
    const digits = props.digits;

    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }

    const OnePlus = (digits) => {
        let lastDigit = digits[digits.length - 1];

        if (lastDigit !== 9 && digits.length > 1) {

            lastDigit += 1;
            digits[digits.length - 1] = lastDigit;

        } else if (lastDigit === 9 && digits.length > 1) {

            for (let i = digits.length - 1; i >= 0; i--) {
                digits[i] += 1;
                if (digits[i] !== 10) {
                    break;
                } else if (i === 0) {
                    const newDigits = [];
                    newDigits[0] = 1;
                    newDigits[1] = 0;
                    arrayCopy(digits, 2, newDigits, 2, digits.length - 2);
                    return newDigits;
                } else {
                    digits[i] -= 10;
                }
            }
        } else if (lastDigit === 9) {  // && digits.length == 1
            lastDigit = 0;

            const list = [];

            list[digits.length] = lastDigit;
            list[digits.length - 1] = 1;

            return list;
        } else {  //  lastDigit != 9 && digits.length == 1
            lastDigit += 1;
            const list3 = [];
            list3[digits.length - 1] = lastDigit;
            return list3;
        }
        return digits;
    }
    return OnePlus(digits);
}

export default OnePlusSol;