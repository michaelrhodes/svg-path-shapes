module.exports = function(path) {
  var shapes = []
  var pattern = /(m[^m]*)/gi
  var result = null
  while (result = pattern.exec(path)) {
    shapes.push(result[0].trim())
  }
  return shapes
}
