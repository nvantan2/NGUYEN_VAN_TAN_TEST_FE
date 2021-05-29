export const chunkArray = (arr: any[], _size: number): any[][] => {
  const chunks: any[][] = [];
  arr.forEach((item) => {
    if (!chunks.length || chunks[chunks.length - 1].length == _size) chunks.push([]);
    chunks[chunks.length - 1].push(item);
  });

  return chunks;
};
