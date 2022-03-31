const { memoize } = require('lodash');

let todos = new Array(10_000_000).fill({}).map((t, i) => ({
  id: i + 1,
  title: 'ABC',
  completed: Math.random() > 0.5,
}));

// pure function
// - prédictive, appelée avec des params données elle a toujours le même retour
// ex : sum(1, 2) === 3
// contre-ex : Math.random()
// - ne doit pas modifier ses paramètres d'entrée
// - ne doit pas avoir de side-effect, appel http, lecture de storage/fichier
function countNotCompleted(todos) {
  return todos.filter((t) => !t.completed).length;
}

const countNotCompletedMemo = memoize(countNotCompleted);

console.time('countNotCompleted');
console.log(countNotCompletedMemo(todos));
console.timeEnd('countNotCompleted');

// changement muable
// todos.push({
//   id: 0,
//   title: 'DEF',
//   completed: false,
// });

// changement immuable

console.time('create array');
todos = [
  ...todos,
  {
    id: 0,
    title: 'DEF',
    completed: false,
  },
];
console.timeEnd('create array');

console.time('countNotCompleted');
console.log(countNotCompletedMemo(todos));
console.timeEnd('countNotCompleted');

console.time('countNotCompleted');
console.log(countNotCompletedMemo(todos));
console.timeEnd('countNotCompleted');
