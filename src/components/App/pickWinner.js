import random from 'lodash.random';

/**
 * Generates a bucket of items proportionally to their `total` and
 * randomely picks an item out of that bucket.
 * @param  {Array} rows List of rows
 * @return {String}     Name of the winner
 */
export default function pickWinner(rows) {
  const bucket = createBucket(rows);
  const index = randomIndex(bucket);
  return bucket[index];
}

export function createBucket(items) {
  return items.reduce((bucket, item) => {
    const upper = parseInt(item.total, 10);
    for (let i = 0; i < upper; i++) {
      bucket.push(item.name);
    }
    return bucket;
  }, []);
}

export function randomIndex(array) {
  return random(array.length ? array.length - 1 : 0);
}
