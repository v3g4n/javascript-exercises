const ftoc = function(degreesF) {
  return (Math.round(((degreesF - 32) * 5/9) * 10) / 10)
};

const ctof = function(degreesC) {
  return Math.round(((degreesC * 9/5) + 32) * 10) / 10
};

module.exports = {
  ftoc,
  ctof
};
