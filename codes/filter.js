/**
 * 全局应用程序类
 **/
var $The$Filter = function () { };

/**
 * 请求开始时触发
 **/
$The$Filter.prototype.onRequestBegin = function (context, next) {
    next();
};

/**
 * 收到数据时触发
 **/
$The$Filter.prototype.onReceived = function (context, next) {
    next();
};

/**
 * 开始响应时触发
 **/
$The$Filter.prototype.onResponse = function (context, next) {
    next();
};

/**
 * 请求结束时触发
 **/
$The$Filter.prototype.onRequestEnd = function (context, next) {
    next();
};

/**
 * 发生异常时触发
 **/
$The$Filter.prototype.onError = function (context, next) {
    next();
};

//exports
module.exports = $The$Filter;

//$0