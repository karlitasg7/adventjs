function isTreesSynchronized(tree1, tree2) {
  const areNodesMirrored = (node1, node2) => {
    if (!node1 && !node2) return true;
    if (!node1 || !node2 || node1.value !== node2.value) return false;
    return (
      areNodesMirrored(node1.left, node2.right) &&
      areNodesMirrored(node1.right, node2.left)
    );
  };

  const synchronized = areNodesMirrored(tree1, tree2);

  return [synchronized, tree1?.value];
}

module.exports = { isTreesSynchronized };
