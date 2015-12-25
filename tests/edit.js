
/**
 * UserController
 **/
var UserController = function () { };

/**
 * 初始化
 **/
UserController.prototype.init = function () {
    var self = this;
    self.ready();
}

/**
 * Create (POST)
 **/
UserController.prototype.post = function () {
    var self = this;
    self.out("{}");
}

/**
 * Read (GET)
 **/
UserController.prototype.get = function () {
    var self = this;
    self.out("{}");
}

/**
 * Update (PUT)
 **/
UserController.prototype.put = function () {
    var self = this;
    self.out("{}");
}

/**
 * Delete (DELETE)
 **/
UserController.prototype.delete = function () {
    var self = this;
    self.out("{}");
}

module.exports = UserController;
