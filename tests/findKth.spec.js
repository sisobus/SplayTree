import { assert } from "chai";

import { SplayTree } from "../index";

describe ("findKth", () => {
  it ('should return result of find', () => {
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
    const input = [0, 2, 4, 8];
    const expected = [true, true, true, false];
    let output = [];
    for (let i = 0; i < input.length; i++) {
      output.push(tree.findKth(input[i]));
    }
    assert.equal(output.toString(), expected.toString());
  });

  it ('should set root to the kth element', () => {
    const tree = new SplayTree();
    let l = [3, 2, 1, 5, 8, 4, 11, 6];
    for (let i = 0; i < l.length; i++) {
      tree.insert(l[i]);
    }
    const input = [0, 2, 4, 8];
    l.sort((a, b) => a - b);
    const expected = [l[0], l[2], l[4], l[4]];
    let output = [];
    for (let i = 0; i < input.length; i++) {
      tree.findKth(input[i]);
      output.push(tree.root.key);
    }
    assert.equal(output.toString(), expected.toString());
  });
});