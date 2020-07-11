const _ = require ('lodash');
let a = [1,2,3,-2,-3,4,-2];
[a[a.indexOf(_.max(a))], a[a.indexOf(_.min(a))]] = [a[a.indexOf(_.min(a))], a[a.indexOf(_.max(a))]]
console.log(a);