function countBlackRectangles(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] === 1) {
          if ((i === 0 || grid[i - 1][j] === 0) && (j === 0 || grid[i][j - 1] === 0)) {
            count++;
          }
        }
      }
    }
  
    return count;
  }
  
  const grid = [
    [1, 0, 1, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [1, 0, 0, 0]
  ];
  
  const blackRectanglesCount = countBlackRectangles(grid);
  console.log(`Количество чёрных прямоугольников: ${blackRectanglesCount}`);
  