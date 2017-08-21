function randomData(nodes, width, height) {
  var oldNodes = nodes;
  // generate some data randomly
  nodes = _.chain(_.range(_.random(10, 20)))
    .map(() => {
      return {
        key: _.random(30),
        size: _.random(8, 16),
      };
    }).uniqBy('key').value();

  if (oldNodes) {
    var end = _.random(oldNodes.length);
    var start = _.random(end);
    var add = _.slice(oldNodes, start, end + 1);
    nodes = _.chain(nodes)
      .union(add).uniqBy('key').value();
  }

  var nodeKeys = _.map(nodes, 'key');
  links = _.chain(_.range(_.random(15, 25)))
    .map(function() {
      var source = nodeKeys[_.random(nodes.length - 1)];
      var target = nodeKeys[_.random(nodes.length - 1)];
      if (source === target) return;

      return {
        source,
        target,
        key: source + ',' + target,
        size: _.random(2, 4)
      };
    }).filter().uniqBy('key').value();

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
      d.x = width / 2 + _.random(-25, 25);
      d.y = height / 2 + _.random(-25, 25);
    }
  });
}
