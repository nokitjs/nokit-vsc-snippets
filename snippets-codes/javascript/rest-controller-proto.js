/*-Nokit RESTful Controller-*/
/**
 * $_The_$Controller
 **/
var $_The_$Controller = function() { };

/**
 * 初始化方法，每次请求都会先执行 init 方法
 **/
$_The_$Controller.prototype.init = function() {
  var self = this;
  self.ready();
};

/**
 * Create (POST)
 **/
$_The_$Controller.prototype.post = function() {
  var self = this;
  self.send({});
};

/**
 * Read (GET)
 **/
$_The_$Controller.prototype.get = function() {
  var self = this;
  self.send({});
};

/**
 * Update (PUT)
 **/
$_The_$Controller.prototype.put = function() {
  var self = this;
  self.send({});
};

/**
 * Delete (DELETE)
 **/
$_The_$Controller.prototype.delete = function() {
  var self = this;
  self.send({});
};

module.exports = $_The_$Controller;/*-$0-*/