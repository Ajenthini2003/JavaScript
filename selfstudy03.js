let names=["tiya","ram","sam","raja","kumar"];
for(let i=0;i<names.length;i++)
{
    console.log(names[i]);
}
console.log("for of Loop: ")
for(let name of names){
    console.log(name);
}

//break statement using
for(let i=1;i<=10;i++){
    console.log(i);
    if(i==4){
        break;
    }
}

//continue statement using
for(let i=1;i<=10;i++){
    
    if(i==4){
        continue;
    }
    console.log(i);
}

//odd numbers
for(let i=1;i<=10;i++)
{
    if(i%2==0){
        continue;
    }
    console.log(i);
}

//label block in javascript
let people=[
    ["Ram","Sam","Ravi"],
    ["Kumar","Tiya","Sundar"],
    ["Rajan","Sara","Rahul"],
];

for(let group of people)
{
    for(let member of group){
        console.log(member);        //this is how we order names in group
    }
}

//lavel block in javascript
let workers=[
    ["Sam","Ram","Ravi"],
    ["Kumar","Tiya","Sundar"],
    ["Rajan","Sara","Rahul"],
];

for(let group of workers)
{
    inner:
    for(let member of group)
        {
        if(member.startsWith('R')){
            console.log("follow one starting with R:",member);
            break inner;
        }       
    }
}
