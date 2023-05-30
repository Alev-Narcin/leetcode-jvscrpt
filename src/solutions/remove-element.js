const RemoveElementSol = (props) => {
    const param1 = props.param1;
    const param2 = props.param2;

    const newArrs = [];

    const RemoveElement = (param1, param2) => {
        for (let i = 0; i < param1.length; i++) {
            if (param1[i] !== param2) {
                newArrs.push(param1[i]);
            }
        }
        return newArrs.length;
    }

    return RemoveElement(param1, param2);
}

export default RemoveElementSol;