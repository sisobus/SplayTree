class Node {
  constructor (key, data) {
    this.key = key;
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

export class SplayTree {
  constructor (comparator = (a, b) => a > b ? 1 : a < b ? -1 : 0) {
    this.comparator = comparator;
    this._root = null;
    this._size = 0;
  }
  rotate (root, x) {
    let p = x.parent;
    let b = null;
    if (x === p.left) {
      p.left = b = x.right;
      x.right = p;
    } else {
      p.right = b = x.left;
      x.left = p;
    }
    x.parent = p.parent;
    p.parent = x;
    if (b) {
      b.parent = p;
    }
    if (x.parent) {
      if (p === x.parent.left) {
        x.parent.left = x;
      } else {
        x.parent.right = x;
      }
    } else {
      root = x;
    }
    return root;
  }
  splay (root, x) {
    while (x.parent) {
      let p = x.parent;
      let g = p.parent;
      if (g) this.rotate(root, (x === p.left) === (p === g.left) ? p : x);
      root = this.rotate (root, x);
    }
    return root;
  }
  insert (key, data = {}) {
    let p = this._root;
    let x = null;
    if (!p) {
      x = new Node(key, data);
      this._root = x;
      this._size++;
      return x;
    }
    const TRUE = true;
    while (TRUE) {
      if (key === p.key) return;
      if (this.comparator(key, p.key) === 0) return x;
      if (this.comparator(key, p.key) < 0) {
        if (!p.left) {
          x = new Node(key, data);
          p.left = x;
          x.parent = p;
          this._root = this.splay(this._root, x);
          break;
        }
        p = p.left;
      } else {
        if (!p.right) {
          x = new Node(key, data);
          p.right = x;
          x.parent = p;
          this._root = this.splay(this._root, x);
          break;
        }
        p = p.right;
      }
    }
    this._size++;
    return x;
  }
  find (key) {
    let p = this._root;
    let lp = p;
    if (!p) return false;
    while (p) {
      if (this.comparator(key, p.key) === 0) break;
      if (this.comparator(key, p.key) < 0) {
        if (!p.left) break;
        lp = p;
        p = p.left;
      } else {
        if (!p.right) break;
        lp = p;
        p = p.right;
      }
    }
    this._root = this.splay(this._root, p);
    return this.comparator(key, p.key) === 0;
  }
  remove (key) {
    if (!this.find(key)) return false;
    let p = this._root;
    if (p.left) {
      if (p.right) {
        this._root = p.left;
        this._root.parent = null;
        let x = this._root;
        while (x.right) x = x.right;
        x.right = p.right;
        p.right.parent = x;
        p = null;
        return true;
      }
      this._root = p.left;
      this._root.parent = null;
      p = null;
      return true;
    }
    if (p.right) {
      this._root = p.right;
      this._root.parent = null;
      p = null;
      return true;
    }
    p = null;
    this._root = null;
    return true;
  }
  keys (order = 0) {
    /*
     * order 0: preOrder
     * order 1: inOrder
     * order 2: postOrder
     */
    function _preOrder (p, ret) {
      ret.push(p.key);
      if (p.left) {
        _preOrder(p.left, ret);
      }
      if (p.right) {
        _preOrder(p.right, ret);
      }
    }
    function _inOrder (p, ret) {
      if (p.left) {
        _inOrder(p.left, ret);
      }
      ret.push(p.key);
      if (p.right) {
        _inOrder(p.right, ret);
      }
    }
    function _postOrder (p, ret) {
      if (p.left) {
        _postOrder(p.left, ret);
      }
      if (p.right) {
        _postOrder(p.right, ret);
      }
      ret.push(p.key);
    }
    const f = [_preOrder, _inOrder, _postOrder];
    let ret = [];
    f[order](this._root, ret);
    return ret;
  }
}
