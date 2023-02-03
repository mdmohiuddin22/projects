// console.log(4%2);
// console.log(98%2);
// console.log(144%2);
// console.log(1286%2);
// console.log(7%2);
// console.log(99%2);
// console.log(141%2);
// console.log(1285%2);

function isEven(number){
    const remainder = number % 2;
  if(remainder === 0){
    return true;
  }
  else{
    return false;
  }
}

const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(1280);
console.log(herNumberIsEven);