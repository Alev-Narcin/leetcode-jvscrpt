const SearchInsertSol = (props) => {
    const nums = props.nums;
    const target = props.target;

    const SearchInsert = (nums, target) => {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === target) {
                return i;
            } else if (i !== nums.length - 1 && nums[i] < target && target < nums[i + 1]) {
                return i + 1;
            } else if (target < nums[i]) {
                return i;
            } else if (target > nums[nums.length - 1]) {
                return nums.length;
            }
        }
        return -1;
    }
    return SearchInsert(nums, target);
}

export default SearchInsertSol;