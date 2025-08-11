/**
 * function takes an array as parameter.
 * give me the average of the odd number is the array.
 */

function oddAverage(numbers){
    const allodd =[];
    for(const number of numbers){
        if(number % 2 ===1){
            allodd.push(number);
        }
    }
    console.log(allodd);
    let sum =0;
    for(const num of allodd){
        sum = sum + num;
    }
    console.log(sum);
    const count =allodd.length;
    console.log(count);
    const oddavg  =sum / count;
    return oddavg;
}


const allOddArray =[56, 67, 61, 65, 68, 66, 48, 31, 58]
const avg =oddAverage(allOddArray);
console.log(avg);