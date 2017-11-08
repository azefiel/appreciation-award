import random from 'lodash.random';

/**
 * Generates a bucket of items proportionally to their `total` and
 * randomely picks an item out of that bucket.
 * `bucket` and `randomIndex` are exposed for testing purposes.
 * @param  {Array} rows List of rows
 * @return {String}     Name of the winner
 */
function pickWinner(rows) {
  const bucket = rows.reduce((bucket, row) => {
    const total = parseInt(row.total, 10);
    for (var i = 0; i < total; i++) {
      bucket.push(row.name);
    }
    return bucket;
  }, []);
  const randomIndex = random(bucket.length - 1);
  return {
    winner: bucket[randomIndex],
    bucket: bucket,
    randomIndex: randomIndex
  };
}

export default pickWinner;
