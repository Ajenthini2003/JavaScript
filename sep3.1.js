function exists(element){
    let numbers=[1,2,3,4];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]===element){
            console.log(true);
            return
        }
    }
    console.log(false)
}

exists(3);

function checkPalindrome(word){
    for(let i=0;i<word.length/2;i++){
        if(word[i]=word[word.length-1-i]){
            console.log(false)
        }
    }
    console.log(true);
}
checkPalindrome("hello");