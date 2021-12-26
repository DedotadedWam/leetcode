/*
@param {string} s
@param {number} numRows
@return {string}
*/

var convert = function (s, numRows) {
  const increment = numRows + (numRows - 2);
  const chunks = chunker(s, increment);
  const zigzagChunks = [];
  chunks.forEach((chunk) => {
    zigzagChunks.push(zigZagChunk(chunk, numRows, increment));
  });

  const result = combine(zigzagChunks);

  return result.join("");
};

function chunker(s, increment) {
  const chunks = [];

  let prev, i, chunk;
  for (i = 0; i < s.length; i += increment) {
    if (i === 0) {
      prev = 0;
      continue;
    }
    chunk = s.slice(prev, i);
    chunks.push(chunk);
    prev = i;
  }
  chunk = s.slice(prev, s.length);
  chunks.push(chunk);

  return chunks;
}

function zigZagChunk(chunk, rows, inc) {
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push([]);
  }

  rows = rows - 1;

  for (let i = 0; i < inc; i++) {
    if (chunk[i] === undefined) continue;
    if (i <= rows) {
      result[i].push(chunk[i]);
    } else {
      let place = rows - (i - rows);
      result[place].push(chunk[i]);
    }
  }

  return result;
}

function combine(arr) {
  let result = [];
  for (let i = 0; i < arr[0].length; i++) {
    let row = [];
    for (let j = 0; j < arr.length; j++) {
      row.push(arr[j][i]);
    }
    row = row.flat();
    result.push(row);
  }
  result = result.flat();

  return result;
}
