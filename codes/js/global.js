/*-Nokit Global-*/
/**
 * 全局应用程序类
 **/
var Global = function() { };

/**
 * 应用启动时触发
 **/
Global.prototype.onStart = function(server, done) {
  done();
};

/**
 * 应用停止时触发
 **/
Global.prototype.onStop = function(server, done) {
  done();
};

/**
 * 在请求发生异常时
 **/
Global.prototype.onError = function(context, done) {
  done();
};

/**
 * 在请求到达时
 **/
Global.prototype.onRequest = function(context, done) {
  done();
};

/**
 * 在收到请求数据时
 **/
Global.prototype.onReceived = function(context, done) {
  done();
};

/**
 * 在发送响应时
 **/
Global.prototype.onResponse = function(context, done) {
  done();
};

module.exports = Global;/*-$0-*/