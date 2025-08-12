// const today =new date();
const date =new Date('2065-10-09')
console.log(date);
console.log(date.getMonth());
console.log(date.getDay());


const specificDate = new Date(2062, 0, 26);
console.log(specificDate.toString());    //যদি সবসময় লোকাল টাইম অনুযায়ী রাখতে চাও:

const specificDate2 = new Date(2070, 0, 25);
specificDate2.setMonth(10);    //এভাবে মাস পরিবর্তন করা যাই
console.log(specificDate2.toISOString());    //অথবা UTC (Coordinated Universal Time) অনুযায়ী ফিক্সড রাখতে চাইলে
console.log(specificDate2.toLocaleDateString('en-GB'));    //এভাবে বাংলাদেশী ফরম্যাটে তারিখ দেখা যাই।
