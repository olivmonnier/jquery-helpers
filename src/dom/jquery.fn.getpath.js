jQuery.fn.getPath = function() {
  if (this.length != 1) throw 'Requires one element.';

  let path, node = this;

  while (node.length) {
    let realNode = node[0], name = realNode.localName;

    if (!name) break;
    name = name.toLowerCase();

    const parent = node.parent();
    const siblings = parent.children(name);

    if (siblings.length > 1) {
      name += ':eq(' + siblings.index(realNode) + ')';
    }

    path = name + (path ? '>' + path : '');
    node = parent;
  }

  return path;
}
