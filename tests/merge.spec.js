import { assert } from "chai";

import { SplayTree } from "../index";

describe ("merge", () => {
  it ('should return the inserted pointer after merge two trees', () => {
    const tree1 = new SplayTree();
    const tree2 = new SplayTree();
    let l1 = [3, 2, 1, 5, 8, 4, 11, 6];
    let l2 = [7, 10, 9];
    for (let i = 0; i < l1.length; i++) {
      tree1.insert(l1[i]);
    }
    for (let i = 0; i < l2.length; i++) {
      tree2.insert(l2[i]);
    }
    tree1.merge(tree2);
    let expected = [9, 6, 4, 3, 1, 2, 5, 8, 7, 11, 10];
    assert.equal(tree1.keys().toString(), expected.toString());
    /*
     * input: 3 2 1 5 8 4 11 6
     * tree shape
     *        
     *              9 
     *           /   \   
     *          6     11 
     *         /  \   / 
     *        4    8  10 
     *       / \  /     
     *      3  5  7   
     *     /         
     *    1          
     *     \         
     *      2        
     */
  });

  it ('should return null pointer where tree1->root, tree2->root is null', () => {
    const tree1 = new SplayTree();
    const tree2 = new SplayTree();
    const r = tree1.merge(tree2);
    let expected = null;
    assert.equal(r, expected);
  });

  it ('should return tree1->root pointer where tree2->root is null', () => {
    const tree1 = new SplayTree();
    const tree2 = new SplayTree();
    tree1.insert(1);
    tree1.insert(2);
    tree1.insert(3);
    const r = tree1.merge(tree2);
    let expected = tree1.root;
    assert.equal(r, expected);
  });

  it ('should return tree2->root pointer where tree1->root is null', () => {
    const tree1 = new SplayTree();
    const tree2 = new SplayTree();
    tree2.insert(1);
    tree2.insert(2);
    tree2.insert(3);
    const r = tree1.merge(tree2);
    let expected = tree2.root;
    assert.equal(r, expected);
  });
});