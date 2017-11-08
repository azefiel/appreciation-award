import pickWinner from './pickWinner';

const rows = [{
  name: 'paul',
  total: 3
},{
  name: 'henri',
  total: 2
},{
  name: 'mathieu',
  total: 1
}];
const expectedBucket = [
  'paul',
  'paul',
  'paul',
  'henri',
  'henri',
  'mathieu'
];

test('unpack rows correctly', () => {
  const result = pickWinner(rows);
  expect(result.bucket).toEqual(expectedBucket);
});

test('random index in range', () => {
  const randomIndexes = [];

  for (var i = 0; i < 1000; i++) {
    const result = pickWinner(rows);

    if (randomIndexes.indexOf(result.randomIndex + 1) < 0) {
      randomIndexes.push(result.randomIndex + 1);
    }
  }

  const randomIndexesSum = randomIndexes.reduce((sum, value) => sum + value, 0);
  const expectedBucketSum = expectedBucket.reduce((sum, value, index) =>
    sum + index + 1
  , 0);

  expect(randomIndexesSum).toEqual(expectedBucketSum);
});
