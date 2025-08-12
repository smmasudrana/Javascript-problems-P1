let a = 5;
let b = 7;
console.log(a, b);

const temp =a;   //swap korar jonno ager man ta akta temporary variable rekeh dite hobe jeno na haray.
a = b;
b = temp;
console.log(a , b);


//type 2----------------------
let x =10;
let y =20;
console.log(x, y);

[x, y] = [y, x]
console.log(x, y);