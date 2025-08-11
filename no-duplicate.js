/**
 * array has some duplicate elements.
 */

function noDuplicate(numbers){
    const uniqueNum =[];
    for(number of numbers){
        if(uniqueNum.includes(number) === false){
            uniqueNum.push(number);
        }
    }
    return uniqueNum;
}
const allNumbers= [55, 46, 16, 41, 55, 16, 64, 46]
const uniqueNumber= noDuplicate(allNumbers);
console.log(uniqueNumber);
