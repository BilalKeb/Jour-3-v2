// exercice 1

var a = 0;

for (i = 11; i < 47; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }

  a = a + 1;
}
console.log(a);

var sommeImpair = 0;

for (var i = 109; i <= 588; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
  sommeImpair = sommeImpair + i;
}
console.log(sommeImpair);

console.log("");

// EXERCICES 3 - petit 1

var numbers = [1, 2, 3, 4, 5];
var square = [];
var roots = [];

for (i = 0; i < numbers.length; i++) {
  var puissance = numbers[i] * numbers[i];
  console.log(puissance);
  square.push(puissance);
}

for (i = 0; i < square.length; i++) {
  var racineCarré = Math.sqrt(square[i]);
  console.log(racineCarré);
  roots.push(racineCarré);
}

// EXERCICE 3 - petit 2

var table3 = 3;
for (var i = 1; i <= 10; i++) {
  var resultat = table * i;
  console.log(table + " * " + i + " = " + resultat);
}
