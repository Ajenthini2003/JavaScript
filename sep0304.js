let str=amma
function checkPalindrome(str) {
    let length = str.length;

    for (let i = 0; i < length / 2; i++) {
        if (str.charAt(i) !== str.charAt(length - 1 - i)) {
            return false;
        }
    }

    return true;
}

if(isPalindrome(str))
    console.log("Yes,"+str+"is a palindrome word");
elseconsole.log("No,"+str+"is not palindrome word");
