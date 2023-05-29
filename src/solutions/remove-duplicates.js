const RemoveDuplicatesSol = (props) => {

    const RemoveDuplicates = (arrs) => {
        let newArrs = [];

        for (let i = 0; i < arrs.length; i++) {
            if (i === 0 || arrs[i] !== arrs[i - 1]) {
                newArrs.push(arrs[i]);
            }
        }
        return newArrs;
    }

    return RemoveDuplicates(props.arrs);
}

export default RemoveDuplicatesSol;