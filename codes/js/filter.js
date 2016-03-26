/*-Nokit Filter-*/
/**
 * $_The_$Filter
 **/
var $_The_$Filter = nokit.define({

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
module.exports = $_The_$Filter;/*-$0-*/