function randomData(nodes, width, height) {
  var oldNodes = nodes;
  // generate some data randomly
  nodes = _.chain(_.range(_.random(10, 30)))
    .map(function() {
      var node = {};
      node.key = _.random(0, 30);
      node.size = _.random(4, 10);

      return node;
    }).uniq(function(node) {
      return node.key;
    }).value();

  if (oldNodes) {
    var add = _.initial(oldNodes, _.random(0, oldNodes.length));
    add = _.rest(add, _.random(0, add.length));

    nodes = _.chain(nodes)
      .union(add).uniq(function(node) {
        return node.key;
      }).value();
  }

  links = _.chain(_.range(_.random(15, 35)))
    .map(function() {
      var link = {};
      link.source = _.random(0, nodes.length - 1);
      link.target = _.random(0, nodes.length - 1);
      link.key = link.source + ',' + link.target;
      link.size = _.random(1, 3);

      return link;
    }).uniq((link) => link.key)
    .value();

  maintainNodePositions(oldNodes, nodes, width, height);

  return {nodes, links};
}

function maintainNodePositions(oldNodes, nodes, width, height) {
  var kv = {};
  _.each(oldNodes, function(d) {
    kv[d.key] = d;
  });
  _.each(nodes, function(d) {
    if (kv[d.key]) {
      // if the node already exists, maintain current position
      d.x = kv[d.key].x;
      d.y = kv[d.key].y;
    } else {
      // else assign it a random position near the center
      d.x = width / 2 + _.random(-150, 150);
      d.y = height / 2 + _.random(-25, 25);
    }
  });
}