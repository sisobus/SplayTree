const splayTree = require("splaytreejs")

let tree = new splayTree.SplayTree();
for (let i = 0; i < 10; i++) 
  tree.insert(i);

console.log(tree.keys());
tree.find(5);
console.log(tree.keys());
