/*
detected repeated and missing value in array angular

Example 1 : 
          Input nums = [2, 4, 3, 3] "-here" 3 is duplicated and 1 missing 
          Output : [3,1] ;

Example 2 : 
          Input nums = [1, 3, 3] "-here" 1 is duplicated and 2 missing
          Output : [1,2] ; in angular
          
*/


// Methode 1:-
var Hu = [1, 1, 3];
var Nw = [];
Hu = Hu.sort();
for (var j = 0; j < Hu.length; j++) Hu[j] == Hu[j + 1] ? Nw.push(Hu[j]) : '';
for (var i = 1; i < Hu[Hu.length - 1] + 1; i++) {
  var k = Hu.indexOf(i);
  k < 0 ? Nw.push(i) : ''
}
console.log(Nw);

//------------------------

// Methode 2:-
var Hu = [2, 4, 3, 3];
var Kl = [];
var Setval = new Set();
for (var i of Hu) Setval.has(i) == false ? Setval.add(i, true) : Kl.push(i);
for (var i = 1; i <= Hu.length; i++)Setval.has(i) == false ? Kl.push(i) : '';
console.log(Kl)

//-------------------------


// Methode 3:-
var Hu = [2, 4, 3, 3];
var Kl = [];
var Mapval = new Map();
for (var i of Hu) Mapval.has(i) == false ? Mapval.set(i, true) : Kl.push(i);
for (var i = 1; i <= Hu.length; i++)Mapval.has(i) == false ? Kl.push(i) : '';
console.log(Kl)

//-------------------------


// Methode 4:-
var Hu = [2, 4, 3, 3];
var Nw = [];
for (var i = 0; i < Hu.length - 1; i++)
  for (var j = i; j < Hu.length; j++)
    Hu[i] == Hu[j + 1] ? (Nw.push(Hu[j + 1]), Hu.splice(j + 1, 1)) : ''

for (var i = 1; i < Hu[Hu.length - 1] + 1; i++) {
  var k = Hu.indexOf(i);
  k < 0 ? Nw.push(i) : ''
}
console.log(Nw);


//-------------------------


// Methode 5:-
var Hu = [4, 3, 3];
var Nw = [];
var l = 1;
Hu = Hu.sort();
for (var j = 0; j < Hu.length; j++)Hu[j] == Hu[j + 1] ? (Nw.push(Hu[j]), Hu.splice(j, 1)) : '';

for (var i = 1; i < Hu[Hu.length - 1]; i++) {
  for (j = 0; j < Hu.length; j++) {
    if (i < Hu[j]) { Nw.push(i); i++; j--; } else { Hu.splice(j, 1); break; }
  }
}
console.log(Nw)