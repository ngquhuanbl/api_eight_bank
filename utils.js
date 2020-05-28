module.exports = {
  randomIntegerBetween: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
}