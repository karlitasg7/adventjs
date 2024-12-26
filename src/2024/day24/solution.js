function isTreesSynchronized(tree1, tree2) {
  function traverse(node1, node2) {
    if (!node1 || !node2) return true;

    let result = true;
    result &&= traverse(node1.right, node2.left);
    result &&= traverse(node1.left, node2.right);

    return result && node1.value === node2.value;
  }

  return [traverse(tree1, tree2), tree1.value];
}

module.exports = { isTreesSynchronized };
