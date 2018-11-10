# Splay tree ![npm version](https://badge.fury.io/js/splaytreejs.svg) [![Build Status](https://travis-ci.org/sisobus/SplayTree.svg?branch=master)](https://travis-ci.org/sisobus/SplayTree)

Lightweight [Splay tree](https://www.cs.cmu.edu/~sleator/papers/self-adjusting.pdf) javascript library for node, browser

## Install
```shell
npm i splaytreejs
```

node
```js
const splayTree = require("splaytreejs")

let tree = new splayTree.SplayTree();
for (let i = 0; i < 10; i++)
  tree.insert(i);

console.log(tree.keys());
tree.find(5);
console.log(tree.keys());
```

browser
```html
<head>
    <script src="../dist/splaytree.min.js"></script>
    <script>
        const {SplayTree} = splaytree;
        let tree = new SplayTree();

        for (let i = 0; i < 10; i++) {
            tree.insert(i);
        }
        console.log(tree.keys());
        tree.find(5);
        console.log(tree.keys());
    </script>
</head>
```

## API

* `new SplayTree([comparator])`, where `comparator` is optional comparison function
* `tree.insert(key: any, data: any):Node` - Insert item, not allowed duplicate keys
* `tree.find(key: any):Boolean` - Find item, return result, reshapes the tree so that finding node is rooted
* `tree.remove(key: any):Boolean` - Remove item, return result, reshapes the tree so that finding node is rooted
* `tree.findKth(k: Integer):Boolean` - Find Kth item, return result, reshapes the tree so that finding node is rooted
* `tree.keys(order: Integer):Array<key: any>` - Get Keys by order (0: preorder, 1: inorder, 2: postorder)
