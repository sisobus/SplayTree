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

* `new SplayTree([duplicate=true, comparator])`, where `comparator` is optional comparison function and `duplicate` is optional allow duplicate key (default is true)
* `tree.insert(key: any, data: any):Node` - Insert item
* `tree.find(key: any):Boolean` - Find item, return result, reshapes the tree so that finding node is rooted
* `tree.remove(key: any):Boolean` - Remove item, return result, reshapes the tree so that finding node is rooted
* `tree.findKth(k: Integer):Boolean` - Find Kth item, return result, reshapes the tree so that finding node is rooted
* `tree.keys(order: Integer):Array<key: any>` - Get Keys by order (0: preorder, 1: inorder, 2: postorder)
* `tree.merge(tree: SplayTree):Node` - Merge this tree and argument tree
* `tree.load(Array<key: any>, Array<data: any>, nTrees: Integer):None` - Load Array of keys and datas, if datas is null or keys.length is not equal datas.length then set default ([{} for keys.length])
* `tree.clear():SplayTree` - Clear tree
