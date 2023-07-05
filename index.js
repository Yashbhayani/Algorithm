/*
detected repeated and missing value in array angular

Example 1 : 
          Input nums = [6,4,'a',3,'a',3,'g','c'] " 
          Output : [3,1,2,5,'a','b','d','e','f'] ;
          
*/


//Methode:-1

var Hu = [6,4,'a',3,'a',3,'g','c'], N = [], S = [], Nw = [];
Hu = Hu.sort();
Hu.filter(item => typeof item === 'number'? N.push(item):S.push(item));
DM(N)
for (var i = 1; i <= N[N.length - 1]; i++){
  var k = N.indexOf(i);
  k < 0 ? Nw.push(i) : ''
}
DM(S)
for (var i = 'a'.charCodeAt(); i <= S[S.length - 1].charCodeAt(); i++){
  var k = S.indexOf(String.fromCharCode(i));
  k < 0 ? Nw.push(String.fromCharCode(i)) : ''
}
console.log(Nw);
function DM(Hu) {
  for (var j = 0; j < Hu.length; j++) Hu[j] == Hu[j + 1] ? Nw.push(Hu[j]) : '';
}
//---------------------------------------------------------------

//Methode:-2
var Huu = [6,4,'a',3,'a',3,'g','c'], N = [], S = [], Kl = [];
var Setval = new Set();
Huu.filter(item => typeof item === 'number'? N.push(item):S.push(item));
dd(N.sort())
for (var i = 1; i <= N[N.length-1]; i++)Setval.has(i) == false ? Kl.push(i) : '';
dd(S.sort())
for (var i = 'a'.charCodeAt(); i <= S[S.length-1].charCodeAt(); i++)Setval.has(String.fromCharCode(i)) == false ? Kl.push(String.fromCharCode(i)) : '';
console.log(Kl)
function dd(Hu){
  for (var i of Hu) Setval.has(i) == false ? Setval.add(i, true) : Kl.push(i);
}

//---------------------------------------------------------------

//Methode:-3
var Huu = [6,4,'a',3,'a',3,'g','c'], N = [], S = [], Kl = [];
var Mapval = new Map();
Huu.filter(item => typeof item === 'number'? N.push(item):S.push(item));
dd(N.sort())
for (var i = 1; i <= N[N.length-1]; i++)Mapval.has(i) == false ? Kl.push(i) : '';
dd(S.sort())
for (var i = 'a'.charCodeAt(); i <= S[S.length-1].charCodeAt(); i++)Mapval.has(String.fromCharCode(i)) == false ? Kl.push(String.fromCharCode(i)) : '';
console.log(Kl)
function dd(Hu){
  for (var i of Hu) Mapval.has(i) == false ? Mapval.set(i, true) : Kl.push(i);
}

//----------------------------------------------------

//Methode:-4

var Huu = [6,4,'a', 3,'a', 3,'g','c'];
var Hu = [2, 4, 3, 3];
var N= [];
var S= [];
var Nw = [];

for(var i=0; i<Huu.length; i++) typeof Huu[i] === "number"? N.push(Huu[i]):S.push(Huu[i])

for (var i = 0; i < N.length - 1; i++)
  for (var j = i; j < N.length; j++)
    N[i] == N[j + 1] ? (Nw.push(N[j + 1]), N.splice(j + 1, 1)) : ''

for (var i = 1; i < Math.max(...N); i++) {
  var k = N.indexOf(i);
  k < 0 ? Nw.push(i) : ''
}

for (var i = 0; i < S.length - 1; i++)
  for (var j = i; j < S.length; j++)
    S[i] == S[j + 1] ? (Nw.push(S[j + 1]), S.splice(j + 1, 1)) : ''

 for (var i = 'a'.charCodeAt(); i <=String.fromCharCode(Math.max(...S.map(char => char.charCodeAt(0)))).charCodeAt(); i++) {
  var k = S.indexOf(String.fromCharCode(i));
  k < 0 ? Nw.push(String.fromCharCode(i)) : ''
}
console.log(Nw);

//----------------------------------------------------

//Method :- 5
var Hu = [6,4,'a', 3,'a', 3,'g','c'];;
var N = [], S = [], Nw= [];
var l = 1;

Hu.sort().filter(item => typeof item === 'number'? N.push(item):S.push(item));

for (var j = 0; j < N.length; j++) N[j] == N[j + 1] ? (Nw.push(N[j]), N.splice(j, 1)) : '';

for (var i = 1; i < N[N.length - 1]; i++) {
  for (j = 0; j < N.length; j++) {
    if (i < N[j]) { Nw.push(i); i++; j--; } else { N.splice(j, 1); break; }
  }
}

for (var j = 0; j < S.length; j++) S[j] == S[j + 1] ? (Nw.push(S[j]), S.splice(j, 1)) : '';

var h =S[S.length-1];

for (var i = 'a'.charCodeAt(); i <=h.charCodeAt(); i++){ 
  for (j = 0; j < S.length; j++) {
    if (i < S[j].charCodeAt()) {
      Nw.push(String.fromCharCode(i));
      i++; j--; 
    } else {
      S.splice(j, 1);
      break;
    }
  }
}
 
console.log(Nw)

