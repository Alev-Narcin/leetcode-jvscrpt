const RomanToInt = (props) => {
    const charterAndValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let res = 0;

    for (let i = 0; i < props.string.length; i++) {
        if (charterAndValue[props.string[i]] < charterAndValue[props.string[i + 1]]) {
            res -= charterAndValue[props.string[i]];
        } else {
            res += charterAndValue[props.string[i]];
        }
    }
    return res;
}

export default RomanToInt;