import { assert } from "chai";

import { SplayTree } from "../index";

describe ("find", () => {
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
    const input = [5, 6, 7, 8];
    const expected = [true, true, false, true];
    let output = [];
    for (let i = 0; i < input.length; i++) {
      output.push(tree.find(input[i]));
    }
    assert.equal(output.toString(), expected.toString());
  });

  it ('should return root pointer and that is equal to finding element', () => {
    const tree = new SplayTree();
    let l = [3, 2, 1, 5, 8, 4, 11, 6];
    for (let i = 0; i < l.length; i++) {
      tree.insert(l[i]);
    }
    tree.find(5);
    let expected = [5, 4, 3, 1, 2, 6, 11, 8];
    assert.equal(tree.keys().toString(), expected.toString());

    tree.find(11);
    expected = [11, 6, 5, 4, 3, 1, 2, 8];
    assert.equal(tree.keys().toString(), expected.toString());
  });
});