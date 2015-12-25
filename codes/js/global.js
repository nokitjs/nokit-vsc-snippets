/*-Nokit Global-*/
/**
 * 全局应用程序类
 **/
var Global = function () { };

/**
 * 应用启动时触发
 **/
Global.prototype.onStart = function (server, done) {
    done();
};

/**
 * 应用停止时触发
 **/
Global.prototype.onStop = function (server, done) {
    done();
};

/**
 * 发生异常时触发
 **/
Global.prototype.onError = function (context, done) {
    done();
};

/**
 * 请求开始时触发
 **/
Global.prototype.onRequestBegin = function (context, done) {
    done();
};

/**
 * 收到数据时触发
 **/
Global.prototype.onReceived = function (context, done) {
    done();
};

/**
 * 开始响应时触发
 **/
Global.prototype.onResponse = function (context, done) {
    done();
};

/**
 * 请求结束时触发
 **/
Global.prototype.onRequestEnd = function (context, done) {
    done();
};

module.exports = Global;

/*-$0-*/