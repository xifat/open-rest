// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = {
    log: function(msg) {
      return function(req, res, next) {
        console.log(msg);
        return next();
      };
    },
    error: function(msg) {
      return function(req, res, next) {
        console.error(msg);
        return next();
      };
    },
    info: function(msg) {
      return function(req, res, next) {
        console.info(msg);
        return next();
      };
    },
    time: function(key) {
      return function(req, res, next) {
        console.time(key);
        return next();
      };
    },
    timeEnd: function(key) {
      return function(req, res, next) {
        console.timeEnd(key);
        return next();
      };
    }
  };

}).call(this);