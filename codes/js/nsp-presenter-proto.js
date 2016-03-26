/*-Nokit NSP Presenter-*/
/**
 * $_The_$Presenter
 **/
var $_The_$Presenter = function() { };

/**
 * 初始化方法，每次请求都会先执行 init 方法
 **/
$_The_$Presenter.prototype.init = function() {
  var self = this;
  self.ready();
};

/**
 * 默认方法，首次打开页面，会触发 load 方法
 **/
$_The_$Presenter.prototype.load = function() {
  var self = this;
  self.render();
};

/**
 * 事件方法，可以绑定到页面中的 html 控件
 **/
$_The_$Presenter.prototype.test = function() {
  var self = this;
  self.render();
};

module.exports = $_The_$Presenter;/*-$0-*/