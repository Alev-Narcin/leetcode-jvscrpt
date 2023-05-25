const LongestCommonPrefix = (props) => {
    let prefix = props.value[0];

    for (let i = 1; i < props.value.length; i++) {
        while (!props.value[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === null) {
                return "";
            }
        }
    }
    return prefix;
}

export default LongestCommonPrefix;