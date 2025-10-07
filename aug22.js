//if condition
//if the marks is greater than and equal to 50 then pass else print fail

var marks=40;
function checkMarks(marks){
    if(marks>=50){
        console.log("pass");
    }


else{
    console.log("fail");

}
}
checkMarks();

//traffic light colour 
let colour="green";
function trafficlightColour(colour){
    if(colour=="red"){
        return"stop";

    }
    else if(colour=="yellow"){
        return"ready";
    }
    else if(colour=="green"){
        return"go";
    }
}

console.log(trafficlightColour(colour));

