//we know that-- 12 inch = 1 feet.
function inchToFeet(inch){
    const feet = inch /12;
    return feet;
}
const myHeight = inchToFeet(68.4);
console.log(myHeight);


//-----------------------
function inchToFeet2 (inch){
    const feet= inch /12;
    const feetNumber =parseInt(feet);
    const inchRemaining = inch % 12;
    const result= feetNumber + ' ft ' + inchRemaining+ ' inch.';
    return result;
}

const heroHeight =inchToFeet2(75);
console.log(heroHeight);



// -------------------------
function mileTokilometer(mile){
    const kilo =mile * 1.60934;
    return kilo;
}

const totalKilometer = mileTokilometer(5);
console.log(totalKilometer);