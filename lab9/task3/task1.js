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
var Integer = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _set_value_decorators;
    var _sqrt_decorators;
    return _a = /** @class */ (function () {
            function Integer() {
                this._value = (__runInitializers(this, _instanceExtraInitializers), void 0);
            }
            Object.defineProperty(Integer.prototype, "value", {
                set: function (value) {
                    this._value = value;
                },
                enumerable: false,
                configurable: true
            });
            Integer.prototype.sqrt = function () {
                console.log(Math.sqrt(this._value));
            };
            return Integer;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _set_value_decorators = [IsInt];
            _sqrt_decorators = [positivenumber];
            __esDecorate(_a, null, _set_value_decorators, { kind: "setter", name: "value", static: false, private: false, access: { has: function (obj) { return "value" in obj; }, set: function (obj, value) { obj.value = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _sqrt_decorators, { kind: "method", name: "sqrt", static: false, private: false, access: { has: function (obj) { return "sqrt" in obj; }, get: function (obj) { return obj.sqrt; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
function IsInt(target, context) {
    console.log("Set method");
    return function (arg) {
        console.log(!Number.isInteger(arg));
        if (!Number.isInteger(arg)) {
            // console.log("ne 4islo");
            // return;
            throw new Error("Не integer");
        }
        var res = target.call(this, arg);
        return res;
    };
}
function positivenumber(target, context) {
    var originalMethod = target;
    target = function () {
        if (this._value > 0) {
            originalMethod.call(this);
        }
        else {
            console.log("".concat(this._value, " <= 0"));
        }
    };
    return target;
}
var num = new Integer();
num.value = -9;
num.sqrt();
var num2 = new Integer();
num.value = 4;
num.sqrt();
//console.log(num.value);
