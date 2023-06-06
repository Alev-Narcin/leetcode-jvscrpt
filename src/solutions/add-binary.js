const AddBinarySol = (props) => {
    const value = props.value;
    const value2 = props.value2;

    const AddBinary = (value, value2) => {
        let i = value.length - 1, j = value2.length - 1, carry = 0;

        const builder = [];

        while (i >= 0 || j >= 0) {
            let sum = carry;
            if (i >= 0) sum += value[i--] - '0';
            if (j >= 0) sum += value2[j--] - '0';

            builder.push(sum % 2);
            carry = parseInt((sum / 2).toString());
        }
        if (carry !== 0) builder.push(carry);

        return builder.reverse().join('');
    }
    return AddBinary(value, value2);
}

export default AddBinarySol;