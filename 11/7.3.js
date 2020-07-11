const _ = require ('lodash');
let a = [1,2,-3,-4,4,5,7];
let sum = _.sum(a.filter(x => x > 0 && x % 2 !== 0));
console.log("sum = "+ sum);