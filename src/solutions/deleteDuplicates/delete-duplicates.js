const DeleteDuplicatesSol = (props) => {
    const head = props.head;

    const deleteDuplicates = (head: ListNode | null): ListNode | null => {
        let currNode = head;

        while (currNode && currNode.next) {
            if (currNode.val === currNode.next.val) {
                currNode.next = currNode.next.next;
            } else {
                currNode = currNode.next;

            }
        }
        return head;
    }
    return deleteDuplicates(head);
}

export default DeleteDuplicatesSol;