// You have to print the numbers from 1 to 200 in new line.
// But for every multiple of 5 print "Foo",
// for every multiple of 7 print "Bar" and
// for every multiple of both 5 and 7 print "FooBar" instead of the number.

for(let i=1;i<=200;i++){
    let answer = '';
    if(i%5===0){
        answer += 'Foo';
    } 
    if(i%7===0){
        answer += 'Bar';
    }
    if(answer === ''){
        answer = i;
    } 
    console.log(answer);   
}