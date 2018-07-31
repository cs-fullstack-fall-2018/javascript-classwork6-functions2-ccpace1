function main() {
    var favNum = parseInt(prompt("What is your favorite number?"));
    alert("You're Favorite number is " + favNum);
    return favNum
}
function aboveOrBelow100(number){
if (number>100){
    alert("Your number is over 100");
}
else if (number<100){
    alert("Your number is under 100");
}
else{
    alert("Your favorite number is 100")
}
}
;
aboveOrBelow100(main());
