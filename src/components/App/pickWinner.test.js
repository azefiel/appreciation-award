import pickWinner, { createBucket, generateRandomIndex } from './pickWinner';

const rows = [
  { name: 'paul', total: 3 },
  { name: 'henri', total: 2 },
  { name: 'jacques', total: 1 }
];
const expectedBucket = ['paul', 'paul', 'paul', 'henri', 'henri', 'jacques'];
const expectedIndexes = [0, 1, 2, 3, 4, 5];

test('unpack rows correctly', () => {
  const bucket = createBucket(rows);
  expect(bucket).toEqual(expectedBucket);
});

test('random index in range', () => {
  const expectedBucketLength = expectedBucket.length;
  const count = Math.pow(expectedBucketLength, 3);
  const randomIndexes = Array(count)
    .fill()
    .reduce((array) => {
      const index = generateRandomIndex(expectedBucketLength);
      !array.includes(index) && array.push(index);
      return array;
    }, [])
    .sort();

  expect(randomIndexes).toEqual(expectedIndexes);
});
