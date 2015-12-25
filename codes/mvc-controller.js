/**
 * $The$Controller
 **/
var $The$Controller = function () { };

/**
 * 初始化
 **/
$The$Controller.prototype.init = function () {
    var self = this;
    self.ready();
}

/**
 * 默认 action
 **/
$The$Controller.prototype.index = function () {
    var self = this;
    self.render("view");
}

module.exports = $The$Controller;

//$0