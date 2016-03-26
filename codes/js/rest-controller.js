/*-Nokit RESTful Controller-*/
/**
 * $_The_$Controller
 **/
var $_The_$Controller = nokit.define({

  /**
   * 初始化方法，每次请求都会先执行 init 方法
   **/
  init: function() {
    var self = this;
    self.ready();
  },

  /**
   * Create (POST)
   **/
  post: function() {
    var self = this;
    self.send({});
  },

  /**
   * Read (GET)
   **/
  get: function() {
    var self = this;
    self.send({});
  },

  /**
   * Update (PUT)
   **/
  put: function() {
    var self = this;
    self.send({});
  },

  /**
   * Delete (DELETE)
   **/
  delete: function() {
    var self = this;
    self.send({});
  }

});

module.exports = $_The_$Controller;/*-$0-*/