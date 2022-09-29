var canvas2 = document.getElementById('canvas2');
var context2 = canvas2.getContext('2d');
var TreeType = /** @class */ (function () {
    function TreeType(name, color, otherTreeData) {
        this.name = name;
        this.color = color;
        this.otherTreeData = otherTreeData;
    }
    TreeType.prototype.draw = function (ctx, x, y) {
        ctx.beginPath();
        ctx.fillStyle = 'brown';
        ctx.fillRect(x, y, 5, 20);
        ctx.fillStyle = this.color;
        ctx.ellipse(x + 2.5, y, 14, 8, 0, 0, 2 * Math.PI);
        ctx.fill();
    };
    return TreeType;
}());
var Tree = /** @class */ (function () {
    function Tree(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
    Tree.prototype.draw = function (ctx) {
        this.type.draw(ctx, this.x, this.y);
    };
    return Tree;
}());
var TreeFactory = /** @class */ (function () {
    function TreeFactory() {
    }
    TreeFactory.getTreeType = function (name, color, otherTreeData) {
        var result = this.treeTypes.get(name);
        if (result == undefined) {
            result = new TreeType(name, color, otherTreeData);
            this.treeTypes.set(name, result);
        }
        return result;
    };
    TreeFactory.treeTypes = new Map();
    return TreeFactory;
}());
var Forest = /** @class */ (function () {
    function Forest() {
        this.trees = [];
    }
    Forest.prototype.plantTree = function (x, y, name, color, otherTreeData) {
        var type = TreeFactory.getTreeType(name, color, otherTreeData);
        var tree = new Tree(x, y, type);
        this.trees.push(tree);
    };
    Forest.prototype.paint = function (ctx) {
        this.trees.forEach(function (tree) {
            tree.draw(ctx);
        });
    };
    return Forest;
}());
var forest = new Forest();
for (var i = 0; i < 10000; i++) {
    var color = Math.random();
    if (color > 0.5) {
        forest.plantTree(Math.round(Math.random() * 400), Math.round(Math.random() * 400), 'Summer Oak', 'green', 'more data');
    }
    else {
        forest.plantTree(Math.round(Math.random() * 400), Math.round(Math.random() * 400), 'Autumn Oak', 'orange', 'more data blah blah');
    }
}
forest.paint(context2);
