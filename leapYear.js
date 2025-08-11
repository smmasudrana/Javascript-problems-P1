/** 
 * simple logic.
 * year will be a leap year if the year is divisible by 4.
*/

function leapYear(year){
    if(year % 4 ===0){
        return true;
    }
    else{
        return false;
    }
}

const isLeapYear = leapYear(2052);
console.log(isLeapYear); 


/** 
 * 1. those year that is not divisible by 100 and if the year is divisible by 4.
 * 2. if the year is divisible by 400, then it is a leap year.
 * 3. else it is not a leap year.
 */

function leapYear2(year){
    if(year % 100 !==0 && year % 4 === 0){
        return true;
    }
    else if(year % 100 ===0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const isLeapYear2 = leapYear2(2100);
console.log(isLeapYear2);