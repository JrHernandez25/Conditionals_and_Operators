console.log("Hello world");

var mynum = prompt("From a scale from 1 to 10 how is you day?(Make sure you use a number and not words)")

if(mynum < 5){
    alert("You had a bad day")
}
else if(mynum >6){
    alert("You had a great day")
}
else if(mynum !=5){
    alert("You had a somewhat good day")
}
else if(mynum !=6){
    alert("Your day got a little better")
}
document.write("<h2>Your number is</h2>")
document.write(mynum)