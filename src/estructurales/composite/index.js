var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseShape = /** @class */ (function () {
    function BaseShape(x, y, color, lineWidth) {
        if (color === void 0) { color = 'black'; }
        if (lineWidth === void 0) { lineWidth = 5; }
        this.x = x;
        this.y = y;
        this.color = color;
        this.lineWidth = lineWidth;
    }
    BaseShape.prototype.getX = function () {
        return this.x;
    };
    BaseShape.prototype.getY = function () {
        return this.y;
    };
    BaseShape.prototype.getWidth = function () {
        return 0;
    };
    BaseShape.prototype.getHeight = function () {
        return 0;
    };
    BaseShape.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
    };
    BaseShape.prototype.isInsideBounds = function (x, y) {
        throw new Error("Method not implemented.");
    };
    BaseShape.prototype.paint = function (ctx) {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
    };
    return BaseShape;
}());
var Dot = /** @class */ (function (_super) {
    __extends(Dot, _super);
    function Dot(x, y, color) {
        if (color === void 0) { color = 'black'; }
        var _this = _super.call(this, x, y, color) || this;
        _this.DOT_SIZE = 3;
        return _this;
    }
    Dot.prototype.getHeight = function () {
        return this.DOT_SIZE;
    };
    Dot.prototype.getWidth = function () {
        return this.DOT_SIZE;
    };
    Dot.prototype.paint = function (ctx) {
        _super.prototype.paint.call(this, ctx);
        ctx.fillRect(this.getX() - 1, this.getY() - 1, this.DOT_SIZE, this.DOT_SIZE);
    };
    return Dot;
}(BaseShape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, radius, color, lineWidth) {
        if (color === void 0) { color = 'black'; }
        if (lineWidth === void 0) { lineWidth = 1; }
        var _this = _super.call(this, x, y, color, lineWidth) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getHeight = function () {
        return this.radius * 2;
    };
    Circle.prototype.getWidth = function () {
        return this.radius * 2;
    };
    Circle.prototype.paint = function (ctx) {
        _super.prototype.paint.call(this, ctx);
        ctx.arc(this.getX(), this.getY(), this.radius * 2, 0, 2 * Math.PI);
        ctx.stroke();
    };
    return Circle;
}(BaseShape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height, color, lineWidth) {
        if (color === void 0) { color = 'black'; }
        if (lineWidth === void 0) { lineWidth = 1; }
        var _this = _super.call(this, x, y, color, lineWidth) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.getHeight = function () {
        return this.height;
    };
    Rectangle.prototype.paint = function (ctx) {
        _super.prototype.paint.call(this, ctx);
        ctx.strokeRect(this.getX(), this.getY(), this.width, this.height);
    };
    return Rectangle;
}(BaseShape));
var CompoundShape = /** @class */ (function (_super) {
    __extends(CompoundShape, _super);
    function CompoundShape() {
        var components = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            components[_i] = arguments[_i];
        }
        var _this = _super.call(this, 0, 0, 'black') || this;
        _this.children = [];
        _this.add(components);
        return _this;
    }
    CompoundShape.prototype.add = function (components) {
        var _this = this;
        if (components instanceof Array) {
            components.forEach(function (item) {
                _this.children.push(item);
            });
        }
        else {
            this.children.push(components);
        }
    };
    CompoundShape.prototype.remove = function (component) {
        this.children = this.children.filter(function (shape) { return shape !== component; });
    };
    CompoundShape.prototype.clear = function () {
        this.children = [];
    };
    CompoundShape.prototype.paint = function (ctx) {
        _super.prototype.paint.call(this, ctx);
        this.children.forEach(function (child) {
            child.paint(ctx);
        });
    };
    return CompoundShape;
}(BaseShape));
var ImageEditor = /** @class */ (function () {
    function ImageEditor(canvas) {
        this.AllShapes = new CompoundShape();
        this.canvas = canvas;
    }
    ImageEditor.prototype.loadShapes = function () {
        var shapes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            shapes[_i] = arguments[_i];
        }
        this.AllShapes.clear();
        this.AllShapes.add(shapes);
        this.paint();
    };
    ImageEditor.prototype.paint = function () {
        this.AllShapes.paint(this.canvas);
    };
    return ImageEditor;
}());
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var editor = new ImageEditor(context);
editor.loadShapes(new Circle(20, 20, 10, 'green'), new Circle(70, 50, 5, 'purple'), new CompoundShape(new Rectangle(50, 50, 100, 100, 'pink'), new Circle(75, 75, 25), new CompoundShape(new Dot(200, 200), new Circle(100, 100, 20))));
