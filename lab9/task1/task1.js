function countBlackRectangles(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var count = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                if ((i === 0 || grid[i - 1][j] === 0) && (j === 0 || grid[i][j - 1] === 0)) {
                    count++;
                }
            }
        }
    }
    return count;
}
var grid = [
    [1, 0, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0]
];
var blackRectanglesCount = countBlackRectangles(grid);
console.log("\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0447\u0451\u0440\u043D\u044B\u0445 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0438\u043A\u043E\u0432: ".concat(blackRectanglesCount));
