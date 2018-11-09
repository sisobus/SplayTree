import { assert } from "chai";

import { SplayTree } from "../index";

describe ("insert", () => {
  it ('should return the size of the tree', () => {
    const tree = new SplayTree();
    for (let i = 0; i < 10; i++) {
      tree.insert(i);
    }
    assert.equal(tree._size, 10);
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
    assert.equal(tree._size, 2);
  });
});