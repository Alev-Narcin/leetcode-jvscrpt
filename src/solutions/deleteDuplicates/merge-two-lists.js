import ListNode from "./list-node";

const MergeTwoListsSol = (props) => {
    const list1 = props.list1;
    const list2 = props.list2;

    const MergeTwoList = (list1, list2) => {
        let head = new ListNode(null);
        let currList = head;

        while (list1 || list2) {
            if (list1 && list2) {  //ikiside varsa
                if (list1.val < list2.val) {
                    currList.next = list1;
                    list1 = list1.next;
                } else if (list1.val > list2.val) {
                    currList.next = list2;
                    list2 = list2.next;
                } else {  //esitse
                    currList.next = list1;
                    list1 = list1.next;
                }

            } else if (list1) {  //list1 varsa
                currList.next = list1;
                list1 = list1.next;

            } else { //list2 varsa
                currList.next = list2;
                list2 = list2.next;
            }
            currList = currList.next;
        }

        return head.next;
    }

    return MergeTwoList(list1, list2);
}
export default MergeTwoListsSol;