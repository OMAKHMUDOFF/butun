console.log("1 misol");  
let sm = 10
let m = sm / 100
console.log(sm + " santimetr " + m + " metrga teng");

console.log("2 misol");  
let kg = 12 
let tn = kg / 1000
console.log(kg + " kilogram " + tn + " tonnaga teng");

console.log("3 misol");  
let byte = 2048
let kbyte = byte / 1000
console.log(byte + " byte "+ Math.round(kbyte) + " kilobyte teng");

console.log("4 misol");  
let a = 15
let b = 5
console.log("a kesmada b kesmani " + (a/b) +" marta joylashtirsa boladi");

console.log("5 misol");  
let A = 19
let B = 5
let joylash = Math.floor(A/B)
let joylashmagan = Math.abs((joylash*B)-A)
console.log("A kesmada B kesmani " + joylash +" marta joylashtirsa boladi" + "va A ning " + joylashmagan + " qismida B joylashmagan");

console.log("6 misol");  
var ikkixona = 27
var onlik = Math.floor(ikkixona / 10)
var birlik = ikkixona - onlik * 10
console.log(onlik , birlik);

console.log("7 misol");  
var ikkixona = 25
var onlik = Math.floor(ikkixona / 10)
var birlik = ikkixona - onlik * 10
console.log(onlik , birlik , ("Yigindisi = " + onlik + birlik));

console.log("8 misol");  
var ikkixona = 25
var onlik = Math.floor(ikkixona / 10)
var birlik = ikkixona - onlik * 10
var almash = birlik
birlik = onlik
onlik = almash
console.log(onlik , birlik);

console.log("9 misol"); 
var uchxona = 349
var yuzlik = Math.floor(uchxona / 100)
console.log("Yuzlik soni = " + yuzlik);

console.log("10 misol");  
var uchxona = 349
var yuzlik = Math.floor(uchxona / 100)
var onlik = uchxona - yuzlik * 100
var birlik = onlik
console.log("Birlik = " + birlik);
