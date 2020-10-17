
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (!Array.isArray(matrix)) return [];

  let a = matrix.map((elem, index) => (index % 2) ? elem.reverse() : elem);

  return a.flat();
}
