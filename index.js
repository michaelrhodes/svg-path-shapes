module.exports = function(path) {
  var shapes = []
  var pattern = /(m[^z]*[z])/gi
  var result = null
  while (result = pattern.exec(path)) {
    shapes.push(result[0])
  }
  return shapes
}
