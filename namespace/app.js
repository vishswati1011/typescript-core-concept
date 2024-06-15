var UserUtils;
(function (UserUtils) {
    var users = /** @class */ (function () {
        function users() {
        }
        users.prototype.getName = function () {
            return 'swati vish';
        };
        return users;
    }());
})(UserUtils || (UserUtils = {}));
var u1 = new UserUtils.users();
console.log(u1.getName());
