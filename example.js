//  var names = ['Tomas', 'Lukas', 'Miso'];
// //
// // names.forEach(function(name) {
// //   console.log('forEach', name);
// // });
// //
// //
// // names.forEach((name) => console.log('arrowFunc', name));
//
// var person = {
//   name: 'Tomas',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();


// function add(a, b) {
//   return a + b;
// }

var addStatment = (a, b) => {
  console.log(a + b);
}

var addExpression = (a, b) => console.log(a + b);

addStatment(5, 2);
addExpression(8, 2);

// console.log(add(1, 3));
// console.log(add(9, 0));
