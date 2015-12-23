/**
 * HomeController
 **/
var HomeController = function () { };

/**
 * 初始化
 **/
HomeController.pototype.init = function () {
    var self = this;
    self.ready();
}

/**
 * 默认 action
 **/
HomeController.pototype.index = function () {
    var self = this;
    self.render("view");
}
