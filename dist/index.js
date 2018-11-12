"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}Object.defineProperty(exports,"__esModule",{value:!0});var Node=function t(e,r){_classCallCheck(this,t),this.key=e,this.data=r,this.left=null,this.right=null,this.parent=null,this.cnt=0},SplayTree=function(){function f(){var t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(t,e){return e<t?1:t<e?-1:0};_classCallCheck(this,f),this.comparator=e,this.duplicate=t,this._root=null,this._size=0}return _createClass(f,[{key:"update",value:function(t){t.cnt=1,t.left&&(t.cnt+=t.left.cnt),t.right&&(t.cnt+=t.right.cnt)}},{key:"rotate",value:function(t,e){var r=e.parent,i=null;return e===r.left?(r.left=i=e.right,e.right=r):(r.right=i=e.left,e.left=r),e.parent=r.parent,r.parent=e,i&&(i.parent=r),e.parent?r===e.parent.left?e.parent.left=e:e.parent.right=e:t=e,this.update(r),this.update(e),t}},{key:"splay",value:function(t,e){for(;e.parent;){var r=e.parent,i=r.parent;i&&this.rotate(t,e===r.left==(r===i.left)?r:e),t=this.rotate(t,e)}return t}},{key:"insert",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=this._root,i=null;if(!r)return i=new Node(t,e),this._root=i,this._size++,i;for(;;){if(!this.duplicate&&0===this.comparator(t,r.key))return i;if(this.comparator(t,r.key)<0){if(!r.left){i=new Node(t,e),(r.left=i).parent=r,this._root=this.splay(this._root,i);break}r=r.left}else{if(!r.right){i=new Node(t,e),(r.right=i).parent=r,this._root=this.splay(this._root,i);break}r=r.right}}return this._size++,i}},{key:"merge",value:function(t){var e=this._root;if(!e&&!t.root)return null;if(!t.root)return e;if(!e)return this._root=t.root,this._size=t.size,this._root;for(;;)if(this.comparator(t.root.key,e.key)<0){if(!e.left){e.left=t.root,t.root.parent=e,this._root=this.splay(this._root,t.root);break}e=e.left}else{if(!e.right){e.right=t.root,t.root.parent=e,this._root=this.splay(this._root,t.root);break}e=e.right}return this._size+=t.size,t.root}},{key:"load",value:function(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:100,i=t.length;if(!e||i!==e.length){e=[];for(var o=0;o<i;o++)e.push({})}for(var n=i/r|0,s=[],h=0;h<r;h++){s.push(new f);for(var l=0;l<n;l++)s[h].insert(t[h*n+l],e[h*n+l]);this.merge(s[h])}for(var a=r*n;a<i;a++)this.insert(t[a],e[a])}},{key:"find",value:function(t){var e=this._root;if(!e)return!1;for(;e&&0!==this.comparator(t,e.key);)if(this.comparator(t,e.key)<0){if(!e.left)break;e=e.left}else{if(!e.right)break;e=e.right}return this._root=this.splay(this._root,e),0===this.comparator(t,e.key)}},{key:"findKth",value:function(t){if(t>=this._size)return!1;for(var e=this._root;;){for(;e.left&&e.left.cnt>t;)e=e.left;if(e.left&&(t-=e.left.cnt),!t--)break;e=e.right}return this._root=this.splay(this._root,e),!0}},{key:"remove",value:function(t){if(!this.find(t))return!1;var e=this._root;if(e.left){if(e.right){this._root=e.left,this._root.parent=null;for(var r=this._root;r.right;)r=r.right;return r.right=e.right,e.right.parent=r,e=null,this._size--,!0}return this._root=e.left,e=this._root.parent=null,this._size--,!0}return e.right?(this._root=e.right,e=this._root.parent=null,this._size--,!0):(e=null,this._root=null,!(this._size=0))}},{key:"clear",value:function(){return this._root=null,this._size=0,this}},{key:"keys",value:function(){var t=[];return[function t(e,r){r.push(e.key),e.left&&t(e.left,r),e.right&&t(e.right,r)},function t(e,r){e.left&&t(e.left,r),r.push(e.key),e.right&&t(e.right,r)},function t(e,r){e.left&&t(e.left,r),e.right&&t(e.right,r),r.push(e.key)}][0<arguments.length&&void 0!==arguments[0]?arguments[0]:0](this._root,t),t}},{key:"root",get:function(){return this._root}},{key:"size",get:function(){return this._size}}]),f}();exports.SplayTree=SplayTree;
