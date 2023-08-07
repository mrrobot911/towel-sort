
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const res = []
  if (!matrix) {
    return res
  }
  for (let i=0; i < matrix.length; i++){
    if (i & 1){
      res.push(...matrix[i].reverse())
    } else {
      res.push(...matrix[i])
    }
  }
  return res
}
