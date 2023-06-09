const SquareRootSol = (props) => {
    const x = props.value;

    const SquareRoot = (x) => {
        let k = x;

        while (k * k > x) {
            k = (k + x / k) / 2 | 0;  //int donuyor
        }
        return k;
    }
    return SquareRoot(x);

    /*const SquareRoot2 = (x) => {
        let k = x;

        while (k * k > x) {
            k = (k + x / k) / 2;
        }
        return parseInt(k);
    }
    return SquareRoot2(x);*/
}

export default SquareRootSol;