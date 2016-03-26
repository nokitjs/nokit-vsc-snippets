/*-Nokit Global-*/
/**
 * 全局应用程序类
 **/
var Global = nokit.define({

  /**
   * 应用启动时触发
   **/
  onStart: function(server, done) {
    done();
  },

  /**
   * 应用停止时触发
   **/
  onStop: function(server, done) {
    done();
  },

  /**
   * 在请求发生异常时
   **/
  onError: function(context, next) {
    next();
  },

  /**
   * 在请求到达时
   **/
  onRequest: function(context, next) {
    next();
  },

  /**
   * 在收到请求数据时
   **/
  onReceived: function(context, next) {
    next();
  },

  /**
   * 在发送响应时
   **/
  onResponse: function(context, next) {
    next();
  }

});

//exports
module.exports = Global;/*-$0-*/