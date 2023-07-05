const MergeSorted2ArraysSol = (props) => {
    const nums1 = props.nums1;
    const nums2 = props.nums2;
    const m = props.m;
    const n = props.n;

    const mergeSorted2Arrays = (nums1, m, nums2, n) => {
        let k = m;
        for (let i = 0; i < n; i++) {
            nums1[k] = nums2[i];
            k++;
        }
        nums1.sort((a, b) => (a > b) ? 1 : -1);

        return nums1.toString();
    }

    return mergeSorted2Arrays(nums1, m, nums2, n);

}

export default MergeSorted2ArraysSol;