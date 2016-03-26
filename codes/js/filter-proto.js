/*-Nokit Filter-*/
/**
 * $_The_$Filter
 **/
var $_The_$Filter = function() { };

/**
 * 在请求发生异常时
 **/
$_The_$Filter.prototype.onError = function(context, next) {
  next();
};

/**
 * 在请求到达时
 **/
$_The_$Filter.prototype.onRequest = function(context, next) {
  next();
};

/**
 * 在收到请求数据时
 **/
$_The_$Filter.prototype.onReceived = function(context, next) {
  next();
};

/**
 * 在发送响应时
 **/
$_The_$Filter.prototype.onResponse = function(context, next) {
  next();
};

//exports
module.exports = $_The_$Filter;/*-$0-*/