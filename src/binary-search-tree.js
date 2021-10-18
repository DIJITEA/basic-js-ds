const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    let node = new Node(data);
    let temp = this.treeRoot;
    if (!this.treeRoot) {
      return (this.treeRoot = node);
    }
    while (temp) {
      if (node.data < temp.data) {
        if (!temp.left) {
          return (temp.left = node);
        }
        temp = temp.left;
      } else {
        if (!temp.right) {
          return (temp.right = node);
        }
        temp = temp.right;
      }
    }
  }

  has(data) {
    return !this.find(data) ? false : true;
  }

  find(data) {
    let temp = this.treeRoot;
    return traverse(temp);
    function traverse(node) {
      return !node
        ? null
        : node.data === data
        ? node
        : node.data < data
        ? traverse(node.right)
        : traverse(node.left);
    }
  }

  remove(/*data*/) {
    throw new NotImplementedError("Not implemented");
  }

  min() {
    let goLeft = this.treeRoot;
    while (goLeft.left) {
      goLeft = goLeft.left;
    }
    return goLeft.data;
  }

  max() {
    let goRight = this.treeRoot;
    while (goRight.right) {
      goRight = goRight.right;
    }
    return goRight.data;
  }
};
