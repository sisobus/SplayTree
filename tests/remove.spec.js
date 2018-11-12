import { assert } from "chai";

import { SplayTree } from "../index";

describe ("remove", () => {
  it ('should return result of remove remove', () => {
    const tree = new SplayTree();
    let l = [3, 2, 1, 5, 8, 4, 11, 6];
    for (let i = 0; i < l.length; i++) {
      tree.insert(l[i]);
    }
    const input = [5, 6, 7, 8];
    const expected = [true, true, false, true];
    const output = [];
   
    for (let i = 0; i < input.length; i++) {
      output.push(tree.remove(input[i]));
    }
    assert.equal(output.toString(), expected.toString());
  });

  it ('should be size is zero when all node is removed', () => {
    const tree = new SplayTree();
    let l = [3, 2, 1, 5, 8, 4, 11, 6];
    for (let i = 0; i < l.length; i++) {
      tree.insert(l[i]);
    }
    const input = [5, 1, 2, 3, 4, 8, 11, 6, 7];
    const expected = [7, 6, 5, 4, 3, 2, 1, 0, 0];
    const output = [];

    for (let i = 0; i < input.length; i++) {
      tree.remove(input[i]);
      output.push(tree.size);
    }
    assert.equal(output.toString(), expected.toString());
  });

  it ('should maintain shape of Splay Tree', () => {
    const tree = new SplayTree();
    let l = [3, 2, 1, 5, 8, 4, 11, 6];
    for (let i = 0; i < l.length; i++) {
      tree.insert(l[i]);
    }
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
    const input = [5, 6, 7, 8];
    const expected = [[4, 3, 1, 2, 6, 11, 8], [4, 3, 1, 2, 11, 8],
                      [8, 4, 3, 1, 2, 11], [4, 3, 1, 2, 11]];
    const output = [];
    for (let i = 0; i < input.length; i++) {
      tree.remove(input[i]);
      output.push(tree.keys());
    }
    assert.equal(output.toString(), expected.toString());
  });

  it ('It should not die after remove when size of tree equals zero.', () => {
     const tree = new SplayTree();
    let l = [3, 2, 1, 5, 8, 4, 11, 6];
    for (let i = 0; i < l.length; i++) {
      tree.insert(l[i]);
    }
    let expected = [];
    let output = [];
    for (let i = 0; i < 100; i++) {
      expected.push(i < l.length ? true : false);
      output.push(tree.remove(i < l.length ? l[i] : Number.MAX_SAFE_INTEGER));
    }
    assert.equal(output.toString(), expected.toString());
  });
});