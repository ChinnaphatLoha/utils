const logNode = (node) => {
  console.log(node);
  console.log(
    "nodeName:",
    node.nodeName,
    "nodeType:",
    node.nodeType,
    "nodeValue:",
    node.nodeValue
  );
};

const logAllNodes = (node) => {
  logNode(node);
  Array.from(node.childNodes).forEach((childNode) => {
    if (node.hasChildNodes()) {
      logAllNodes(childNode);
    }
  });
};
