/*-Nokit MVC Controller-*/
/**
 * $_The_$Controller
 **/
var $_The_$Controller = function () { };

/**
 * 初始化方法，每次请求都会先执行 init 方法
 **/
$_The_$Controller.prototype.init = function () {
    var self = this;
    self.ready();
}

/**
 * 默认 action
 **/
$_The_$Controller.prototype.index = function () {
    var self = this;
    self.render("view");
}

module.exports = $_The_$Controller;

/*-$0-*/