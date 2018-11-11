import { assert } from "chai";

import { SplayTree } from "../index";

describe ("500k data set", () => {
  const RandInt = (MOD=1e+9) => Math.random()*(MOD)|0;
  const n = 5e+5, m = 1e+2;
  let dataset = [], fdataset = [];
  for (let i = 0; i < n; i++) {
    dataset.push(RandInt());
  }
  for (let i = 0; i < m; i++) {
    fdataset.push(dataset[RandInt(n - 1)]);
  }

  it ('single insert time check', () => {
    const tree = new SplayTree();
    for (let i = 0; i < n; i++) {
      tree.insert(dataset[i]);
    }
    for (let i = 0; i < m; i++) {
      tree.find(fdataset[i]);
    }
  });

  it ('splited insert and merge time check', () => {
    const tree = new SplayTree();
    const trees = [];
    const nTrees = 100;
    for (let i = 0; i < nTrees; i++) {
      trees.push(new SplayTree());
    }
    const alloc = n/nTrees|0;
    for (let i = 0; i < nTrees; i++) {
      for (let j = 0; j < alloc; j++) {
        trees[i].insert(dataset[i*(alloc)+j]);
      }
    }
    // const remain = n - (nTrees * alloc);
    for (let j = nTrees * alloc; j < n; j++) {
      tree.insert(dataset[j]);
    }
    for (let i = 0; i < nTrees; i++) {
      tree.merge(trees[i]);
    }
    for (let i = 0; i < m; i++) {
      tree.find(fdataset[i]);
    }
    assert.equal(tree.size, n);
  });
});