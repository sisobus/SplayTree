import { assert } from "chai";

import { SplayTree } from "../index";

describe ("insert", () => {
  it ('should return the size of the tree', () => {
    const tree = new SplayTree();
    for (let i = 0; i < 10; i++) {
      tree.insert(i);
    }
    assert.equal(tree.size, 10);
  });

  it ('should return the inserted pointer', () => {
    const tree = new SplayTree();
    const a = tree.insert(1);
    const b = tree.insert(2);
    const c = tree.insert(3);
    assert.equal(a.key, 1);
    assert.equal(b.key, 2);
    assert.equal(c.key, 3);
  });

  it ('should return the null because of duplicated key', () => {
    const tree = new SplayTree();
    tree.insert(1);
    tree.insert(1);
    tree.insert(1);
    tree.insert(1);
    tree.insert(2);
    assert.equal(tree.size, 2);
  });

  it ('should return the inserted pointer', () => {
    const tree = new SplayTree();
    let l = [3, 2, 1, 5, 8, 4, 11, 6];
    for (let i = 0; i < l.length; i++) {
      tree.insert(l[i]);
    }
    let expected = [6, 4, 3, 1, 2, 5, 11, 8];
    assert.equal(tree.keys().toString(), expected.toString());
    /*
     * input: 3 2 1 5 8 4 11 6
     * tree shape
     *        
     *        
     *           6
     *         /  \
     *        4   11
     *       / \  /
     *      3  5  8
     *     /    
     *    1      
     *     \
     *      2
     */
  });
});