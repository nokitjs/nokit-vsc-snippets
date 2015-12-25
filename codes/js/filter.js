/*-Nokit Filter-*/
/**
 * $_The_$Filter
 **/
var $_The_$Filter = function () { };

/**
 * 请求开始时触发
 **/
$_The_$Filter.prototype.onRequestBegin = function (context, next) {
    next();
};

/**
 * 收到数据时触发
 **/
$_The_$Filter.prototype.onReceived = function (context, next) {
    next();
};

/**
 * 开始响应时触发
 **/
$_The_$Filter.prototype.onResponse = function (context, next) {
    next();
};

/**
 * 请求结束时触发
 **/
$_The_$Filter.prototype.onRequestEnd = function (context, next) {
    next();
};

/**
 * 发生异常时触发
 **/
$_The_$Filter.prototype.onError = function (context, next) {
    next();
};

//exports
module.exports = $_The_$Filter;

/*-$0-*/