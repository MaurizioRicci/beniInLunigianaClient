export default function isInt (x) {
  var y = parseInt(x, 10)
  return !isNaN(y) && x.toString() === y.toString()
}
