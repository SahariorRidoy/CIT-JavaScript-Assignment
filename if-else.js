
const mark=130;

if(mark>=80 && mark<=100){
 console.log("You Got: A+");
}
else if(mark>=70 && mark<=80){
    console.log("You Got: A");
}
else if(mark>=70 && mark<=79){
    console.log("You Got: A-");
}
else if(mark>=60 && mark<=69){
    console.log("You Got: B+");
}
else if(mark>=50 && mark<=59){
    console.log("You Got: B");
}
else if(mark>=40 && mark<=49){
    console.log("You Got: B-");
}
else if(mark>=33 && mark<=39){
    console.log("You Got: C+");
}
else if (mark>=0 && mark<=33 ) {
    console.log("You Got F. Keep Your Study Well");  
}
else if(mark>100){
    console.log("Please input mark between (0 to 100)");  
}
