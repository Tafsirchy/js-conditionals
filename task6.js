let age = 70;
let student = true;

if (age < 10){
    console.log("Entry free for children")
}
else{
    if (student == true){
        console.log("50% discount")
    }
    else{
        if(age >= 60){
            console.log("15% discount")
        }
        else{
            console.log ("Entry fee is 800 tk")
        }
    }
}
