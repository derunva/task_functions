var text = '<b>lorem</b> ipsum<br> sit <i>amen</i>'
var substring = 'ipsum sit'
const task_functions = require('./task_functions');

var result = task_functions.searchSubStringIgnoringTags(text, substring)
console.log(result);
var result = task_functions.add(4, 6)
console.log(result);

var n = text.search(substring);
console.log(n);
