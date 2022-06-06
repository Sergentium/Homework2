// Exercise 6 

let var1 = 1;
let var2 = 0;
let var3 = true;

console.log (var1 > var2); // результат true, потому, что 1 больше 0
console.log (var1 == var3); // результат true, потому, что нестрогое равенство, 1 приводиться к булевому true
console.log (var1 === var3);// результат false, потому, что при строгом равенстве типы даных должны совпадать
console.log (var1 != var3); // результат false, потому, что использовано не строгое не равенство
console.log (var2 != var3);// результат true, потому, что 0 не строго не равен с true
console.log (var1 > var2 == var3); // результат true, потому, что 1 больше 0, что дает true. True не строго равно true
console.log (var1 > var2 > var3) // результат false, потому, что 1 больше 0 (дает true) а true не может быть больше чем true