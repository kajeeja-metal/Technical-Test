function longestCommonPrefix(strs) {
    
    if (strs.length < 1 || strs.length > 200) {
        throw new Error("The array length must be between 1 and 200.");
    }

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length > 200) {
            throw new Error("Each string length must be 200 characters or less.");
        }
        if (!/^[a-z]*$/.test(strs[i])) {
            throw new Error("Each string must consist of only lower-case English letters.");
        }
    }

    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}

try {
    const strs1 = ["flowier", "fliow", "flight"];
    console.log(longestCommonPrefix(strs1));

    const strs2 = ["dog", "racecar", "car"];
    console.log(longestCommonPrefix(strs2));
} catch (error) {
    console.error(error.message);
}
