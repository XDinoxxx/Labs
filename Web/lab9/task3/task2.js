var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var User = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _first_print_decorators;
    return _a = /** @class */ (function () {
            function User(nickname, role) {
                this.nickname = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.nickname = nickname;
                this.role = role;
            }
            User.prototype.first_print = function () {
                console.log("Я все могу");
            };
            User.prototype.second_print = function () {
                console.log("Я не все могу");
            };
            return User;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _first_print_decorators = [adminOnly];
            __esDecorate(_a, null, _first_print_decorators, { kind: "method", name: "first_print", static: false, private: false, access: { has: function (obj) { return "first_print" in obj; }, get: function (obj) { return obj.first_print; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
function adminOnly(target, context) {
    var originalMethod = target;
    target = function () {
        if (this.role === "admin") {
            originalMethod.call(this);
        }
        else {
            console.log("Недостаточно прав");
        }
    };
    return target;
}
var user1 = new User("Helgard", "customer");
var user2 = new User("Levante", "admin");
user1.first_print();
user1.second_print();
user2.first_print();
user1.second_print();
