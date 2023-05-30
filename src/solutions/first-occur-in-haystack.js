const FirstOccurInHaystackSol = (props) => {
    const haystack = props.haystack;
    const needle = props.needle;

    const FirstOccurInHaystack = (param1, param2) => {
        if (param1.includes(param2)) {
            return param1.indexOf(param2);
        } else {
            return -1;
        }
    }
    return FirstOccurInHaystack(haystack, needle);
}

export default FirstOccurInHaystackSol;