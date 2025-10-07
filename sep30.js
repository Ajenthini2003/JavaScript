

function main(){
     var score=[[255,211],[203,121],[272,292],[25,275]];
     var house=["gryffindor","hufflepuff","hufflepuff","slytherin"];
     higherScoreByGenderIneachHouse(score,house);
}
main();

function higherScoreByGenderIneachHouse(score,house){
    for(let i=0;i<score.length;i++){
        let points=0;
        let gender="";
        if(score[i][0]>score[i][1]){
            points=score[i][0];
            gender= "girls"
        }
        else{
            points=score[i][1];
            gender ="boys"
        }
        console.log("The best performance in:"+house[i]+"house of the house meet is:"+gender+","+points)
    }
}
function higherScoredHouseInEachGender(score,house){
    let highScoreBoys=score[0][1],highScoreGirls=score[0][0];
    let boysHouse="",girlsHouse="";
    for(let i=0;i<score.length;i++){
        if(highScoreBoys<score[i][1]){
            highScoreBoys=score[i][1];
            boysHouse=house[i];
        }
        if(highScoreGirls<score[i][0]){
            highScoreGirls=score[i][0];
            girlsHouse=house[i];
        }

    }
    console.log("the best performance in girls of house meet is:"+boysHouse+","+highScoreBoys);
    console.log("the best performance in girls of the house meet is:"+girlsHouse+","+highScoreGirls);

}

function findWinningHouse(score,house){
    let finalScore=score[0][0]+score[0][1];
    let finalHouse=score[0];
    for(let i=0;i<score.length;i++){
        if(final)
    }
}