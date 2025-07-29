let myScore = 70;
let friendsScore = 39;

if(myScore > 80){
    if(friendsScore > 80){
        console.log("Let's go for a lunch")
    }
    else{
        if(friendsScore >= 60){
            console.log("Good luck next time")
        }
        else{
            if(friendsScore >= 40){
                console.log("Message Unseen")
            }
            else{
                console.log("Blocked")
            }
        }
    }
}
else{
    console.log("Cry More")
}