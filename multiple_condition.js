const salary = 50000;
const isBCS = true;
const height = 5.5;
const hasCar = true;

// if(salary >= 50000 && height > 5.5){
//     console.log("siuuuuuuu patro")
// }
// else{
//     console.log("pochondo hoyni")
// }


if(salary >= 50000 || height > 5.6){
    console.log("eso baba kobul")
}
else{
    console.log("vag tui mokul")
}

if(salary >= 80000 || height > 6.0 || isBCS == true){
    console.log("eso baba kobul")
}
else{
    console.log("vag tui mokul")
}

// complex condition

if((salary >= 80000 && hasCar == true) || isBCS == true){
    console.log("cholo biye kori")
}
else{
    console.log("Tor juggota nai")
}