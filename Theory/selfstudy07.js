if(true)
{
    var blockScopeVariable='I am a variable with block scope';
    console.log(blockScopeVariable);
}
console.log(blockScopeVariable);  //block scope. Reference error

function myFunction(){
    var functionScopeVariable='I am a variable with function scope';
    console.log(functionScopeVariable);

    function add()
    {
        console.log(functionScopeVariable);
    }
    add();
}
myFunction();






