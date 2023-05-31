const LengthOfLastWordSol = (props) => {
    const sentence = props.sentence;

    const LengthOfLastWord = (sentence) => {
        const wordList = [];

        if (!sentence) {
            return 0;
        } else if (!sentence.includes(" ")) {
            return sentence.length;
        } else {
            for (let i = 0; i < sentence.length; i++) {
                const s = sentence[i];
                if (s === " ") {
                    const substring = sentence.substring(0, i).trim();
                    wordList.push(substring);
                    sentence = sentence.substring(i);
                    i = 0;
                } else if (i === sentence.length - 1) {
                    const substring = sentence.substring(0, i + 1).trim();
                    wordList.push(substring);
                }
            }

            for (let i = wordList.length - 1; ; i--) {
                if (wordList[i] !== "") {
                    return wordList[i].length;
                }
            }
        }
    }
    return LengthOfLastWord(sentence);
}

export default LengthOfLastWordSol;